import './TextTimer.css'
import Navigation from '../Navigation/Navigation'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {useTimer} from '../../TimerContext.jsx'

function TextTimer() {
    
  const navigate = useNavigate();

  const { resetTimer, minutes, seconds} = useTimer(); 

  const handleAbort = () => {
      resetTimer();
      navigate('/set-timer');
  }

  const numberToWords = (num) => {
    const words = [
      'noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio',
      'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton', 'tjugo',
      'tjugoen', 'tjugotvå', 'tjugotre', 'tjugofyra', 'tjugofem', 'tjugosex', 'tjugosju', 'tjugoåtta', 'tjugonio', 'trettio',
      'trettioett', 'trettiotvå', 'trettiotre', 'trettiofyra', 'trettiofem', 'trettiosex', 'trettiosju', 'trettioåtta', 'trettionio', 'fyrtio',
      'fyrtioett', 'fyrtiotvå', 'fyrtiotre', 'fyrtiofyra', 'fyrtiofem', 'fyrtiosex', 'fyrtiosju', 'fyrtioåtta', 'fyrtionio', 'femtio',
      'femtioett', 'femtiotvå', 'femtiotre', 'femtiofyra', 'femtiofem', 'femtiosex', 'femtiosju', 'femtioåtta', 'femtionio', 'sextio'
    ];
    return words[num] || num;
  }

  const formatTimeAsText = (minutes, seconds) => {
    const minuteText = minutes === 1 ? 'en minut' : `${numberToWords(minutes)} minuter`;
    const secondText = seconds === 1 ? 'en sekund' : `${numberToWords(seconds)} sekunder`;
    return `${minuteText} och ${secondText} kvar`.toUpperCase();
  }
  
  useEffect(() => {
  }, []);

  return (
    <div className='TextTimer'>
      
<section className="nav-section">
        <h3 className="interval-heading">interval</h3>
        <Navigation />
      </section>
<div className='TextTimer--wrapper'>
      <h4 className='TextTimer-heading'>{formatTimeAsText(minutes, seconds)}</h4>


        <button
        className='abort-btn'
        onClick={() => {
          handleAbort(); 
          navigate('/set-timer'); 
      }}
        > ABORT TIMER</button>


    </div>
    </div>
  )
}

export default TextTimer
