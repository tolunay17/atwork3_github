import {useContext} from 'react'
import {DarkModeContext} from '../context/DarkModeProvider';

function Test() {
    const {darkMode} = useContext(DarkModeContext)
  return (

    <>
    <div className={ darkMode ? `Container Container-dark` : `Container Container-light` }>
    <h1>Ik ben een test van de changecolor provider</h1>

    </div>
    </>
  )
}

export default Test