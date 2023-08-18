// import {
//     gql,
//     useQuery,
//   } from "@apollo/client";
//   import { useParams } from "react-router-dom";
  
//   // Custom components
//   import { ProgDetailsComponent } from '../components/programmas';
  
//   // GraphQL queries
//   const PROG = gql
//   // `
//   // query GetPortfolioById($id: ID!) {
//   //   Portfolio(where: {id: $id}) {
//   //     id
//   //     title
//   //     description
//   //     blogDate
//   //     author

//       // blogImage {
//   //       id 
//   //       url
//   //      }
//   //      blogInfo{
//   //       html
//   //     }
//   //   }
//   // }
//   // `;

  
  
//   const ProgsDetailsPage = () => {
//     let params = useParams();
//     let progId = (params.progId);
  
//     console.log(progId);
  
//     const { loading, error, data } = useQuery(PROG, { 
//       variables: {
//         id: progId
//       }
//     });
  
//     const gqlResult = () => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;
  
//       return (
//         <ProgDetailsComponent progId={data.progId} />
//       );
//     };
  
//     return (
//       <>
//         {gqlResult()}
//       </>
//     )
//   };
  
//   export default ProgsDetailsPage;