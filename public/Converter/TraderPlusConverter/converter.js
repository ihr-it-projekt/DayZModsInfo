/**
 * Browser-based TraderPlus Converter
 * Requires TraderPlusPriceConfig.json, TraderPlusGeneralConfig.json, and TraderPlusIDsConfig.json
 */

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const priceConfigStatus = document.getElementById('priceConfigStatus');
const generalConfigStatus = document.getElementById('generalConfigStatus');
const idsConfigStatus = document.getElementById('idsConfigStatus');
const convertButton = document.getElementById('convertButton');
const progress = document.getElementById('progress');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const results = document.getElementById('results');
const resultsInfo = document.getElementById('resultsInfo');
const resultsFiles = document.getElementById('resultsFiles');
const resultsSize = document.getElementById('resultsSize');
const errorDiv = document.getElementById('error');
const options = document.getElementById('options');
const groupingMode = document.getElementById('groupingMode');
const proximityGroup = document.getElementById('proximityGroup');
const proximityDistance = document.getElementById('proximityDistance');

let priceConfigFile = null;
let generalConfigFile = null;
let idsConfigFile = null;

// Show/hide proximity distance input based on grouping mode
groupingMode.addEventListener('change', () => {
    proximityGroup.style.display = groupingMode.value === 'proximity' ? 'block' : 'none';
});

// Initialize proximity group visibility
proximityGroup.style.display = groupingMode.value === 'proximity' ? 'block' : 'none';

// Initialize file status text
checkAllFilesReady();

// Single upload area handlers
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
        handleFiles(files);
    }
});

fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
        handleFiles(files);
    }
});

/**
 * Detects file type based on filename and content
 */
async function detectFileType(file) {
    const filename = file.name.toLowerCase();
    
    // First try filename-based detection
    if (filename.includes('priceconfig') || filename.includes('price_config')) {
        return 'priceConfig';
    } else if (filename.includes('generalconfig') || filename.includes('general_config')) {
        return 'generalConfig';
    } else if (filename.includes('idsconfig') || filename.includes('ids_config')) {
        return 'idsConfig';
    }
    
    // Try to detect from content
    try {
        const content = await readFileAsText(file);
        const fixedContent = content.replace(/,(\s*[}\]])/g, '$1');
        const config = JSON.parse(fixedContent);
        
        if (config.TraderCategories && Array.isArray(config.TraderCategories)) {
            return 'priceConfig';
        } else if (config.Traders && Array.isArray(config.Traders)) {
            return 'generalConfig';
        } else if (config.IDs && Array.isArray(config.IDs)) {
            return 'idsConfig';
        }
    } catch (e) {
        // Couldn't parse, will return null
    }
    
    return null;
}

/**
 * Handles multiple files being dropped/selected
 */
async function handleFiles(files) {
    errorDiv.classList.remove('show');
    
    // Filter to only JSON files
    const jsonFiles = files.filter(file => file.name.endsWith('.json'));
    
    if (jsonFiles.length === 0) {
        showError('Please select JSON files');
        return;
    }
    
    // Process each file and detect its type
    for (const file of jsonFiles) {
        try {
            const fileType = await detectFileType(file);
            
            if (!fileType) {
                showError(`${file.name} - Could not detect file type. Expected TraderPlusPriceConfig.json, TraderPlusGeneralConfig.json, or TraderPlusIDsConfig.json`);
                continue;
            }
            
            // Assign file to appropriate variable
            if (fileType === 'priceConfig') {
                if (priceConfigFile) {
                    setFileStatusText('priceConfig', `⚠ Replaced: ${file.name} (${formatFileSize(file.size)})`);
                }
                priceConfigFile = file;
                setFileStatusText('priceConfig', `✓ ${file.name} (${formatFileSize(file.size)})`);
            } else if (fileType === 'generalConfig') {
                if (generalConfigFile) {
                    setFileStatusText('generalConfig', `⚠ Replaced: ${file.name} (${formatFileSize(file.size)})`);
                }
                generalConfigFile = file;
                setFileStatusText('generalConfig', `✓ ${file.name} (${formatFileSize(file.size)})`);
            } else if (fileType === 'idsConfig') {
                if (idsConfigFile) {
                    setFileStatusText('idsConfig', `⚠ Replaced: ${file.name} (${formatFileSize(file.size)})`);
                }
                idsConfigFile = file;
                setFileStatusText('idsConfig', `✓ ${file.name} (${formatFileSize(file.size)})`);
            }
        } catch (error) {
            showError(`Error processing ${file.name}: ${error.message}`);
        }
    }
    
    checkAllFilesReady();
}

/**
 * Sets file status text for a specific file type
 */
function setFileStatusText(fileType, text) {
    let statusElement;
    if (fileType === 'priceConfig') {
        statusElement = priceConfigStatus;
    } else if (fileType === 'generalConfig') {
        statusElement = generalConfigStatus;
    } else if (fileType === 'idsConfig') {
        statusElement = idsConfigStatus;
    } else {
        return; // Unknown file type
    }
    
    statusElement.textContent = text;
    statusElement.className = 'file-status-text';
    
    if (text.startsWith('✓')) {
        statusElement.classList.add('uploaded');
    } else if (text.startsWith('❌') || text.startsWith('⚠')) {
        statusElement.classList.add('error');
    } else {
        statusElement.classList.add('pending');
    }
}


/**
 * Checks if all files are ready and enables convert button
 */
function checkAllFilesReady() {
    if (priceConfigFile && generalConfigFile && idsConfigFile) {
        convertButton.disabled = false;
        options.classList.add('show');
    } else {
        convertButton.disabled = true;
        if (!priceConfigFile && !generalConfigFile && !idsConfigFile) {
            options.classList.remove('show');
        }
    }
    
    // Update status for missing files
    if (!priceConfigFile) {
        setFileStatusText('priceConfig', 'Not uploaded');
    }
    if (!generalConfigFile) {
        setFileStatusText('generalConfig', 'Not uploaded');
    }
    if (!idsConfigFile) {
        setFileStatusText('idsConfig', 'Not uploaded');
    }
}

/**
 * Formats file size for display
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Shows error message
 */
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

/**
 * Updates progress bar
 */
function updateProgress(percent, text) {
    progressFill.style.width = percent + '%';
    progressText.textContent = text;
}

/**
 * Parses a product string into an object (for Price Config)
 * Format: "ItemName,coefficient,maxStorage,quantity,maxBuyPrice,maxSellPrice,reducePerTick"
 */
function parseProductString(productString, categoryName) {
    const parts = productString.split(',');
    
    if (parts.length < 2) {
        return null;
    }
    
    const uniqueName = parts[0].trim();
    if (!uniqueName) {
        return null;
    }

    const itemData = {
        uniqueName: "",
        type: "",
        category: categoryName,
        quantity: 0,
        isPremium: 0,
        currency: "default",
        isStorageItem: 0,
        buyPrice: 0,
        maxBuyPrice: 0,
        sellPrice: 0,
        maxSellPrice: 0,
        maxStorage: 0,
        reducePerTick: 0,
        tickLengthInMinutes: 0,
        maxCountThatPlayerCanBuyAsAttachment: 1,
        maxCountThatPlayerCanBuyAsOptionalAttachment: 1,
        storageItem: {},
        attachmentUniqueNames: [],
        optionalAttachmentUniqueNames: []
    }

    let coefficient = 1.0;
    let destockPercentage = 0.0;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        switch (i) {
            case 0:
                itemData.uniqueName = part.trim();
                itemData.type = part.trim();
                break;
            case 1:
                coefficient = parseFloat(part.trim()) || 1.0;
                break;
            case 2:
                itemData.maxStorage = parseInt(part.trim()) || 0;
                break;
            case 3:
                itemData.quantity = parseFloat(part.trim()) || 1.0;
                break;
            case 4:
                itemData.maxBuyPrice = parseInt(part.trim()) || 0;
                break;
            case 5:
                itemData.maxSellPrice = parseFloat(part.trim()) || 0;
                break;
            case 6:
                destockPercentage = parseFloat(part.trim()) || 0.0;
                break;
        }
    }

    if (itemData.maxStorage === -1) itemData.maxStorage = 0;
    if (itemData.reducePerTick === -1) itemData.reducePerTick = 0;
    if (itemData.maxSellPrice === -1) itemData.maxSellPrice = 0;
    if (itemData.maxBuyPrice === -1) itemData.maxBuyPrice = 0;

    itemData.buyPrice = itemData.maxBuyPrice * coefficient;
    if (itemData.maxSellPrice !== 0 && itemData.maxSellPrice <= 1.0) {
        itemData.maxSellPrice = itemData.maxBuyPrice * itemData.maxSellPrice;
    }
    itemData.sellPrice = itemData.maxSellPrice * coefficient;

    if (itemData.maxStorage > 0) {
        itemData.isStorageItem = 1;
        itemData.tickLengthInMinutes = 1;
    }
    
    return itemData;
}

/**
 * Calculates distance between two 3D points (for Dealer Points)
 */
function calculateDistance(pos1, pos2) {
    const dx = pos1[0] - pos2[0];
    const dy = pos1[1] - pos2[1];
    const dz = pos1[2] - pos2[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Groups traders by proximity (for Dealer Points)
 */
function groupTradersByProximity(traders, maxDistance) {
    const groups = [];
    const processed = new Set();

    traders.forEach((trader, index) => {
        if (processed.has(index)) return;

        const group = [trader];
        processed.add(index);

        traders.forEach((otherTrader, otherIndex) => {
            if (processed.has(otherIndex)) return;
            if (index === otherIndex) return;

            const distance = calculateDistance(trader.Position, otherTrader.Position);
            if (distance <= maxDistance) {
                group.push(otherTrader);
                processed.add(otherIndex);
            }
        });

        groups.push(group);
    });

    return groups;
}

/**
 * Generates a unique name for a dealer point
 */
function generateDealerPointName(traders, index) {
    if (traders.length === 1) {
        const trader = traders[0];
        return trader.GivenName || trader.Role || `DealerPoint_${index + 1}`;
    } else {
        const firstTrader = traders[0];
        const baseName = firstTrader.GivenName || firstTrader.Role || 'DealerPoint';
        return `${baseName}_Group_${index + 1}`;
    }
}

/**
 * Creates a dealer point configuration from traders
 */
function createDealerPoint(traders, uniqueName, sellTax) {
    const firstTrader = traders[0];
    
    let position = firstTrader.Position;
    let orientation = firstTrader.Orientation;
    
    if (traders.length > 1) {
        const avgPos = [0, 0, 0];
        traders.forEach(trader => {
            avgPos[0] += trader.Position[0];
            avgPos[1] += trader.Position[1];
            avgPos[2] += trader.Position[2];
        });
        position = [
            avgPos[0] / traders.length,
            avgPos[1] / traders.length,
            avgPos[2] / traders.length
        ];
        orientation = firstTrader.Orientation;
    }

    return {
        uniqueName: uniqueName,
        version: "0",
        sellTax: sellTax,
        position: position,
        orientation: orientation,
        useExactPosition: 0,
        type: "TBDTTraderMachine",
        uniqueFileNames: []
    };
}

/**
 * Processes Price Config and adds items to ZIP
 */
function processPriceConfig(config, zip) {
    updateProgress(20, 'Processing price config items...');

    const itemsMap = new Map();
    let totalProducts = 0;
    let processedProducts = 0;

    config.TraderCategories.forEach((category, catIndex) => {
        const categoryName = category.CategoryName || 'Unknown';
        
        if (!category.Products || !Array.isArray(category.Products)) {
            return;
        }
        
        category.Products.forEach(productString => {
            totalProducts++;
            const cleanProductString = productString.replace(/^["']|["']$/g, '').trim();
            
            if (!cleanProductString) {
                return;
            }
            
            const itemData = parseProductString(cleanProductString, categoryName);
            
            if (itemData) {
                itemsMap.set(itemData.uniqueName, itemData);
                processedProducts++;
            }
        });

        const progressPercent = 20 + (catIndex / config.TraderCategories.length) * 30;
        updateProgress(progressPercent, `Processing items... (${processedProducts} processed)`);
    });

    // Add items to TraderItemConfigs folder
    itemsMap.forEach((itemData, uniqueName) => {
        const fileName = `TraderItemConfigs/${uniqueName}.json`;
        const jsonContent = JSON.stringify(itemData, null, 4);
        zip.file(fileName, jsonContent);
    });

    return {
        itemsProcessed: processedProducts,
        totalProducts: totalProducts,
        uniqueItems: itemsMap.size
    };
}

/**
 * Creates a mapping from TraderID to Categories from IDs Config
 */
function createTraderIDCategoryMap(idsConfig) {
    const idCategoryMap = new Map();
    
    if (!idsConfig.IDs || !Array.isArray(idsConfig.IDs)) {
        return idCategoryMap;
    }
    
    idsConfig.IDs.forEach(idEntry => {
        const traderId = idEntry.Id;
        const categories = idEntry.Categories || [];
        
        // Create a Set of categories for this trader ID
        const categorySet = new Set(categories.map(cat => cat.toLowerCase().trim()));
        idCategoryMap.set(traderId, categorySet);
    });
    
    return idCategoryMap;
}

/**
 * Processes General Config and adds dealer points to ZIP
 */
function processGeneralConfig(config, zip, priceConfig, idsConfig) {
    updateProgress(50, 'Processing general config...');

    const mode = groupingMode.value;
    const distance = parseFloat(proximityDistance.value) || 500;
    const sellTax = parseFloat(document.getElementById('defaultSellTax').value) || 0.0;

    let traderGroups;
    if (mode === 'proximity') {
        traderGroups = groupTradersByProximity(config.Traders, distance);
    } else {
        traderGroups = config.Traders.map(trader => [trader]);
    }

    updateProgress(60, 'Creating dealer point files...');

    const dealerPoints = [];
    const dealerPointFiles = new Map();

    traderGroups.forEach((group, index) => {
        const uniqueName = generateDealerPointName(group, index);
        dealerPoints.push(uniqueName);
        
        const dealerPoint = createDealerPoint(group, uniqueName, sellTax);
        dealerPointFiles.set(uniqueName, dealerPoint);
    });

    updateProgress(65, 'Matching items to dealer points...');

    // Match items to dealer points based on categories
    const idCategoryMap = createTraderIDCategoryMap(idsConfig);
    
    // Create mapping: Item uniqueName -> Item category
    const itemCategoryMap = new Map();
    priceConfig.TraderCategories.forEach(category => {
        const categoryName = category.CategoryName || '';
        if (category.Products && Array.isArray(category.Products)) {
            category.Products.forEach(productString => {
                const cleanProductString = productString.replace(/^["']|["']$/g, '').trim();
                if (cleanProductString) {
                    const parts = cleanProductString.split(',');
                    if (parts.length > 0) {
                        const uniqueName = parts[0].trim();
                        if (uniqueName) {
                            itemCategoryMap.set(uniqueName, categoryName.toLowerCase().trim());
                        }
                    }
                }
            });
        }
    });
    
    // For each dealer point, find items that match its traders
    dealerPointFiles.forEach((dealerPoint, dealerPointName) => {
        const matchedItems = new Set();
        
        // Get all trader IDs in this dealer point
        const traderIdsInDealerPoint = new Set();
        traderGroups.forEach((group, index) => {
            const uniqueName = generateDealerPointName(group, index);
            if (uniqueName === dealerPointName) {
                group.forEach(trader => {
                    traderIdsInDealerPoint.add(trader.Id);
                });
            }
        });
        
        // For each item, check if its category matches any trader ID's categories in this dealer point
        itemCategoryMap.forEach((itemCategory, itemUniqueName) => {
            traderIdsInDealerPoint.forEach(traderId => {
                const categorySet = idCategoryMap.get(traderId);
                if (categorySet && categorySet.has(itemCategory)) {
                    matchedItems.add(itemUniqueName);
                }
            });
        });
        
        // Add matched items to dealer point's uniqueFileNames
        dealerPoint.uniqueFileNames = Array.from(matchedItems).sort();
    });

    updateProgress(70, 'Adding dealer points to ZIP...');

    // Create DealerPoints.json
    const dealerPointsConfig = {
        version: "1",
        isInitialized: 1,
        dealerPointsNames: dealerPoints
    };

    zip.file('DealerPoints.json', JSON.stringify(dealerPointsConfig, null, 4));
    
    // Add individual dealer point files
    dealerPointFiles.forEach((dealerPoint, uniqueName) => {
        const fileName = `DealerPoints/${uniqueName}.json`;
        zip.file(fileName, JSON.stringify(dealerPoint, null, 4));
    });

    return {
        dealerPointsCount: dealerPoints.length,
        filesCount: dealerPointFiles.size + 1,
        totalItemsMatched: Array.from(dealerPointFiles.values()).reduce((sum, dp) => sum + dp.uniqueFileNames.length, 0)
    };
}

/**
 * Main conversion function - processes all three files
 */
async function convertAndZip() {
    if (!priceConfigFile || !generalConfigFile || !idsConfigFile) {
        showError('Please upload all three files first');
        return;
    }

    try {
        convertButton.disabled = true;
        progress.classList.add('show');
        errorDiv.classList.remove('show');
        results.classList.remove('show');
        updateProgress(5, 'Reading files...');

        // Read all three files
        const priceConfigContent = await readFileAsText(priceConfigFile);
        updateProgress(8, 'Parsing price config...');

        const generalConfigContent = await readFileAsText(generalConfigFile);
        updateProgress(12, 'Parsing general config...');

        const idsConfigContent = await readFileAsText(idsConfigFile);
        updateProgress(15, 'Parsing IDs config...');

        // Fix trailing commas and parse JSON
        const fixedPriceContent = priceConfigContent.replace(/,(\s*[}\]])/g, '$1');
        const fixedGeneralContent = generalConfigContent.replace(/,(\s*[}\]])/g, '$1');
        const fixedIdsContent = idsConfigContent.replace(/,(\s*[}\]])/g, '$1');
        
        let priceConfig, generalConfig, idsConfig;
        try {
            priceConfig = JSON.parse(fixedPriceContent);
            generalConfig = JSON.parse(fixedGeneralContent);
            idsConfig = JSON.parse(fixedIdsContent);
        } catch (e) {
            throw new Error('Invalid JSON file: ' + e.message);
        }

        if (!priceConfig.TraderCategories || !Array.isArray(priceConfig.TraderCategories)) {
            throw new Error('Invalid TraderPlusPriceConfig.json format: TraderCategories not found');
        }

        if (!generalConfig.Traders || !Array.isArray(generalConfig.Traders)) {
            throw new Error('Invalid TraderPlusGeneralConfig.json format: Traders array not found');
        }

        if (generalConfig.Traders.length === 0) {
            throw new Error('No traders found in the general configuration');
        }

        if (!idsConfig.IDs || !Array.isArray(idsConfig.IDs)) {
            throw new Error('Invalid TraderPlusIDsConfig.json format: IDs array not found');
        }

        updateProgress(18, 'Creating ZIP file...');

        // Create ZIP file
        const zip = new JSZip();

        // Process price config (items)
        const priceStats = processPriceConfig(priceConfig, zip);

        // Process general config (dealer points) - now with item matching
        const generalStats = processGeneralConfig(generalConfig, zip, priceConfig, idsConfig);

        updateProgress(90, 'Generating ZIP download...');

        // Generate ZIP blob
        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 9 }
        }, (metadata) => {
            if (metadata.percent) {
                updateProgress(90 + (metadata.percent / 10), 'Generating ZIP download...');
            }
        });

        updateProgress(100, 'Complete!');

        // Download ZIP file
        const zipFileName = `TraderPlusConverted_${new Date().toISOString().split('T')[0]}.zip`;
        downloadBlob(zipBlob, zipFileName);

        // Show results
        const sizeInMB = (zipBlob.size / 1024 / 1024).toFixed(2);
        resultsInfo.textContent = `Items: ${priceStats.itemsProcessed} processed (${priceStats.uniqueItems} unique) | Dealer Points: ${generalStats.dealerPointsCount} | Items matched: ${generalStats.totalItemsMatched}`;
        resultsFiles.textContent = `Files created: ${priceStats.uniqueItems} items in TraderItemConfigs/ + ${generalStats.filesCount} dealer point files (with category-matched items)`;
        resultsSize.textContent = `ZIP file size: ${sizeInMB} MB`;
        results.classList.add('show');

        setTimeout(() => {
            convertButton.disabled = false;
            progress.classList.remove('show');
        }, 1000);

    } catch (error) {
        showError('Error: ' + error.message);
        convertButton.disabled = false;
        progress.classList.remove('show');
        console.error('Conversion error:', error);
    }
}

/**
 * Reads file as text
 */
function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}

/**
 * Downloads a blob as a file
 */
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Convert button click handler
convertButton.addEventListener('click', convertAndZip);
