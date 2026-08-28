Add-Type -AssemblyName System.Drawing

$bmp = New-Object System.Drawing.Bitmap(1200, 630)
$gfx = [System.Drawing.Graphics]::FromImage($bmp)
$gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gfx.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Background
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(13, 17, 23))
$gfx.FillRectangle($bgBrush, 0, 0, 1200, 630)

# Accent bar top
$accentBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point(1200, 0)),
    [System.Drawing.Color]::FromArgb(88, 166, 255),
    [System.Drawing.Color]::FromArgb(63, 185, 80)
)
$gfx.FillRectangle($accentBrush, 0, 0, 1200, 4)

# Title
$titleFont = New-Object System.Drawing.Font('Segoe UI', 44, [System.Drawing.FontStyle]::Bold)
$titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 246, 252))
$gfx.DrawString('Priyaranjan Sahu', $titleFont, $titleBrush, 80, 60)

# Subtitle
$subFont = New-Object System.Drawing.Font('Segoe UI', 20)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(88, 166, 255))
$gfx.DrawString('Multi-Cloud Architect | DevOps | SRE', $subFont, $subBrush, 80, 120)

# Divider
$divBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(48, 54, 61))
$gfx.FillRectangle($divBrush, 80, 160, 1040, 1)

# Main headline
$headFont = New-Object System.Drawing.Font('Segoe UI', 42, [System.Drawing.FontStyle]::Bold)
$headBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 246, 252))
$gfx.DrawString('Building Production-Grade', $headFont, $headBrush, 80, 200)
$gfx.DrawString('Multi-Cloud Infrastructure', $headFont, $headBrush, 80, 260)

# Subtitle line
$descFont = New-Object System.Drawing.Font('Segoe UI', 18)
$descBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(139, 148, 158))
$gfx.DrawString('16+ years | GCP, AWS, Azure, OCI, Alibaba, Tencent', $descFont, $descBrush, 80, 315)

# Stats
$statFont = New-Object System.Drawing.Font('Segoe UI', 38, [System.Drawing.FontStyle]::Bold)
$statLabelFont = New-Object System.Drawing.Font('Segoe UI', 13)
$statBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 246, 252))
$labelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(139, 148, 158))

$gfx.DrawString('2000+', $statFont, $statBrush, 80, 370)
$gfx.DrawString('GCP Projects', $statLabelFont, $labelBrush, 80, 415)

$gfx.DrawString('2000+', $statFont, $statBrush, 280, 370)
$gfx.DrawString('GKE Clusters', $statLabelFont, $labelBrush, 280, 415)

$gfx.DrawString('600+', $statFont, $statBrush, 480, 370)
$gfx.DrawString('Terraform IaC', $statLabelFont, $labelBrush, 480, 415)

$gfx.DrawString('3x', $statFont, $statBrush, 680, 370)
$gfx.DrawString('GCP Certified', $statLabelFont, $labelBrush, 680, 415)

# Cert badges
$badgeFont = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$badgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(33, 38, 45))
$badgeBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(48, 54, 61), 1)

# Badge 1
$rect1 = New-Object System.Drawing.Rectangle(80, 480, 150, 32)
$gfx.FillRectangle($badgeBg, $rect1)
$gfx.DrawRectangle($badgeBorder, $rect1)
$b1Brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(66, 133, 244))
$s1 = $gfx.MeasureString('GCP Cloud Architect', $badgeFont)
$gfx.DrawString('GCP Cloud Architect', $badgeFont, $b1Brush, 80 + (150 - $s1.Width) / 2, 487)

# Badge 2
$rect2 = New-Object System.Drawing.Rectangle(250, 480, 140, 32)
$gfx.FillRectangle($badgeBg, $rect2)
$gfx.DrawRectangle($badgeBorder, $rect2)
$b2Brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(224, 35, 78))
$s2 = $gfx.MeasureString('RHCSA | RHCE', $badgeFont)
$gfx.DrawString('RHCSA | RHCE', $badgeFont, $b2Brush, 250 + (140 - $s2.Width) / 2, 487)

# Badge 3
$rect3 = New-Object System.Drawing.Rectangle(410, 480, 80, 32)
$gfx.FillRectangle($badgeBg, $rect3)
$gfx.DrawRectangle($badgeBorder, $rect3)
$b3Brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(27, 160, 215))
$s3 = $gfx.MeasureString('CCNA', $badgeFont)
$gfx.DrawString('CCNA', $badgeFont, $b3Brush, 410 + (80 - $s3.Width) / 2, 487)

# Badge 4
$rect4 = New-Object System.Drawing.Rectangle(510, 480, 80, 32)
$gfx.FillRectangle($badgeBg, $rect4)
$gfx.DrawRectangle($badgeBorder, $rect4)
$b4Brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(42, 113, 208))
$s4 = $gfx.MeasureString('ITIL', $badgeFont)
$gfx.DrawString('ITIL', $badgeFont, $b4Brush, 510 + (80 - $s4.Width) / 2, 487)

# URL
$urlFont = New-Object System.Drawing.Font('Segoe UI', 15)
$urlBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(88, 166, 255))
$urlText = 'priyaranjan-sahu.github.io'
$urlSize = $gfx.MeasureString($urlText, $urlFont)
$gfx.DrawString($urlText, $urlFont, $urlBrush, 1200 - $urlSize.Width - 80, 590)

# Accent bar bottom
$gfx.FillRectangle($accentBrush, 0, 626, 1200, 4)

# Save
$bmp.Save('D:\github\priyaranjan-sahu.github.io\assets\images\og-banner.png', [System.Drawing.Imaging.ImageFormat]::Png)
$gfx.Dispose()
$bmp.Dispose()
Write-Host 'PNG created successfully'