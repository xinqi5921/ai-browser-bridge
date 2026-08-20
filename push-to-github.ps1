# GitHub 上传脚本
Write-Host '========================================' -ForegroundColor Cyan
Write-Host '   GitHub 上传脚本' -ForegroundColor Cyan
Write-Host '========================================' -ForegroundColor Cyan
Write-Host ''
Write-Host '请替换下面的 GITHUB_TOKEN 为你的 Personal Access Token' -ForegroundColor Yellow
Write-Host ''
Write-Host '获取 Token: https://github.com/settings/tokens' -ForegroundColor Gray
Write-Host ''

# 请在这里输入你的 GitHub Personal Access Token
\ = Read-Host '请输入 GitHub Token'

if (\ -eq 'YOUR_GITHUB_TOKEN') {
    Write-Host '请先获取 Personal Access Token!' -ForegroundColor Red
    Write-Host '访问: https://github.com/settings/tokens' -ForegroundColor Yellow
    Write-Host '勾选 repo 权限后生成 token' -ForegroundColor Yellow
    exit 1
}

\ = "https://\@github.com/johnqiqi/ai-browser-bridge.git"
git remote set-url origin \
git push -u origin main

Write-Host ''
Write-Host '========================================' -ForegroundColor Green
Write-Host '   上传完成!' -ForegroundColor Green
Write-Host '========================================' -ForegroundColor Green
Write-Host ''
Write-Host '访问: https://github.com/johnqiqi/ai-browser-bridge' -ForegroundColor Cyan
Write-Host ''
Read-Host '按回车键退出'