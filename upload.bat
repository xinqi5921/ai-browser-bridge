@echo off
chcp 65001 >nul
echo ========================================
echo   GitHub 上传工具
echo ========================================
echo.
echo 仓库地址: https://github.com/xinqi5921/ai-browser-bridge
echo.
echo 请输入你的 GitHub Personal Access Token:
echo.
set /p TOKEN="Token: "

if "%TOKEN%"=="" (
    echo 错误: Token 不能为空
    pause
    exit /b 1
)

echo.
echo 正在推送代码...
git remote set-url origin https://%TOKEN%@github.com/xinqi5921/ai-browser-bridge.git
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   上传成功!
    echo ========================================
    echo.
    echo 访问: https://github.com/xinqi5921/ai-browser-bridge
    echo.
) else (
    echo.
    echo 错误: 推送失败
    echo 请检查 Token 是否正确
)
pause