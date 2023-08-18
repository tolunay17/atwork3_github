import {useContext} from 'react'
import {DarkModeContext} from '../../context/DarkModeProvider';
import styles from "../../_sass/PostPage.module.scss";


const PostDetailsComponent = ({post}) => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
  <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
  <div className={styles.post_detail}>
      <h1>{post.title}</h1>
      <img className={styles.postImage} src={post.coverImage.url[0]} alt="test"/>
      <div className="" dangerouslySetInnerHTML={{ __html: post.body.html }}>
      </div>
    </div>
</div>
    </>
  
  )
};

export default PostDetailsComponent;