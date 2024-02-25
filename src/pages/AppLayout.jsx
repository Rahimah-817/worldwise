import React from 'react';
import AppNav from '../components/AppNav';
import PageNav from '../components/PAgeNav';

const AppLayout = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <p>App layout</p>
    </div>
  );
};

export default AppLayout;
