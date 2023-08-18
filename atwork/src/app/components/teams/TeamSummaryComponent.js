import { NavLink } from "react-router-dom";
import styles from "../../_sass/TeamPage.module.scss";

const TeamSummaryComponent = ({team}) => {
  return (
    <>
  
    <div className={styles.team_summary}>
      <div className={styles.team_detail}>
      <NavLink to={`/teams/${team.id}`}>
      <img className={styles.authorImage} src={team.authorImage.url} alt="test"/>

        <h5>{team.title}</h5>
        <p>{team.description}</p>
      </NavLink>      
      </div>
    </div>
    </>
  )
};

export default TeamSummaryComponent;

// Nicole.Walker
// w84pgmGent
// Nicole_Walker79@yahoo.com