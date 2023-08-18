import { Outlet } from "react-router-dom";
import TeamSummaryComponent from "./TeamSummaryComponent";
import styles from "../../_sass/TeamPage.module.scss";

const TeamListComponent = ({teams}) => {
  return (
    <div className={styles.teams_list}>
     {teams && teams.map((team) => (
      <>
      <TeamSummaryComponent key={team.id} team={team} />
      </>
     ))}
      <Outlet/>
    </div>
  )
}

export default TeamListComponent