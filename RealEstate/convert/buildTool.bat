pyinstaller --noconfirm --onefile --windowed --upx-dir "."  --icon "./image/TheBusterWindowIcon.ico"  "./convert.py"

del /F /Q build
