import { gql, useQuery } from "@apollo/client";

import { ListGroup, ListGroupItem } from 'reactstrap';

const GET_ALL_COMMUNITIES = gql`
query GetAllCommunities {
  communities {
    name
    id
    description
    createdAt
    communityImage {
      id
      url
    }
  }
}
`;

const CommunitiesList = () => {
  const { loading, error, data } = useQuery(GET_ALL_COMMUNITIES);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
      <div className="card communities-list">
        <div className="card-header">
          Communities
        </div>
        <ListGroup>
        {data && data.communities && data.communities.map(community => 
          <ListGroupItem key={ community.id }>
            <h2>{ community.name }</h2>
            {/* <p>{community.createdAt}</p> */}
            <p>{ community.description }</p>
            <img className={community.communityImage} src={community.communityImage.url} alt="test"/>
          </ListGroupItem>
        )}
        </ListGroup>
      </div>
    )
  };

  return (
    <>
      {
        gqlResultAsJSX()
      }
    </>
  )
};

export default CommunitiesList;