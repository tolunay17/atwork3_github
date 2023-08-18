import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { useParams } from "react-router-dom";
  
  // Custom components
  import { BlogDetailsComponent } from '../components/blogs';
  
  // GraphQL queries
  const BLOG = gql`
  query GetBlogById($id: ID!) {
    blog(where: {id: $id}) {
      id
      title
      description
      blogDate
      author

      blogImage {
        id 
        url
       }
    }
  }
  `;

  
  
  const BlogDetailsPage = () => {
    let params = useParams();
    let blogId = (params.blogId);
  
    console.log(blogId);
  
    const { loading, error, data } = useQuery(BLOG, { 
      variables: {
        id: blogId
      }
    });
  
    const gqlResult = () => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :</p>;

      return (
        <BlogDetailsComponent blog={data.blog} />
      );
    };
  
    return (
      <>
        {gqlResult()}
      </>
    )
  };
  
  export default BlogDetailsPage;