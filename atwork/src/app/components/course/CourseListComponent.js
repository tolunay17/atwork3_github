import { Outlet } from "react-router-dom";
import CourseSummaryComponent from "./CourseSummaryComponent";
import styles from "../../_sass/CoursePage.module.scss";

const  CourseListComponent = ({course}) => {
  return (
    <>
    <div className={styles.course_list}>
     {course && course.map((course) => (
    
      <CourseSummaryComponent key={course.id} course={course} />
    
     ))}
      <Outlet/>
    </div>
    </>
  )
}

export default CourseListComponent