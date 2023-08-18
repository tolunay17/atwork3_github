import { CommunitiesList } from "../components/communities";
import styles from "../_sass/communitiePage.module.scss";

const CommunitiesPage = () => {
  return (
    <> 
    <div className={styles.container}>
      <CommunitiesList />
    </div>
    </>
  );
};

export default CommunitiesPage;