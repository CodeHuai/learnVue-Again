/**
 * 处理静态资源的路径问题
 * @param image 图片地址
 * @returns {string} vite处理后的地址
 */
export const getAssetsUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
