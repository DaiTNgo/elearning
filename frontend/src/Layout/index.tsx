import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
