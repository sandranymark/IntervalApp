import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './TimerMenu.css';
import Navigation from '../Navigation/Navigation';

function TimerMenu() {
  return (
    <div className='TimerMenu'>
      <Navigation />
      <div className='menu-wrapper'>
        <nav className='nav'>
          <Link className='nav-link' to='/analog-timer'>ANALOG TIMER</Link>
          <Link className='nav-link' to='/digital-timer'>DIGITAL TIMER</Link>
          <Link className='nav-link' to='/text-timer'>TEXT TIMER</Link>
          <Link className='nav-link' to='/set-timer'>FUCK THIS</Link>
        </nav>
      </div>
    </div>
  );
}



export default TimerMenu;
