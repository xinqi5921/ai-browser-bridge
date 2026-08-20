@echo off
chcp 65001 >nul
echo ========================================
echo   GitHub 上传脚本
echo ========================================
echo.
echo 请替换下面的 YOUR_GITHUB_TOKEN 为你的 Personal Access Token
echo.
echo 获取 Token: https://github.com/settings/tokens
echo.
set TOKEN=YOUR_GITHUB_TOKEN
git remote set-url origin https://%TOKEN%@github.com/johnqiqi/ai-browser-bridge.git
git push -u origin main
echo.
echo 上传完成!
echo 访问: https://github.com/johnqiqi/ai-browser-bridge
echo.
pause
