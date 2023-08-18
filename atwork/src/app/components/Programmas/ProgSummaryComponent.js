import { NavLink } from "react-router-dom";
import styles from "../../_sass/ProgPage.module.scss";

const ProgSummaryComponent = ({prog}) => {
  return (
    <>
  
    <div className={styles.prog_summary}>
      <div className={styles.prog_detail}>
      <NavLink to={`/progs/${prog.id}`}>
      {/* <img className={styles.blogImage} src={prog.blogImage.url} alt="test"/> */}

        <h5>{prog.title}</h5>
      </NavLink>      
      </div>
    </div>
    </>
  )
};

export default ProgSummaryComponent;

// Nicole.Walker
// w84pgmGent
// Nicole_Walker79@yahoo.com