import { useState } from 'react'
import './HappyBirthdayCard.css'
import letterImg from './card1.png'
import { useNavigate } from 'react-router-dom'

function HappyBirthdayCard() {
  const navigate = useNavigate()
  const [isFlipped, setFlipped] = useState(false)
  const [isHidden, setHidden] = useState(false)

  function handleClick() {
    setFlipped(true)
    setTimeout(() => {
      setHidden(true)
      navigate('/greetings')
    }, 2000) // adjust the time based on your transition duration
  }

  return (
    <>
      <div className='body-container'>
        {!isHidden && (
          <div
            className={`wrapper ${isFlipped ? 'flipped hide' : ''}`}
            onClick={handleClick}
          >
            <div className='lid one'></div>
            <div className='lid two'></div>
            <div className='envelope'></div>
            <div className='letter'>
              <img src={letterImg} alt='Letter' />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default HappyBirthdayCard
