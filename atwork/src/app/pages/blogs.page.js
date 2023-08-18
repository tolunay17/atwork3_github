import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { Spinner } from 'reactstrap';
  
  // Custom components
  import { BlogListComponent } from '../components/blogs';
  
  // GraphQL queries
  const BLOGS = gql`
  query GetAllBlogs {
    blogs {
      id
      title
      blogImage {
       id 
       url
      }
    }
  }
  `;
  
  const BlogsPage = () => {
    const { loading, error, data } = useQuery(BLOGS);
    // const { entries } = data
    // console.log(data.blogs)
    // const { blogs } = data
    const gqlResult = () => {
      if (loading) return <Spinner
      color="primary"
      size=""
      type="grow"
      >
        Loading...
      </Spinner>;
      if (error) return <p>Error :(</p>;
      
      return (
        <BlogListComponent blogs={data.blogs} />
      );
    };
  
    return (
      <>
        {gqlResult()}
      </>
    )
  };
  
  export default BlogsPage;