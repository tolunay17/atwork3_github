// import {useContext} from 'react'
// import {DarkModeContext} from '../../context/DarkModeProvider';
// import styles from "../../_sass/TeamPage.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeProvider";
import styles from '../../_sass/TeamPage.module.scss';

const TeamDetailsComponent = ({team}) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
      <>
    <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
    <div className={styles.team_detail}>
      <p>{team.author}</p>
      {/* <p>{team.title}</p> */}
     {/* <h1>{team.title}</h1> */}
     {/* <img className={styles.blogImage} src={team.blogImage.url} alt="test" /> */}
     {/* <p>{team.description}</p> */}
        {/* <div className="" dangerouslySetInnerHTML={{ __html: team.teamInfo.html }}> */}
        {/* </div> */}
      </div>
  </div>
      </>
    
    )
  };
  
  export default TeamDetailsComponent;