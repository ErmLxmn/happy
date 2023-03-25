// const images = require.context('./photos', true, /\.(jpg|jpeg|png|svg|webp)$/)

// const imageMetadata = images.keys().map((path) => {
//   const image = images(path)
//   const { width, height } = image.default

//   return { path, width, height }
// })

// console.log(imageMetadata)

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]
const costumPhotos = []

// Object.values(images).map((src) => {
//   let photo = {
//     src: src,
//     width: 1000,
//     height: 720,
//   }
//   costumPhotos.push(photo)
// })
// const photos = costumPhotos.map((photo) => ({
//   src: photo.src,
//   width: photo.width,
//   height: photo.height,
//   images: breakpoints.map((breakpoint) => {
//     const height = Math.round((photo.height / photo.width) * breakpoint)
//     return {
//       src: photo.src,
//       width: breakpoint,
//       height,
//     }
//   }),
// }))

const photos = []

export default photos
