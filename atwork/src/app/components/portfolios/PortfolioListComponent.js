import { Outlet } from "react-router-dom";
import TeamSummaryComponent from "./PortfolioSummaryComponent";
import styles from "../../_sass/PortfolioPage.module.scss";

const PortfolioListComponent = ({ports}) => {
  return (
    <div className={styles.ports_list}>
     {ports && ports.map((port) => (
      <>
      <TeamSummaryComponent key={port.id} port={port} />
      </>
     ))}
      <Outlet/>
    </div>
  )
}

export default PortfolioListComponent