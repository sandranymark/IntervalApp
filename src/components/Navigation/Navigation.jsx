import './Navigation.css'
import navigation from '../../assets/navicon.svg'
import TimerMenu from '../TimerMenu/TimerMenu'
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";



function Navigation() {
const [menuOpen, setMenuOpen] = useState(false);


const handleIconClick = () => {
  setMenuOpen(prevState => !prevState);
};


const handleCloseClick = () => {
  setMenuOpen(false);
};




  return (
    <div className='Navigation'>
      <img
        className='nav-icon'
        src={navigation}
        alt="Navigation-menu"
        onClick={handleIconClick}
       
      />
     {menuOpen && (
        <div className='overlay'>
          <button className='close-button' onClick={handleCloseClick}>
          <IoIosCloseCircle size={30} color="white" />
          </button>
          <TimerMenu />
        </div>
      )}
    </div>
  )
}

export default Navigation

