import {createContext, useState, useEffect, useContext, useRef} from 'react';
import Timer from 'easytimer.js';
import {useNavigate} from 'react-router-dom'

// Create a context with default values
const TimerContext = createContext();

export const TimerProvider = ({children}) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayTime, setDisplayTime] = useState("00:00");
    const navigate = useNavigate()
    
    // By using useRef, you can persist the timer instance across renders without causing reinitializations.
    const timer = useRef(null);

    useEffect(() => {

        if (!timer.current) {
            timer.current = new Timer();
            
            timer.current.addEventListener('secondsUpdated', onUpdated);
            timer.current.addEventListener('targetAchieved', onFinished);
        }

        // Cleanup the timer instance
        return () => {};
        
    }, []);

    
    
    const onUpdated = () => updateDisplayTime();

    const startTimer = () => timer.current.start();

    const stopTimer = () => timer.current.stop();

    const onFinished = () => {
        timer.current.stop();
        navigate('/alarm-view');
    }
    
    const resetTimer = () => {
        timer.current.stop();
        updateDisplayTime();
    };

    const setCountdownTime = (timeInMinutes) => {
        timer.current.stop();
        timer.current.start({countdown: true, startValues: {minutes: timeInMinutes}}); // Set the countdown time
        updateDisplayTime();
    };

    const updateDisplayTime = () =>
    {
        setMinutes(timer.current.getTimeValues().minutes);
        setSeconds(timer.current.getTimeValues().seconds);
        setDisplayTime(timer.current.getTimeValues().toString(['minutes', 'seconds']));
    }
    
    return (
        <TimerContext.Provider value={{displayTime, minutes, seconds, startTimer, stopTimer, resetTimer, setCountdownTime}}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => useContext(TimerContext);
