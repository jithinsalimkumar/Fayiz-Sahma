Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\fs_custom_monogram.png"
$outputPath = "c:\Users\jithi\Documents\Fayiz & Sahma\public\images\fs_custom_monogram.png"

$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$width = $img.Width
$height = $img.Height

$recoloredImg = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $img.GetPixel($x, $y)
        $a = $pixel.A
        
        if ($a -gt 10) {
            # Compute luminance / brightness of original pixel (0.0 to 1.0)
            $lum = ($pixel.R * 0.299 + $pixel.G * 0.587 + $pixel.B * 0.114) / 255.0
            
            # Map luminance to rich 24K Gold Palette
            # High luminance -> #FFF4D0 (255, 244, 208)
            # Mid luminance  -> #D4AF37 (212, 175, 55)
            # Low luminance  -> #A37B15 (163, 123, 21)
            
            if ($lum -gt 0.75) {
                # Warm bright gold highlight
                $t = ($lum - 0.75) / 0.25
                $r = [int](212 + $t * (255 - 212))
                $g = [int](175 + $t * (244 - 175))
                $b = [int](55 + $t * (208 - 55))
            } elseif ($lum -gt 0.35) {
                # Primary 24K Gold
                $t = ($lum - 0.35) / 0.40
                $r = [int](163 + $t * (212 - 163))
                $g = [int](123 + $t * (175 - 123))
                $b = [int](21 + $t * (55 - 21))
            } else {
                # Deep gold shadow
                $t = $lum / 0.35
                $r = [int](110 + $t * (163 - 110))
                $g = [int](80 + $t * (123 - 80))
                $b = [int](12 + $t * (21 - 12))
            }
            
            # Clamp values between 0 and 255
            if ($r -gt 255) { $r = 255 }
            if ($g -gt 255) { $g = 255 }
            if ($b -gt 255) { $b = 255 }
            
            $recoloredImg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $r, $g, $b))
        } else {
            $recoloredImg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$img.Dispose()

# Save recolored bitmap back to output
$recoloredImg.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$recoloredImg.Dispose()

Write-Host "Monogram successfully recolored to rich 24K gold theme."
