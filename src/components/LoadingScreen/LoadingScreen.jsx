import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';
import Logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';


function LoadingScreen() {
const navigate = useNavigate();

const handleClick = () => {
  navigate('/set-timer');
}




  return (
    <div className="loading-screen">
      <motion.img
        className='logotype'
        src={Logo}
        alt="Logotype"
        onClick={handleClick}
        initial={{
          y: -1000, // Logotypen börjar högt uppifrån (utanför skärmen)
          scale: 0.5, // Börjar liten
        }}
        animate={{
          y: 0, // Logotypen glider in till mitten av skärmen
          scale: 1, // Blir lite större när den landar
          rotate: [0, 20, -20, 10, -10, 0], // Skapar en liten skakig effekt vid "smash"
        }}
        transition={{
          type: 'spring',
          stiffness: 100, // för en långsammare och mjukare rörelse
          damping: 10, // Dämpar rörelsen mjukt efter landning och får en studseffekt
          duration: 3, // tid för långsammare animation
        }}
        whileTap={{
          scale: 2, // vid klicket scalar jag upp logotypen
          
        }}
      />
    </div>
  );
}

export default LoadingScreen;