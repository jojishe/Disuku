// imageLoader.js
// 批量导入图片并扁平化为 URL 数组
const images = import.meta.glob('@/assets/jojishe/**/*.{png,jpg,jpeg,gif,svg,webp}', {
  eager: true,
  import: 'default'
});


// 批量导入图片并扁平化为 URL 数组
const imagesTop = import.meta.glob('@/assets/jojishe_g/**/*.{png,jpg,jpeg,gif,svg,webp}', {
  eager: true,
  import: 'default'
});

// 扁平化为 URL 数组
export const imagesUrlsTop = Object.values(imagesTop);

// 扁平化为 URL 数组
export const imageUrls = Object.values(images);


