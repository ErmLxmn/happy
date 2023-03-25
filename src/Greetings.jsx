import PhotoAlbum from 'react-photo-album'
import './Greetings.css'
import React, { useState, useEffect } from 'react'

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

function Greetings() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const imagesArray = importAll(
      require.context('./photos', false, /\.(png|jpe?g|svg|webp|jfif)$/)
    )
    setImages(imagesArray)
  }, [])

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image()
      img.onload = () => {
        image.width = img.width / 2
        image.height = img.height / 2
      }
      img.src = image.src
    })
  }, [images])
  return (
    <div className='photo-container'>
      <PhotoAlbum layout='columns' photos={images} />
    </div>
  )
}

export default Greetings
