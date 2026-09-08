Add-Type -AssemblyName System.Drawing

$groomPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\groom.jpg"
$brideOriginalPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\bride_original.jpg"
$bridePath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\bride.jpg"

$gImg = [System.Drawing.Image]::FromFile($groomPath)
# Groom photo width: 934, height: 1024 (aspect ratio ~0.912)
$gImg.Dispose()

$bImg = [System.Drawing.Image]::FromFile($brideOriginalPath)
# Original bride photo width: 532, height: 1024

# In groom.jpg, the groom's hair starts at ~90px from top (90/1024 = ~8.8% of image height).
# In bride_original.jpg, the bride's hijab top starts at ~230px from top.
# To make bride.jpg have the EXACT SAME 8.8% headroom gap as groom.jpg:
# If target crop height is H = 800, then headroom gap in crop should be 8.8% * 800 = ~70px above hijab.
# Since hijab is at y = 230px, starting y_crop = 230 - 70 = 160px (which is ~15.6% of original height)!

$cropY = 145  # 145px from top leaves ~85px (~8.3%) space above her hijab!
$cropH = 750  # Height of crop
$cropX = 0
$cropW = $bImg.Width

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bImg, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($bridePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$bImg.Dispose()

Write-Host "Bride image re-cropped with exact matching headroom gap!"
