function importAll(r) {
  return r.keys().map((key) => {
    let image = new Image()
    image.src = r(key)
    return {
      src: r(key),
      width: 0,
      height: 0,
    }
  })
}

let imagesArray = importAll(
  require.context('./photos', false, /\.(png|jpe?g|svg|webp|jfif)$/)
)

imagesArray = imagesArray.map((image) => {
  const img = new Image()
  img.onload = () => {
    image.width = img.width
    image.height = img.height
  }
  img.src = image.src

  return img
})

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

const photos = imagesArray.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint)
    return {
      src: photo.src,
      width: breakpoint,
      height,
    }
  }),
}))

export default photos
