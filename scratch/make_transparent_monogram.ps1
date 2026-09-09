Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\jithi\.gemini\antigravity-ide\brain\d3bf364f-762a-467c-9572-fa3ef6f4c9af\.user_uploaded\media_1788954854667.jpg"
$outputPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\fs_custom_monogram.png"

$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$width = $img.Width
$height = $img.Height

$transparentImg = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        $pixel = $img.GetPixel($x, $y)
        $r = $pixel.R
        $g = $pixel.G
        $b = $pixel.B
        
        # Calculate brightness & gold intensity
        $brightness = ($r + $g + $b) / 3.0
        
        # Determine if pixel belongs to dark purple background vs champagne gold calligraphy
        if ($brightness -lt 55 -or ($r -lt 80 -and $g -lt 50)) {
            # Background pixel -> Make transparent
            $transparentImg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Gold Monogram pixel -> Smooth alpha anti-aliasing for edges
            $alpha = 255
            if ($brightness -lt 90) {
                $alpha = [int](($brightness - 55) / 35.0 * 255)
                if ($alpha -lt 0) { $alpha = 0 }
                if ($alpha -gt 255) { $alpha = 255 }
            }
            
            # Recolor slightly towards rich 24K gold while preserving anti-aliased highlights
            $transparentImg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
        }
    }
}

# Ensure directory exists
$dir = [System.IO.Path]::GetDirectoryName($outputPath)
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

$transparentImg.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$transparentImg.Dispose()
Write-Host "Processed transparent monogram saved to $outputPath successfully."
