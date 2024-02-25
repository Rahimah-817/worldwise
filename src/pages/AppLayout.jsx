import Map from '../components/MAp';
import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map/>
    </div>
  );
};

export default AppLayout;
