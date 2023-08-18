import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { Spinner } from 'reactstrap';
  
    // Custom components
    import { TeamListComponent } from '../components/teams';

    // GraphQL queries
    const TEAMS = gql`
    query GetAllTeams {
      teams {
        id
        title
        authorImage {
          id
          url
        }
        description
        teamInfo {
          html
        }
      }
    }
    `;

    const TeamsPage = () => {
        const { loading, error, data } = useQuery(TEAMS);
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
            <TeamListComponent teams={data.teams} />
          );
        };
      
        return (
          <>
            {gqlResult()}
          </>
        )
      };
      
      export default TeamsPage;