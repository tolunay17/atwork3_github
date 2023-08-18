import { Outlet } from "react-router-dom";
import BlogSummaryComponent from "./BlogSummaryComponent";
import styles from "../../_sass/BlogPage.module.scss";

const  BlogListComponent = ({blogs}) => {
  return (
    <>
    <div className={styles.blogs_list}>
     {blogs && blogs.map((blog) => (
    
      <BlogSummaryComponent key={blog.id} blog={blog} />
    
     ))}
      <Outlet/>
    </div>
    </>
  )
}

export default BlogListComponent