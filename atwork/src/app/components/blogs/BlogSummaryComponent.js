import { NavLink } from "react-router-dom";
import styles from "../../_sass/BlogPage.module.scss";

const BlogSummaryComponent = ({blog}) => {
  return (
    <>
  
    <div className={styles.blog_summary}>
      <div className={styles.blog_detail}>
      <NavLink to={`/blogs/${blog.id}`}>
      <img className={styles.blogImage} src={blog.blogImage.url} alt="test"/>
    {/* <h1>dfddfdf</h1> */}
        <h5>{blog.title}</h5>
      </NavLink>      
      </div>
    </div>
    </>
  )
};

export default BlogSummaryComponent;