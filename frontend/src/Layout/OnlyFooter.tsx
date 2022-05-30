import React from 'react';
import Footer from './Footer';
const OnlyFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
export default OnlyFooterLayout;
