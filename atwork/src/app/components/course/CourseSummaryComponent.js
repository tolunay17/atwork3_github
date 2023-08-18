import { NavLink } from "react-router-dom";
import styles from "../../_sass/CoursePage.module.scss";

const CourseSummaryComponent = ({course}) => {
  return (
    <>
  
    <div className={styles.course_summary}>
      <div className={styles.course_detail}>
      <NavLink to={`/courses/${course.id}`}>

        <h5>{course.title}</h5>
      </NavLink>      
      </div>
    </div>
    </>
  )
};

export default CourseSummaryComponent;

// Nicole.Walker
// w84pgmGent
// Nicole_Walker79@yahoo.com