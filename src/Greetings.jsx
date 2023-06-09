import React, { useState, useEffect, useRef } from 'react'
import PhotoAlbum from 'react-photo-album'
import './Greetings.css'
import photos from './photos'
import Spinner from 'react-bootstrap/Spinner'
import Message from './Message'

function Greetings() {
  const [loading, setLoading] = useState(true)
  const [showAlbum, setShowAlbum] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setShowAlbum(true)
    }, 3000)
  }, [])

  return (
    <div className='photo-container'>
      <div className='overlay'>
        <Message />
      </div>
      {loading ? (
        <div className='spinner-container'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div style={{ display: showAlbum ? 'block' : 'none' }}>
          <PhotoAlbum layout='masonry' photos={photos} />
        </div>
      )}
    </div>
  )
}

export default Greetings
