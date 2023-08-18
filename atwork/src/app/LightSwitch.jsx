import {useContext} from 'react'
import {DarkModeContext} from './context/DarkModeProvider'

function LightSwitch() {
    const {darkMode,toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () =>{
        toggleDarkMode();
    }
  return (
    <div className='LightSwitch'>
  {/* <img src={darkMode ? `./assets/light.svg` : `./assets/nolight.svg`} alt="Lightswitch on"  onClick={handleClick}/>
  
  */}
  <button className={`${darkMode} btn`} onClick={handleClick}>change color</button>
    </div>
  )
}

export default LightSwitch