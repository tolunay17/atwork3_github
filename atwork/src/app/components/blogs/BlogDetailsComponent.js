import {useContext} from 'react'
import {DarkModeContext} from '../../context/DarkModeProvider';
import styles from "../../_sass/BlogPage.module.scss";


const BlogDetailsComponent = ({blog}) => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
  <div className={ darkMode ? `Container Container-dark ` : `Container Container-light` }>
  <div className={styles.blog_detail}>
   <h1>{blog.title}</h1>
   <img className={styles.blogImage} src={blog.blogImage.url} alt="test" />
   <p>{blog.blogDate}</p>
   <h3>{blog.author}</h3>
   <p>{blog.description}</p>
      {/* <div className="" dangerouslySetInnerHTML={{ __html: blog.blogInfo.html }}>
      </div> */}
    </div>
</div>
    </>
  
  )
};

export default BlogDetailsComponent;