import AlarmClock from '../../assets/alarm-icon.svg'
import './AlarmView.css'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
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
      />
    <div className='alarm-background'>
        <motion.img
            className='alarm-icon'
            src={AlarmClock}
            alt="Alam Clock"
            animate={{ rotate: [0, -10, 10, -10, 10, 0],  
            }}
            transition={{
              duration: 0.5,    
              repeat: Infinity,
              ease: 'easeInOut' 
            }}
                
            
        />
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
