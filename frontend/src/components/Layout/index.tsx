import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Footer />
      {children}
    </div>
  );
};
export default Layout;
