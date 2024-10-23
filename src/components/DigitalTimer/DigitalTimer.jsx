import './DigitalTimer.css';
import Navigation from '../Navigation/Navigation';
import {useTimer} from "../../TimerContext.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function DigitalTimer() {
    
    const navigate = useNavigate();

    const { displayTime, resetTimer } = useTimer(); // Access the current timer value from context

    const handleAbort = () => {
        resetTimer();
        navigate('/set-timer');
    }
    
    useEffect(() => {
    }, []);
    
    return (
        <div className='DigitalTimer'>
            <section className="nav-section">
                <h3 className="interval-heading">Interval</h3>
                <Navigation/>
            </section>

            <div className='DigitalTimer--wrapper'>

                <div className='time-container'>
                    <h1>{displayTime}</h1>
                    <button
                    className='abort-btn'
                    onClick={() => handleAbort()}
                > ABORT TIMER
                </button>
                </div>
               
            </div>
        </div>
    );
}

export default DigitalTimer;
