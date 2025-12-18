/**
 * Browser-based ExpansionTrader Converter
 * Converts ExpansionTrader category files, category collections, and dealer point map files
 * into TBDynamicTrader format
 */

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
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
const defaultSellTax = document.getElementById('defaultSellTax');

let uploadedFiles = new Map(); // Map of filename -> File object

// Show/hide options when files are ready
function checkFilesReady() {
    const hasJsonFiles = Array.from(uploadedFiles.values()).some(file => 
        file.name.endsWith('.json')
    );
    const hasMapFiles = Array.from(uploadedFiles.values()).some(file => 
        file.name.endsWith('.map')
    );
    
    if (hasJsonFiles && hasMapFiles) {
        convertButton.disabled = false;
        options.classList.add('show');
    } else {
        convertButton.disabled = true;
        if (uploadedFiles.size === 0) {
            options.classList.remove('show');
        }
    }
}

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
    
    // Filter to only JSON and MAP files
    const validFiles = files.filter(file => 
        file.name.endsWith('.json') || file.name.endsWith('.map')
    );
    
    if (validFiles.length === 0) {
        showError('Please select JSON or MAP files');
        return;
    }
    
    // Process each file
    validFiles.forEach(file => {
        uploadedFiles.set(file.name, file);
    });
    
    updateFileStatus();
    checkFilesReady();
}

/**
 * Updates the file status display
 */
function updateFileStatus() {
    const statusDiv = document.getElementById('fileStatus');
    if (!statusDiv) return;
    
    const jsonFiles = Array.from(uploadedFiles.values()).filter(f => 
        f.name.endsWith('.json')
    );
    const mapFiles = Array.from(uploadedFiles.values()).filter(f => 
        f.name.endsWith('.map')
    );
    
    let html = '';
    if (jsonFiles.length > 0) {
        html += `<div class="file-status-item">
            <span class="file-status-icon">📦</span>
            <span class="file-status-label">JSON Files:</span>
            <span class="file-status-text uploaded">${jsonFiles.length} file(s)</span>
        </div>`;
    }
    if (mapFiles.length > 0) {
        html += `<div class="file-status-item">
            <span class="file-status-icon">📍</span>
            <span class="file-status-label">Map Files:</span>
            <span class="file-status-text uploaded">${mapFiles.length} file(s)</span>
        </div>`;
    }
    
    if (html === '') {
        html = '<div class="file-status-item"><span class="file-status-text pending">No files uploaded</span></div>';
    }
    
    statusDiv.innerHTML = html;
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
 * Converts ExpansionTrader item to TBDTTraderType format
 */
function convertItemToTraderType(item, categoryName) {
    // Calculate prices
    const maxBuyPrice = item.MaxPriceThreshold || 0;
    const buyPrice = item.MinPriceThreshold || 0;
    
    // Calculate sell price
    let sellPrice = 0;
    let maxSellPrice = 0;
    if (item.SellPricePercent !== undefined && item.SellPricePercent >= 0) {
        sellPrice = Math.round(buyPrice * item.SellPricePercent / 100);
        maxSellPrice = Math.round(maxBuyPrice * item.SellPricePercent / 100);
    } else {
        // Default to 50% of buy price if not specified
        sellPrice = 0;
        maxSellPrice = 0;
    }
    
    // Calculate quantity
    let quantity = 1.0;
    if (item.QuantityPercent !== undefined && item.QuantityPercent >= 0) {
        quantity = item.QuantityPercent / 100.0;
    }
    
    // Calculate storage
    const maxStorage = item.MaxStockThreshold || 0;
    const minStorage = item.MinStockThreshold || 0;
    
    // Get variations from Variants array
    const variations = (item.Variants && Array.isArray(item.Variants)) 
        ? item.Variants.filter(v => v && v.trim()) // Filter out empty/null values
        : [];
    
    return {
        uniqueName: item.ClassName,
        type: item.ClassName,
        category: categoryName,
        quantity: quantity,
        isPremium: false,
        currency: "default",
        isStorageItem: maxStorage > 0,
        buyPrice: buyPrice,
        maxBuyPrice: maxBuyPrice,
        sellPrice: sellPrice,
        maxSellPrice: maxSellPrice,
        maxStorage: maxStorage,
        reducePerTick: 0,
        tickLengthInMinutes: maxStorage > 0 ? 1 : 0,
        maxCountThatPlayerCanBuyAsAttachment: 1,
        maxCountThatPlayerCanBuyAsOptionalAttachment: 1,
        storageItem: maxStorage > 0 ? {} : null,
        attachmentUniqueNames: item.SpawnAttachments || [],
        optionalAttachmentUniqueNames: [],
        variations: variations
    };
}

/**
 * Parses a dealer point line from map file
 * Format: {DealerPointUniqueName.UsedCategoryCollection}|{position}|{orientation}|{optional items}
 */
function parseDealerPointLine(line) {
    line = line.trim();
    if (!line) return null;
    
    const parts = line.split('|');
    if (parts.length < 3) {
        return null;
    }
    
    // Parse dealer point name and category collection
    const dealerInfo = parts[0].split('.');
    if (dealerInfo.length !== 2) {
        return null;
    }
    
    const dealerPointName = dealerInfo[0].trim();
    const categoryCollection = dealerInfo[1].trim();
    
    // Parse position
    const positionParts = parts[1].trim().split(/\s+/);
    if (positionParts.length !== 3) {
        return null;
    }
    const position = [
        parseFloat(positionParts[0]),
        parseFloat(positionParts[1]),
        parseFloat(positionParts[2])
    ];
    
    // Parse orientation
    const orientationParts = parts[2].trim().split(/\s+/);
    if (orientationParts.length !== 3) {
        return null;
    }
    const orientation = [
        parseFloat(orientationParts[0]),
        parseFloat(orientationParts[1]),
        parseFloat(orientationParts[2])
    ];
    
    return {
        dealerPointName,
        categoryCollection,
        position,
        orientation
    };
}

/**
 * Processes category files and creates item configs
 */
function processCategoryFiles(categoryFiles, zip) {
    updateProgress(20, 'Processing category files...');
    
    const itemsMap = new Map();
    const categoryMap = new Map(); // category name -> items
    
    let processedItems = 0;
    
    categoryFiles.forEach((file, index) => {
        const categoryName = file.name.replace('.json', '');
        const content = file.content;
        
        if (!content.Items || !Array.isArray(content.Items)) {
            return;
        }
        
        const categoryItems = [];
        
        content.Items.forEach(item => {
            if (!item.ClassName) return;
            
            const traderType = convertItemToTraderType(item, categoryName);
            itemsMap.set(item.ClassName, traderType);
            categoryItems.push(traderType);
            processedItems++;
        });
        
        categoryMap.set(categoryName, categoryItems);
        
        const progressPercent = 20 + (index / categoryFiles.length) * 30;
        updateProgress(progressPercent, `Processing categories... (${processedItems} items)`);
    });
    
    // Add items to TraderItemConfigs folder
    itemsMap.forEach((itemData, uniqueName) => {
        const fileName = `TraderItemConfigs/${uniqueName}.json`;
        const jsonContent = JSON.stringify(itemData, null, 4);
        zip.file(fileName, jsonContent);
    });
    
    return {
        itemsProcessed: processedItems,
        uniqueItems: itemsMap.size,
        categoryMap: categoryMap
    };
}

/**
 * Processes category collection files
 */
function processCollectionFiles(collectionFiles) {
    const collectionMap = new Map(); // collection name -> array of category names
    
    collectionFiles.forEach(file => {
        const collectionName = file.name.replace('.json', '');
        const content = file.content;
        
        if (content.Categories && Array.isArray(content.Categories)) {
            collectionMap.set(collectionName, content.Categories);
        }
    });
    
    return collectionMap;
}

/**
 * Processes map files and creates dealer points
 */
function processMapFiles(mapFiles, collectionMap, categoryMap, zip, sellTax) {
    updateProgress(60, 'Processing dealer points...');
    
    const dealerPoints = [];
    const dealerPointMap = new Map(); // dealer point name -> config
    
    let processedDealerPoints = 0;
    
    mapFiles.forEach((file, fileIndex) => {
        const lines = file.content.split('\n');
        
        lines.forEach((line, lineIndex) => {
            const dealerPointData = parseDealerPointLine(line);
            if (!dealerPointData) return;
            
            const { dealerPointName, categoryCollection, position, orientation } = dealerPointData;
            
            // Get categories from collection
            const categories = collectionMap.get(categoryCollection) || [];
            
            // Collect all items from these categories
            const itemUniqueNames = new Set();
            
            categories.forEach(categoryName => {
                const categoryItems = categoryMap.get(categoryName);
                if (categoryItems) {
                    categoryItems.forEach(item => {
                        itemUniqueNames.add(item.uniqueName);
                    });
                }
            });
            
            // Create dealer point config
            const dealerPoint = {
                uniqueName: dealerPointName,
                version: "0",
                sellTax: sellTax,
                position: position,
                orientation: orientation,
                useExactPosition: false,
                type: "TBDTTraderMachine",
                uniqueFileNames: Array.from(itemUniqueNames).sort()
            };
            
            dealerPointMap.set(dealerPointName, dealerPoint);
            dealerPoints.push(dealerPointName);
            processedDealerPoints++;
        });
        
        const progressPercent = 60 + (fileIndex / mapFiles.length) * 20;
        updateProgress(progressPercent, `Processing dealer points... (${processedDealerPoints} points)`);
    });
    
    // Create DealerPoints.json
    const dealerPointsConfig = {
        version: "1",
        isInitialized: true,
        dealerPointsNames: dealerPoints
    };
    
    zip.file('DealerPoints.json', JSON.stringify(dealerPointsConfig, null, 4));
    
    // Add individual dealer point files
    dealerPointMap.forEach((dealerPoint, uniqueName) => {
        const fileName = `DealerPoints/${uniqueName}.json`;
        zip.file(fileName, JSON.stringify(dealerPoint, null, 4));
    });
    
    return {
        dealerPointsCount: dealerPoints.length,
        filesCount: dealerPointMap.size + 1,
        totalItemsMatched: Array.from(dealerPointMap.values()).reduce((sum, dp) => sum + dp.uniqueFileNames.length, 0)
    };
}

/**
 * Main conversion function
 */
async function convertAndZip() {
    if (uploadedFiles.size === 0) {
        showError('Please upload files first');
        return;
    }

    try {
        convertButton.disabled = true;
        progress.classList.add('show');
        errorDiv.classList.remove('show');
        results.classList.remove('show');
        updateProgress(5, 'Reading files...');

        // Read all files
        const fileData = [];
        for (const [filename, file] of uploadedFiles.entries()) {
            const content = await readFileAsText(file);
            
            if (filename.endsWith('.json')) {
                try {
                    const fixedContent = content.replace(/,(\s*[}\]])/g, '$1');
                    const jsonContent = JSON.parse(fixedContent);
                    
                    // Determine file type based on structure
                    // Collection files have "Categories" array and empty or no "Items"
                    // Category files have "Items" array
                    let fileType = 'category';
                    if (jsonContent.Categories) {
                        fileType = 'collection';
                    }
                    
                    fileData.push({
                        name: filename,
                        type: fileType,
                        content: jsonContent,
                        file: file
                    });
                } catch (e) {
                    throw new Error(`Invalid JSON in ${filename}: ${e.message}`);
                }
            } else if (filename.endsWith('.map')) {
                fileData.push({
                    name: filename,
                    type: 'map',
                    content: content,
                    file: file
                });
            }
        }

        updateProgress(10, 'Organizing files...');

        // Separate files by type
        const categoryFiles = fileData.filter(f => f.type === 'category');
        const collectionFiles = fileData.filter(f => f.type === 'collection');
        const mapFiles = fileData.filter(f => f.type === 'map');

        if (categoryFiles.length === 0) {
            throw new Error('No category files found. Please upload category JSON files.');
        }

        if (mapFiles.length === 0) {
            throw new Error('No map files found. Please upload .map files.');
        }

        updateProgress(15, 'Creating ZIP file...');

        // Create ZIP file
        const zip = new JSZip();

        // Process category files (items)
        const categoryStats = processCategoryFiles(categoryFiles, zip);

        // Process collection files
        const collectionMap = processCollectionFiles(collectionFiles);

        // Process map files (dealer points)
        const sellTax = parseFloat(defaultSellTax.value) || 0.0;
        const dealerPointStats = processMapFiles(mapFiles, collectionMap, categoryStats.categoryMap, zip, sellTax);

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
        const zipFileName = `ExpansionTraderConverted_${new Date().toISOString().split('T')[0]}.zip`;
        downloadBlob(zipBlob, zipFileName);

        // Show results
        const sizeInMB = (zipBlob.size / 1024 / 1024).toFixed(2);
        resultsInfo.textContent = `Items: ${categoryStats.itemsProcessed} processed (${categoryStats.uniqueItems} unique) | Dealer Points: ${dealerPointStats.dealerPointsCount} | Items matched: ${dealerPointStats.totalItemsMatched}`;
        resultsFiles.textContent = `Files created: ${categoryStats.uniqueItems} items in TraderItemConfigs/ + ${dealerPointStats.filesCount} dealer point files`;
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

// Initialize
checkFilesReady();
updateFileStatus();

