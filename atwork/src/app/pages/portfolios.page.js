import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { Spinner } from 'reactstrap';
  
  // Custom components
  import { PortfolioListComponent } from '../components/portfolios';
  
  // GraphQL queries
  const PORTFOLIOS = gql
  `
  query MyQuery {
    portfolios {
      id
      projectDescription
      projectName
      projectUrl
      projectImage {
        id
        url
      }
    }
  }
  
  `;
  
  const PortfoliosPage = () => {
    const { loading, error, data } = useQuery(PORTFOLIOS);
   const portfolioData = data?.portfolios;
   console.log(portfolioData)

    
      
    
    console.log(data)
    console.log('ddd')
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
        <PortfolioListComponent Portfolios={data.Portfolios} />
      );
    };
  
    return (
      <>
        {gqlResult()}
        {portfolioData?.map((portfolio) => (
          <div key={portfolio.id}>
            <h1>{portfolio.projectName}</h1>
            <p>{portfolio.projectDescription}</p>
            <p>{portfolio.projectUrl}</p>
            <img src={portfolio.projectImage.url} alt={portfolio.projectImage.id} />
          </div>
        ))}
      </>
    )
  };
  
  export default PortfoliosPage;