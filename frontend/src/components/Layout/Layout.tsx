import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
