import Navigation from "../Navigation/Navigation"
import './AnalogTimer.css'
import Clock from '../../assets/minutes.svg'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useTimer} from "../../TimerContext.jsx";
import {motion} from 'framer-motion'



function AnalogTimer() {
    const navigate = useNavigate()
    const { seconds, minutes, resetTimer } = useTimer(); 

    useEffect(() => {
    }, []);
    
    const handleAbort = () => {
        resetTimer();
        navigate('/set-timer');
    }

    return (
        <div className="AnalogTimer">
            <section className="nav-section">
                <h3 className="interval-heading">interval</h3>
                <Navigation/>
            </section>

            <div className='AnalogTimer--wrapper'>
                <div className="clockis">
                    <img
                        alt="AnalogClock"
                        src={Clock}
                        className="AnalogClock"
                    />
                    <div className='AnalogClock--dot'></div>
                    <div className='AnalogClock--houers twelve'>0</div>
                    <div className='AnalogClock--houers one'>5</div>
                    <div className='AnalogClock--houers two'>10</div>
                    <div className='AnalogClock--houers three'>15</div>
                    <div className='AnalogClock--houers four'>20</div>
                    <div className='AnalogClock--houers five'>25</div>
                    <div className='AnalogClock--houers six'>30</div>
                    <div className='AnalogClock--houers seven'>35</div>
                    <div className='AnalogClock--houers eight'>40</div>
                    <div className='AnalogClock--houers nine'>45</div>
                    <div className='AnalogClock--houers ten'>50</div>
                    <div className='AnalogClock--houers eleven'>55</div>



                    <motion.div
                        className="minute-hand"
                        style={{
                            transform: `rotateZ(${minutes * 6}deg)`, 
                        }}
                    ></motion.div>

                    <motion.div
                        className="second-hand"
                        style={{
                            transform: `rotateZ(${seconds * 6}deg)`, 
                        }}
                    ></motion.div>

                


                </div>
        <div className="button-container">
        <button
                    className='abort-btn'
                    onClick={() => handleAbort()}
                > ABORT TIMER
                </button>   
            </div>
                        
            </div>
          
        </div>
    )
}

export default AnalogTimer
