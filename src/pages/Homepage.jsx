import AppNav from '../components/AppNav';
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <AppNav />
      <PageNav />
      <h1>WorldWise</h1>
      <Link to='/app'>Go to the app</Link>
    </div>
  );
};

export default Homepage;
