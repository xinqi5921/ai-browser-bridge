@echo off
chcp 65001 >nul
echo ========================================
echo   GitHub 上传工具
echo ========================================
echo.
echo 请按照以下步骤操作:
echo.
echo 1. 打开 https://github.com/new
echo 2. 创建仓库，名称: ai-browser-bridge
echo 3. 复制 HTTPS 地址
echo.
echo 示例地址:
echo https://github.com/johnqiqi/ai-browser-bridge.git
echo.
set /p REPO_URL="请输入仓库 HTTPS 地址: "
echo.
echo 正在推送...
git remote set-url origin %REPO_URL%
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ========================================
    echo   上传成功!
    echo ========================================
    echo.
    echo 访问: %REPO_URL%
) else (
    echo.
    echo 错误: 推送失败
)
pause