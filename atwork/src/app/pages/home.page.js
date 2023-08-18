import { Outlet } from "react-router-dom";
import BlogsPage from "./blogs.page";
import CommunitiesPage from "./communities.page";
import styles from "../_sass/HomePage.module.scss";
const HomePage = () => {
  return (
    <>
    <div className={styles.container}>
        <CommunitiesPage/>
        <BlogsPage/>
    </div>
    
   
    </>

  );
};

export default HomePage;