import {useContext} from 'react'
import {DarkModeContext} from '../../context/DarkModeProvider';
import styles from "../../_sass/ProgPage.module.scss";


const ProgDetailsComponent = ({prog}) => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
  <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
  <div className={styles.prog_detail}>
   <h1>{prog.title}</h1>
   {/* <img className={styles.blogImage} src={prog.blogImage.url} alt="test" /> */}
   {/* <p>{prog.blogDate}</p>
   <h3>{prog.author}</h3>
   <p>{prog.description}</p> */}
      {/* <div className="" dangerouslySetInnerHTML={{ __html: prog.teamInfo.html }}>
      </div> */}
    </div>
</div>
    </>
  
  )
};

export default ProgDetailsComponent;