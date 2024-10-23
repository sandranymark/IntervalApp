import './TextTimer.css'
import Navigation from '../Navigation/Navigation'
import { useNavigate } from 'react-router-dom'

function TextTimer() {
const navigate = useNavigate()


  return (
    <div className='TextTimer'>
      
<section className="nav-section">
        <h3 className="interval-heading">interval</h3>
        <Navigation />
      </section>
<div className='TextTimer--wrapper'>
      <h4 className='TextTimer-heading'>Sju minuter och Trettiotvå sekunder kvar</h4>


        <button
        className='abort-btn'
        onClick={() => navigate('/set-timer')}
        > ABORT TIMER</button>


    </div>
    </div>
  )
}

export default TextTimer
