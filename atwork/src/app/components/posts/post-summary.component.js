import { NavLink } from "react-router-dom";
import styles from "../../_sass/PostPage.module.scss";

const PostSummaryComponent = ({post}) => {
  return (
    <>
  
    <div className={styles.post_summary}>
      <NavLink to={`/posts/${post.id}`}>
        {/* Need to map the images */}
        <img src={post.coverImage[0].url} alt={post.coverImage.url} />
        <h1>{post.updatedAt}</h1>
        <h2>{post.title}</h2>

      </NavLink>      
    </div>
    </>
  )
};

export default PostSummaryComponent;