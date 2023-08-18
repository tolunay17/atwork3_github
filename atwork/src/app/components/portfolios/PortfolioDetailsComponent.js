import {useContext} from 'react'
import {DarkModeContext} from '../../context/DarkModeProvider';
import styles from "../../_sass/PortfolioPage.module.scss";

const PortfolioDetailsComponent = ({port}) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
      <>
    <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
    <div className={styles.port_detail}>
     <h1>{port.title}</h1>
     {/* <img className={styles.blogImage} src={por.blogImage.url} alt="test" /> */}
     <p>{port.description}</p>
        {/* <div className="" dangerouslySetInnerHTML={{ __html: por.blogInfo.html }}>
        </div> */}
      </div>
  </div>
      </>
    
    )
  };
  
  export default PortfolioDetailsComponent;