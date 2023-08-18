import { NavLink } from "react-router-dom";
import styles from "../../_sass/PortfolioPage.module.scss";

const PortfolioSummaryComponent = ({port}) => {
  return (
    <>
  
    <div className={styles.port_summary}>
      <div className={styles.port_detail}>
      <NavLink to={`/portfolio/${port.id}`}>
      {/* <img className={styles.blogImage} src={por.blogImage.url} alt="test"/> */}

        <h5>{port.title}</h5>
      </NavLink>      
      </div>
    </div>
    </>
  )
};

export default PortfolioSummaryComponent;

// Nicole.Walker
// w84pgmGent
// Nicole_Walker79@yahoo.com