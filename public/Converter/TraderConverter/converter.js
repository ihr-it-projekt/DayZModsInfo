/**
 * Browser-based Trader Converter
 * Converts TraderConfig.txt and TraderObjects.txt to TBDynamicTrader format
 */

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const traderConfigStatus = document.getElementById('traderConfigStatus');
const traderObjectsStatus = document.getElementById('traderObjectsStatus');
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

let traderConfigFile = null;
let traderObjectsFile = null;

// Show/hide proximity distance input based on grouping mode
groupingMode.addEventListener('change', () => {
    proximityGroup.style.display = groupingMode.value === 'proximity' ? 'block' : 'none';
});

// Initialize proximity group visibility
proximityGroup.style.display = groupingMode.value === 'proximity' ? 'block' : 'none';

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
 * Handles multiple files being dropped/selected
 */
function handleFiles(files) {
    errorDiv.classList.remove('show');
    
    // Filter to only .txt files
    const txtFiles = files.filter(file => file.name.toLowerCase().endsWith('.txt'));
    
    if (txtFiles.length === 0) {
        showError('Please select .txt files');
        return;
    }
    
    // Process each file and detect its type
    txtFiles.forEach(file => {
        const filename = file.name.toLowerCase();
        
        if (filename.includes('traderconfig') || filename === 'traderconfig.txt') {
            traderConfigFile = file;
            setFileStatusText('traderConfig', `✓ ${file.name} (${formatFileSize(file.size)})`);
        } else if (filename.includes('traderobjects') || filename === 'traderobjects.txt') {
            traderObjectsFile = file;
            setFileStatusText('traderObjects', `✓ ${file.name} (${formatFileSize(file.size)})`);
        } else {
            showError(`Unknown file: ${file.name}. Expected TraderConfig.txt or TraderObjects.txt`);
        }
    });
    
    checkAllFilesReady();
}

/**
 * Sets file status text for a specific file type
 */
function setFileStatusText(fileType, text) {
    let statusElement;
    if (fileType === 'traderConfig') {
        statusElement = traderConfigStatus;
    } else if (fileType === 'traderObjects') {
        statusElement = traderObjectsStatus;
    } else {
        return;
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
    if (traderConfigFile && traderObjectsFile) {
        convertButton.disabled = false;
        options.classList.add('show');
    } else {
        convertButton.disabled = true;
        if (!traderConfigFile && !traderObjectsFile) {
            options.classList.remove('show');
        }
    }
    
    // Update status for missing files
    if (!traderConfigFile) {
        setFileStatusText('traderConfig', 'Not uploaded');
    }
    if (!traderObjectsFile) {
        setFileStatusText('traderObjects', 'Not uploaded');
    }
}

// Initialize file status text
checkAllFilesReady();

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
 * Removes comments (everything after //) and strips the line
 */
function removeCommentsAndStrip(line) {
    if (!line) return '';
    
    // Find the position of // (but not if it's part of a URL or path)
    const commentIndex = line.indexOf('//');
    
    if (commentIndex !== -1) {
        // Remove everything from // onwards
        line = line.substring(0, commentIndex);
    }
    
    // Strip whitespace
    return line.trim();
}

/**
 * Parses quantity string to number
 * * = 1 (max), S = 1 (steak), W = 1 (weapon), M = 1 (magazine), V = 1 (vehicle), VNK = 1 (vehicle no key)
 * Numbers = that number
 */
function parseQuantity(quantityStr) {
    if (!quantityStr || quantityStr.trim() === '*') {
        return 1.0;
    }
    
    const qty = quantityStr.trim().toUpperCase();
    if (qty === 'S' || qty === 'W' || qty === 'M' || qty === 'V' || qty === 'VNK') {
        return 1.0;
    }
    
    const num = parseFloat(quantityStr);
    return isNaN(num) ? 1.0 : num;
}

/**
 * Parses TraderConfig.txt file
 */
function parseTraderConfig(content) {
    const lines = content.split('\n');
    const traders = [];
    let currentTrader = null;
    let currentCategory = null;
    let traderId = -1;
    
    for (let i = 0; i < lines.length; i++) {
        let line = removeCommentsAndStrip(lines[i]);
        
        // Skip empty lines
        if (!line) {
            continue;
        }
        
        // Parse trader marker
        if (line.startsWith('<Trader>')) {
            // Save previous trader if exists
            if (currentTrader) {
                traders.push(currentTrader);
            }
            
            traderId++;
            const traderName = line.replace('<Trader>', '').trim();
            currentTrader = {
                id: traderId,
                name: traderName,
                categories: []
            };
            currentCategory = null;
            continue;
        }
        
        // Parse category
        if (line.startsWith('<Category>')) {
            const categoryName = line.replace('<Category>', '').trim();
            currentCategory = {
                name: categoryName,
                items: []
            };
            if (currentTrader) {
                currentTrader.categories.push(currentCategory);
            }
            continue;
        }
        
        // Parse item line (format: ItemName, Quantity, BuyValue, SellValue)
        if (currentCategory && line.includes(',')) {
            const parts = line.split(',').map(p => p.trim());
            if (parts.length >= 2) {
                const itemName = parts[0].trim();
                if (itemName) {
                    const quantity = parseQuantity(parts[1]);
                    const buyPrice = parts.length > 2 && parts[2] !== '-1' ? parseInt(parts[2]) || 0 : 0;
                    const sellPrice = parts.length > 3 && parts[3] !== '-1' ? parseInt(parts[3]) || 0 : 0;
                    
                    currentCategory.items.push({
                        uniqueName: itemName,
                        quantity: quantity,
                        buyPrice: buyPrice,
                        sellPrice: sellPrice
                    });
                }
            }
        }
    }
    
    // Add last trader
    if (currentTrader) {
        traders.push(currentTrader);
    }
    
    return traders;
}

/**
 * Parses TraderObjects.txt file
 */
function parseTraderObjects(content) {
    const lines = content.split('\n');
    const traders = [];
    let currentTrader = null;
    
    for (let i = 0; i < lines.length; i++) {
        let line = removeCommentsAndStrip(lines[i]);
        
        // Skip empty lines
        if (!line) {
            continue;
        }
        
        // Parse trader marker
        if (line.startsWith('<TraderMarker>')) {
            // Save previous trader if exists
            if (currentTrader && currentTrader.position) {
                traders.push(currentTrader);
            }
            
            const traderId = parseInt(line.replace('<TraderMarker>', '').trim());
            currentTrader = {
                id: traderId,
                position: null,
                orientation: [0, 0, 0],
                safezone: 0
            };
            continue;
        }
        
        // Parse position
        if (line.startsWith('<TraderMarkerPosition>')) {
            const posStr = line.replace('<TraderMarkerPosition>', '').trim();
            const coords = posStr.split(',').map(c => parseFloat(c.trim()));
            if (coords.length >= 3) {
                currentTrader.position = [coords[0], coords[1], coords[2]];
            }
            continue;
        }
        
        // Parse orientation (from ObjectOrientation)
        if (line.startsWith('<ObjectOrientation>')) {
            const oriStr = line.replace('<ObjectOrientation>', '').trim();
            const coords = oriStr.split(',').map(c => parseFloat(c.trim()));
            if (coords.length >= 3) {
                currentTrader.orientation = [coords[0], coords[1], coords[2]];
            }
            continue;
        }
        
        // Parse safezone
        if (line.startsWith('<TraderMarkerSafezone>')) {
            const safezone = parseInt(line.replace('<TraderMarkerSafezone>', '').trim());
            if (currentTrader) {
                currentTrader.safezone = safezone || 0;
            }
            continue;
        }
    }
    
    // Add last trader
    if (currentTrader && currentTrader.position) {
        traders.push(currentTrader);
    }
    
    return traders;
}

/**
 * Creates item data object in TBDynamicTrader format
 */
function createItemData(item, categoryName) {
    return {
        uniqueName: item.uniqueName,
        type: item.uniqueName,
        category: categoryName,
        quantity: item.quantity,
        isPremium: 0,
        currency: "default",
        isStorageItem: 0,
        buyPrice: item.buyPrice,
        maxBuyPrice: item.buyPrice,
        sellPrice: item.sellPrice,
        maxSellPrice: item.sellPrice,
        maxStorage: 0,
        reducePerTick: 0,
        tickLengthInMinutes: 0,
        maxCountThatPlayerCanBuyAsAttachment: 1,
        maxCountThatPlayerCanBuyAsOptionalAttachment: 1,
        storageItem: {},
        attachmentUniqueNames: [],
        optionalAttachmentUniqueNames: []
    };
}

/**
 * Calculates distance between two 3D points
 */
function calculateDistance(pos1, pos2) {
    const dx = pos1[0] - pos2[0];
    const dy = pos1[1] - pos2[1];
    const dz = pos1[2] - pos2[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Groups traders by proximity
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
            if (!trader.position || !otherTrader.position) return;

            const distance = calculateDistance(trader.position, otherTrader.position);
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
        return trader.name || `DealerPoint_${index + 1}`;
    } else {
        const firstTrader = traders[0];
        const baseName = firstTrader.name || 'DealerPoint';
        return `${baseName}_Group_${index + 1}`;
    }
}

/**
 * Creates a dealer point configuration from traders
 */
function createDealerPoint(traders, uniqueName, sellTax) {
    const firstTrader = traders[0];
    
    let position = firstTrader.position;
    let orientation = firstTrader.orientation || [0, 0, 0];
    
    if (traders.length > 1) {
        const avgPos = [0, 0, 0];
        let count = 0;
        traders.forEach(trader => {
            if (trader.position) {
                avgPos[0] += trader.position[0];
                avgPos[1] += trader.position[1];
                avgPos[2] += trader.position[2];
                count++;
            }
        });
        if (count > 0) {
            position = [
                avgPos[0] / count,
                avgPos[1] / count,
                avgPos[2] / count
            ];
        }
        orientation = firstTrader.orientation || [0, 0, 0];
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
 * Processes trader config and creates items
 */
function processTraderConfig(traderConfigData, zip) {
    updateProgress(20, 'Processing trader config items...');

    const itemsMap = new Map();
    const traderCategoryMap = new Map(); // Trader ID -> Set of categories
    
    traderConfigData.forEach((trader, traderIndex) => {
        const categorySet = new Set();
        
        trader.categories.forEach((category, catIndex) => {
            const categoryName = category.name;
            categorySet.add(categoryName.toLowerCase().trim());
            
            category.items.forEach(item => {
                const itemData = createItemData(item, categoryName);
                itemsMap.set(item.uniqueName, itemData);
            });
        });
        
        traderCategoryMap.set(trader.id, categorySet);
        
        const progressPercent = 20 + (traderIndex / traderConfigData.length) * 30;
        updateProgress(progressPercent, `Processing items... (${itemsMap.size} items)`);
    });

    // Add items to TraderItemConfigs folder
    itemsMap.forEach((itemData, uniqueName) => {
        const fileName = `TraderItemConfigs/${uniqueName}.json`;
        const jsonContent = JSON.stringify(itemData, null, 4);
        zip.file(fileName, jsonContent);
    });

    return {
        itemsCount: itemsMap.size,
        traderCategoryMap: traderCategoryMap
    };
}

/**
 * Processes trader objects and creates dealer points
 */
function processTraderObjects(traderObjectsData, traderConfigData, traderCategoryMap, zip) {
    updateProgress(50, 'Processing trader objects...');

    const mode = groupingMode.value;
    const distance = parseFloat(proximityDistance.value) || 500;
    const sellTax = parseFloat(document.getElementById('defaultSellTax').value) || 0.0;

    // Merge trader config data with objects data
    const mergedTraders = traderConfigData.map(configTrader => {
        const objectData = traderObjectsData.find(obj => obj.id === configTrader.id);
        return {
            id: configTrader.id,
            name: configTrader.name,
            position: objectData ? objectData.position : null,
            orientation: objectData ? objectData.orientation : [0, 0, 0],
            safezone: objectData ? objectData.safezone : 0,
            categories: configTrader.categories
        };
    }).filter(trader => trader.position); // Only include traders with positions

    let traderGroups;
    if (mode === 'proximity') {
        traderGroups = groupTradersByProximity(mergedTraders, distance);
    } else {
        traderGroups = mergedTraders.map(trader => [trader]);
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
    const itemCategoryMap = new Map();
    traderConfigData.forEach(trader => {
        trader.categories.forEach(category => {
            category.items.forEach(item => {
                itemCategoryMap.set(item.uniqueName, category.name.toLowerCase().trim());
            });
        });
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
                    traderIdsInDealerPoint.add(trader.id);
                });
            }
        });
        
        // For each item, check if its category matches any trader ID's categories in this dealer point
        itemCategoryMap.forEach((itemCategory, itemUniqueName) => {
            traderIdsInDealerPoint.forEach(traderId => {
                const categorySet = traderCategoryMap.get(traderId);
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
 * Main conversion function
 */
async function convertAndZip() {
    if (!traderConfigFile || !traderObjectsFile) {
        showError('Please upload both files first');
        return;
    }

    try {
        convertButton.disabled = true;
        progress.classList.add('show');
        errorDiv.classList.remove('show');
        results.classList.remove('show');
        updateProgress(5, 'Reading files...');

        // Read both files
        const traderConfigContent = await readFileAsText(traderConfigFile);
        updateProgress(10, 'Parsing trader config...');

        const traderObjectsContent = await readFileAsText(traderObjectsFile);
        updateProgress(15, 'Parsing trader objects...');

        // Parse files
        const traderConfigData = parseTraderConfig(traderConfigContent);
        const traderObjectsData = parseTraderObjects(traderObjectsContent);

        if (traderConfigData.length === 0) {
            throw new Error('No traders found in TraderConfig.txt');
        }

        if (traderObjectsData.length === 0) {
            throw new Error('No trader objects found in TraderObjects.txt');
        }

        updateProgress(18, 'Creating ZIP file...');

        // Create ZIP file
        const zip = new JSZip();

        // Process trader config (items)
        const configStats = processTraderConfig(traderConfigData, zip);

        // Process trader objects (dealer points)
        const objectsStats = processTraderObjects(traderObjectsData, traderConfigData, configStats.traderCategoryMap, zip);

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
        const zipFileName = `TraderConverted_${new Date().toISOString().split('T')[0]}.zip`;
        downloadBlob(zipBlob, zipFileName);

        // Show results
        const sizeInMB = (zipBlob.size / 1024 / 1024).toFixed(2);
        resultsInfo.textContent = `Items: ${configStats.itemsCount} created | Dealer Points: ${objectsStats.dealerPointsCount} | Items matched: ${objectsStats.totalItemsMatched}`;
        resultsFiles.textContent = `Files created: ${configStats.itemsCount} items in TraderItemConfigs/ + ${objectsStats.filesCount} dealer point files (with category-matched items)`;
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

