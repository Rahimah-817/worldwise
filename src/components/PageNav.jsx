import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home Page</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product Page</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
