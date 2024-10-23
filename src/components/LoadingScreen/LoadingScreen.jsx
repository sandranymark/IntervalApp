import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';
import Logo from '../../assets/logo.svg';


function LoadingScreen() {
const navigate = useNavigate();




  return (
    <div className="loading-screen">
      <img
        className='logotype'
        src={Logo}
        alt="Logotype"
        onClick={() => navigate('/set-timer')}
      />
    </div>
  );
}

export default LoadingScreen;