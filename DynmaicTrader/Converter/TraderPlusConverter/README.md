# TraderPlus Converter - Browser Edition

A browser-based converter that transforms TraderPlusPriceConfig.json into individual item JSON files and packages them as a ZIP file. **No server required** - everything runs in your browser!

## Features

- 🌐 **100% Browser-Based** - No server, no Node.js installation needed
- 📤 **File Upload** - Drag & drop or click to upload
- 📦 **Automatic ZIP Creation** - All converted files packaged in a single ZIP
- 📊 **Progress Tracking** - Real-time progress bar and status updates
- 🎨 **Modern UI** - Clean, responsive interface
- ⚡ **Fast Processing** - Efficient client-side processing

## Usage

1. Open `index.html` in any modern web browser
2. Click the upload area or drag & drop your `TraderPlusPriceConfig.json` file
3. Click "Convert & Download ZIP"
4. Wait for processing (progress bar will show status)
5. ZIP file will automatically download when complete

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

## File Format

### Input
- `TraderPlusPriceConfig.json` - TraderPlus configuration file

### Output
- `TraderPlusConverted_YYYY-MM-DD.zip` - ZIP file containing all individual item JSON files

## Technical Details

- Uses JSZip library (loaded from CDN) for ZIP creation
- All processing happens client-side using JavaScript
- No data is sent to any server - complete privacy
- Handles trailing commas in JSON automatically
- Supports product strings with variable field counts

