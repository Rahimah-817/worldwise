import React from 'react';
import { Link } from 'react-router-dom';

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/product'>Product Page</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
