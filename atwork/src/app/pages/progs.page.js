// import {
//     gql,
//     useQuery,
//   } from "@apollo/client";
//   import { Spinner } from 'reactstrap';
  
//   // Custom components
//   import { ProgListComponent } from '../components/programmas';
  
//   // GraphQL queries
//   const PROGS = gql
// //   `
// //   query GetAllBlogs {
// //     blogs {
// //       id
// //       title
// //       blogImage {
// //        id 
// //        url
// //       }
// //     }
// //   }
// //   `;
  
//   const ProgsPage = () => {
//     const { loading, error, data } = useQuery(PROGS);
//     // const { entries } = data
//     // console.log(data.blogs)
//     // const { blogs } = data
//     const gqlResult = () => {
//       if (loading) return <Spinner
//       color="primary"
//       size=""
//       type="grow"
//       >
//         Loading...
//       </Spinner>;
//       if (error) return <p>Error :(</p>;
      
//       return (
//         <ProgListComponent Progs={data.Progs} />
//       );
//     };
  
//     return (
//       <>
//         {gqlResult()}
//       </>
//     )
//   };
  
//   export default ProgsPage;