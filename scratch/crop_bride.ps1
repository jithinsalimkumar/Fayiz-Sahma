Add-Type -AssemblyName System.Drawing

$groomPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\groom.jpg"
$bridePath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\bride.jpg"
$brideBackupPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\bride_original.jpg"

if (-not (Test-Path $brideBackupPath)) {
    Copy-Item $bridePath $brideBackupPath
}

$gImg = [System.Drawing.Image]::FromFile($groomPath)
Write-Host "Groom width:" $gImg.Width "height:" $gImg.Height
$gImg.Dispose()

$bImg = [System.Drawing.Image]::FromFile($brideBackupPath)
Write-Host "Original Bride width:" $bImg.Width "height:" $bImg.Height

# The bride's face in the original image starts lower down (around y = 20% to 25%).
# We want to crop from y = 18% of original height down to y = 85% of original height,
# and adjust width to match the aspect ratio of groom.jpg!

$cropX = [int]($bImg.Width * 0.05)
$cropY = [int]($bImg.Height * 0.18)
$cropW = [int]($bImg.Width * 0.90)
$cropH = [int]($bImg.Height * 0.72)

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bImg, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($bridePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$bImg.Dispose()

Write-Host "Bride image cropped and saved successfully."
