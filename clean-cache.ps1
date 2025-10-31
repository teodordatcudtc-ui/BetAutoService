# Script pentru curățarea cache-ului Next.js
Write-Host "Curățare cache Next.js..." -ForegroundColor Yellow

# Șterge .next
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "✓ .next șters" -ForegroundColor Green
}

# Șterge node_modules/.cache
if (Test-Path node_modules\.cache) {
    Remove-Item -Recurse -Force node_modules\.cache
    Write-Host "✓ node_modules/.cache șters" -ForegroundColor Green
}

Write-Host "`nCache-ul a fost curățat! Rulează 'npm run dev' pentru a reporni serverul." -ForegroundColor Cyan

