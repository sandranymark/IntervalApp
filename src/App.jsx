import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SetTimer from './components/SetTimer/SetTimer';
import AnalogTimer from './components/AnalogTimer/AnalogTimer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import DigitalTimer from './components/DigitalTimer/DigitalTimer';
import TimerMenu from './components/TimerMenu/TimerMenu';
import AlarmView from './components/AlarmView/AlarmView';
import TextTimer from './components/TextTimer/TextTimer';
import {TimerProvider} from "./TimerContext.jsx";

function App() {
    return (

        <Router>
            <TimerProvider>
                <Routes>
                    <Route path="/" element={<LoadingScreen/>}/>
                    <Route path="set-timer" element={<SetTimer/>}/>
                    <Route path="analog-timer" element={<AnalogTimer/>}/>
                    <Route path="digital-timer" element={<DigitalTimer/>}/>
                    <Route path="menu" element={<TimerMenu/>}/>
                    <Route path="alarm-view" element={<AlarmView/>}/>
                    <Route path="text-timer" element={<TextTimer/>}/>
                </Routes>
            </TimerProvider>
        </Router>

    );
}

export default App;
