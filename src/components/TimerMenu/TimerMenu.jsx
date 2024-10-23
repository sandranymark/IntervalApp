import { Link } from 'react-router-dom';
import './TimerMenu.css';
import Navigation from '../Navigation/Navigation';
import { motion } from 'framer-motion';

function TimerMenu() {

  const linkVariants = {
    hidden: 
    { 
      opacity: 0, 
      x: -100    
    }, 

    visible: (linkIndex) => ({
      opacity: 1, 
      x: 0,      
      transition: {
        delay: linkIndex * 0.3, //fördröjning baserat på index för att animera en i taget
        duration: 0.3,
      },
    }),
  };

const navLinks = [
  { path: '/analog-timer', label: 'ANALOG TIMER' },
  { path: '/digital-timer', label: 'DIGITAL TIMER' },
  { path: '/text-timer', label: 'TEXT TIMER' },
  // { path: '/set-timer', label: 'FUCK THIS' },
];


return (
  <div className='TimerMenu'>
    <Navigation />
    <div className='menu-wrapper'>
      <nav className='nav'>
        {navLinks.map((link, linkIndex) => (
          <motion.div
            className='nav-link'
            key={link.path}
            custom={linkIndex}
            initial='hidden'
            animate='visible'
            variants={linkVariants}
          >
            <Link to={link.path}>{link.label}</Link>
          </motion.div>
        ))}
      </nav>
    </div>
  </div>
);
}

export default TimerMenu;
