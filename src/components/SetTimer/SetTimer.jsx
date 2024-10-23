import './SetTimer.css';
import {useState} from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import Navigation from '../Navigation/Navigation';
import { useTimer } from '../../TimerContext';
import {useNavigate} from "react-router-dom";

function SetTimer() {

    const {startTimer, setCountdownTime} = useTimer();
    const [inputTime, setInputTime] = useState(1); // State to hold the input time in seconds
    const navigate = useNavigate();

    const handleSetCountdown = () => {
        if (inputTime > 0) {
            setCountdownTime(inputTime); // Set the countdown time in seconds
            setInputTime(0); // Reset the input field after setting the time
        }
    };

    const increase = () => setInputTime(inputTime + 1);

    const decrease = () => {
        if (inputTime > 1) {
            setInputTime(inputTime - 1);
        }
    }

    const start = () => {
        setCountdownTime(inputTime);
        startTimer();
        navigate('/digital-timer')
    }

    return (
        <div className="set-timer">
            <Navigation/>
            <div className='set_timer--wrapper'>
                <section className="counter-section">
                    <FaChevronLeft className="Count-left" onClick={decrease}/>
                    <div className="time-container">
                        <h1 className="Count-heading">{inputTime}</h1>
                        <span className="minutes-label">minutes</span>
                    </div>
                    <FaChevronRight className="Count-right" onClick={increase}/>
                </section>

                <div className='checkmarks'>
                    <div className='flex-test'>
                        <input className='checkbox' type="checkbox"/>
                        <p className='set__timer-text'>Intervals</p>
                    </div>
                </div>

                <div className='checkmarks'>
                    <div className='flex-test'>
                        <input className='checkbox' type="checkbox"/>
                        <p className='set__timer-text'>5 min break/interval</p>
                    </div>
                </div>
                <div className='button-container'>
                <button
                    className='start__timer-btn'
                    onClick={start}
                >START TIMER
                </button>
                </div>
            </div>
        </div>
    );
}

export default SetTimer;
