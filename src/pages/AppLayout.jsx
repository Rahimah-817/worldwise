import PageNav from '../components/PagNav';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <PageNav />
    </div>
  );
};

export default AppLayout;
