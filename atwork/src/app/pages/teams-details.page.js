import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { useParams } from "react-router-dom";
  
  // Custom components
  import { TeamDetailsComponent } from '../components/teams';
  
  // GraphQL queries
  const TEAM = gql`
query GetTeamById($id: ID!) {
  team (where: {id: $id}) {
    authorImage {
      id
    }
    author
    id
    description
    title
  }
}
`;

  
  
  const TeamDetailsPage = () => {
    let params = useParams();
    let teamId = (params.teamId);
  
    console.log(teamId);
  
    const { loading, error, data } = useQuery(TEAM, { 
      variables: {
        id: teamId
      }
    });
  
    const gqlResult = () => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
  
      return (
        <TeamDetailsComponent team={data.team} />
      );
    };
  
    return (
      <>
        {gqlResult()}
      </>
    )
  };
  
  export default TeamDetailsPage;