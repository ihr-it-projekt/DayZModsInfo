# ExpansionTrader Converter - Browser Edition

A browser-based converter that transforms ExpansionTrader configuration files into TBDynamicTrader format. **No server required** - everything runs in your browser!

## Features

- 🌐 **100% Browser-Based** - No server, no Node.js installation needed
- 📤 **File Upload** - Drag & drop or click to upload multiple files
- 📦 **Automatic ZIP Creation** - All converted files packaged in a single ZIP
- 📊 **Progress Tracking** - Real-time progress bar and status updates
- 🎨 **Modern UI** - Clean, responsive interface
- ⚡ **Fast Processing** - Efficient client-side processing

## Usage

1. Open `index.html` in any modern web browser
2. Upload your ExpansionTrader files:
   - **Category Files**: JSON files containing items (e.g., `Gardening.json`, `Assault_Rifles.json`)
   - **Collection Files**: JSON files containing category references (e.g., `BuildingSupplies.json`)
   - **Map Files**: `.map` files containing dealer point data (e.g., `Maik.map`, `MyTrader.map`)
3. Configure options (optional):
   - Set the default sell tax for dealer points
4. Click "Convert & Download ZIP"
5. Wait for processing (progress bar will show status)
6. ZIP file will automatically download when complete

## File Format

### Input Files

#### Category Files (e.g., `Gardening.json`, `Assault_Rifles.json`)
JSON files containing items with the following structure:
```json
{
    "m_Version": 12,
    "DisplayName": "Category Name",
    "Items": [
        {
            "ClassName": "itemname",
            "MaxPriceThreshold": 595,
            "MinPriceThreshold": 355,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [],
            "Variants": []
        }
    ]
}
```

#### Collection Files (e.g., `BuildingSupplies.json`)
JSON files that reference categories:
```json
{
    "m_Version": 12,
    "DisplayName": "Collection Name",
    "Categories": [
        "Gardening",
        "Assault_Rifles"
    ]
}
```

#### Map Files (e.g., `Maik.map`, `MyTrader.map`)
Text files containing dealer point definitions:
```
{DealerPointUniqueName.UsedCategoryCollection}|{position}|{orientation}|{optional items}
```

Example:
```
ExpansionTraderDenis.BuildingSupplies|11833.576 140.605 12469.492|110 0 0|Jeans_Blue,TSHirt_Blue
ExpansionTraderGuo.BuildingSupplies|8599.360352 14.725300 10492.200195|-72.760590 0.000000 0.000000
```

Format explanation:
- `{DealerPointUniqueName.UsedCategoryCollection}` - Dealer point name and category collection to use
- `{position}` - X Y Z coordinates (space-separated)
- `{orientation}` - Yaw Pitch Roll (space-separated)
- `{optional items}` - Comma-separated list of additional items (optional)

### Output

- `ExpansionTraderConverted_YYYY-MM-DD.zip` - ZIP file containing:
  - `TraderItemConfigs/` - Individual item JSON files
  - `DealerPoints/` - Individual dealer point JSON files
  - `DealerPoints.json` - Main dealer points configuration file

## Windows Security Warning

If you see a Windows Security Warning when extracting the ZIP file, this is normal. Windows blocks files downloaded from the internet for security. To fix this:

1. Right-click on the downloaded ZIP file
2. Select **Properties**
3. At the bottom, check the **"Unblock"** checkbox (if available)
4. Click **OK**
5. Now you can extract the ZIP file normally

## Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- No additional software or server needed
- JSZip library is loaded from CDN automatically

## Technical Details

- Uses JSZip library (loaded from CDN) for ZIP creation
- All processing happens client-side using JavaScript
- No data is sent to any server - complete privacy
- Handles trailing commas in JSON automatically
- Converts ExpansionTrader item properties to TBDynamicTrader format:
  - `MaxPriceThreshold` / `MinPriceThreshold` → `maxBuyPrice` / `buyPrice`
  - `SellPricePercent` → `sellPrice` / `maxSellPrice`
  - `MaxStockThreshold` / `MinStockThreshold` → `maxStorage`
  - `SpawnAttachments` → `attachmentUniqueNames`
  - `QuantityPercent` → `quantity`

## Conversion Logic

1. **Category Processing**: Reads all category JSON files and converts each item to TBDynamicTrader format
2. **Collection Processing**: Maps category collections to their referenced categories
3. **Dealer Point Processing**: 
   - Parses map files to extract dealer point information
   - Resolves category collections to actual items
   - Creates dealer point configurations with matched items
   - Includes optional items specified in map files

## References

- [DayZ Expansion Market System Documentation](https://github.com/salutesh/DayZ-Expansion-Scripts/wiki/%5BServer-Hosting%5D-The-Market-System)

