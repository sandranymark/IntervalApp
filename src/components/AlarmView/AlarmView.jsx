import AlarmClock from '../../assets/alarm-icon.svg'
import './AlarmView.css'
import { useNavigate } from 'react-router-dom'
import ghostMusic from '../../assets/GhostMusic.mp3'
import { useEffect, useRef } from 'react'

function AlarmView() {
 const navigate = useNavigate()
 const audioRef = useRef(null)
    

 useEffect(() => {
  if (audioRef.current) {
    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error)
    })
  }
}, [])

  return (
    
<div className='AlarmView'>
<audio
        ref={audioRef}
        src={ghostMusic}
        autoPlay
        hidden
        loop
      />
    <div className='alarm-background'>
        <img
            className='alarm-icon'
            src={AlarmClock}
            alt="Alam Clock"/>

        <h2 className='TimesUp-heading'>Times up!</h2>
    </div>
    <button
        className='SetNew-btn'
        onClick={() => navigate('/set-timer')}
        > SET NEW TIMER</button>
 </div>
  )
}

export default AlarmView
