@echo off
chcp 65001 >nul
title AI Browser Bridge
cd /d "%~dp0"

echo ========================================
echo   AI Browser Bridge ?????
echo ========================================
echo.

REM Check MCP Server
netstat -ano | findstr ":9009" | findstr "LISTENING" >nul
if %errorlevel% equ 0 (
    echo [OK] MCP Server running (port 9009)
) else (
    echo [Start] MCP Server...
    set WS_PORT=9009
    set OPENAI_API_KEY=dummy-key
    set LOG_LEVEL=info
    start /b node work/ai-browser-bridge/dist/index.js
    timeout /t 3 >nul
    echo [OK] MCP Server started
)

echo.
echo [Start] Test page...
start "" "%~dp0outputs\mcp-test.html"
echo [OK] Test page opened

echo.
echo ========================================
echo   Done!
echo.
echo   MCP Server: port 9009 (running)
echo   Test page: opened in Chrome
echo.
echo   [First time only - Load Chrome Extension]
echo   1. Open Chrome
echo   2. Go to: chrome://extensions/
echo   3. Enable Developer Mode (top right)
echo   4. Click Load unpacked
echo   5. Select folder: outputs\chrome-ext
echo.
echo   Press any key to exit...
echo ========================================
pause >nul

