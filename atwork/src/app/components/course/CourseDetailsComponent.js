import {useContext} from 'react'
import {DarkModeContext} from '../../context/DarkModeProvider';
import styles from "../../_sass/CoursePage.module.scss";


const CourseDetailsComponent = ({course}) => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
  <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
  <div className={styles.course_detail}>
   <h1>{course.title}</h1>
    </div>
</div>
    </>
  
  )
};

export default CourseDetailsComponent;