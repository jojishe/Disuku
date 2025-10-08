# 源目录（jojishe 文件夹路径）
$source = "jojishe"
# 目标目录（result 文件夹）
$target = "result"

# 如果 result 文件夹不存在则创建
if (-not (Test-Path $target)) {
    New-Item -ItemType Directory -Path $target | Out-Null
}

# 支持的图片扩展名
$extensions = @(".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp")

# 递归查找所有图片
Get-ChildItem -Path $source -Recurse -File | Where-Object {
    $extensions -contains $_.Extension.ToLower()
} | ForEach-Object {
    $file = $_
    $destination = Join-Path $target $file.Name
    $count = 1

    # 如果目标目录已有同名文件，则重命名
    while (Test-Path $destination) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        $ext = $file.Extension
        $newName = "{0}_{1}{2}" -f $baseName, $count, $ext
        $destination = Join-Path $target $newName
        $count++
    }

    # 复制文件
    Copy-Item -Path $file.FullName -Destination $destination
    Write-Host "已复制: $($file.FullName) -> $destination"
}

Write-Host "所有图片已复制到 $target 文件夹中"
