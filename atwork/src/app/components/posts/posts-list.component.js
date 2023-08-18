import { Outlet } from "react-router-dom";
import PostSummaryComponent from "./post-summary.component";
import styles from "../../_sass/PostPage.module.scss";

const PostsListComponent = ({posts}) => {
  return (
    <div className={styles.posts_list}>
      {posts && posts.map((post) => ( 
      <>
        <PostSummaryComponent key={post.id} post={post} />
        </>
      ))}
      <Outlet />
    </div>
    
  )
};

export default PostsListComponent;