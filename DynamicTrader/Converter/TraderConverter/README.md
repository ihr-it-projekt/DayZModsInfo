# Trader Converter - Browser Edition

A browser-based converter that transforms TraderConfig.txt and TraderObjects.txt files into the TBDynamicTrader format. **No server required** - everything runs in your browser!

## Features

- 🌐 **100% Browser-Based** - No server, no Node.js installation needed
- 📤 **File Upload** - Drag & drop or click to upload
- 📦 **Automatic ZIP Creation** - All converted files packaged in a single ZIP
- 📊 **Progress Tracking** - Real-time progress bar and status updates
- 🎨 **Modern UI** - Clean, responsive interface
- ⚡ **Fast Processing** - Efficient client-side processing
- 🔄 **Category Matching** - Automatically matches items to dealer points based on categories

## Usage

1. Open `index.html` in any modern web browser
2. Click the upload area or drag & drop your `TraderConfig.txt` and `TraderObjects.txt` files
3. Configure options (grouping mode, proximity distance, sell tax)
4. Click "Convert & Download ZIP"
5. Wait for processing (progress bar will show status)
6. ZIP file will automatically download when complete

## Input Files

### TraderConfig.txt
Contains trader definitions with categories and items:
- `<Trader> TraderName` - Defines a trader
- `<Category> CategoryName` - Defines a category within a trader
- `ItemName, Quantity, BuyValue, SellValue` - Item definitions

### TraderObjects.txt
Contains trader positions and metadata:
- `<TraderMarker> ID` - Trader ID
- `<TraderMarkerPosition> X, Y, Z` - Trader position
- `<TraderMarkerSafezone> Radius` - Safezone radius
- `<ObjectOrientation> Yaw, Pitch, Roll` - Object orientation

## Output Structure

The converter creates the same structure as TraderPlusConverter:

- `TraderItemConfigs/` - Folder containing individual item JSON files
- `DealerPoints/` - Folder containing dealer point JSON files
- `DealerPoints.json` - Main configuration file listing all dealer points

## Options

- **Grouping Mode**: 
  - Group by Proximity - Groups traders within a specified distance
  - One Dealer Point per Trader - Creates separate dealer point for each trader
  
- **Proximity Distance**: Distance in meters for grouping traders (only used with proximity mode)

- **Default Sell Tax**: Sell tax for dealer points (0.0 to 1.0)

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
- Automatically matches items to dealer points based on category relationships
- Handles various quantity formats (*, S, W, M, V, VNK, numbers)

