import { Outlet } from "react-router-dom";
import BlogSummaryComponent from "./ProgSummaryComponent";
import styles from "../../_sass/ProgPage.module.scss";

const ProgListComponent = ({progs}) => {
  return (
    <div className={styles.progs_list}>
     {progs && progs.map((prog) => (
      <>
      <BlogSummaryComponent key={prog.id} prog={prog} />
      </>
     ))}
      <Outlet/>
    </div>
  )
}

export default ProgListComponent