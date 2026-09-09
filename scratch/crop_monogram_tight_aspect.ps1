Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\fs_custom_monogram.png"
$outputPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\fs_custom_monogram.png"

$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$width = $img.Width
$height = $img.Height

$minX = $width
$maxX = 0
$minY = $height
$maxY = 0

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $img.GetPixel($x, $y)
        if ($pixel.A -gt 15) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add small tight padding around bounding box
$padding = 4
$cropX = [Math]::Max(0, $minX - $padding)
$cropY = [Math]::Max(0, $minY - $padding)
$cropW = [Math]::Min($width - $cropX, ($maxX - $minX) + ($padding * 2))
$cropH = [Math]::Min($height - $cropY, ($maxY - $minY) + ($padding * 2))

# Create exact rectangular canvas with no extra vertical padding
$croppedImg = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($croppedImg)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)

$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$g.Dispose()

# Save tight aspect-ratio transparent PNG
$croppedImg.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedImg.Dispose()

Write-Host "Exact aspect ratio cropped monogram saved successfully."
