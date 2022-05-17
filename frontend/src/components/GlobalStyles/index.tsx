import React from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }: { children: React.ReactNode }) {
  return <div className='container'>{children}</div>;
}

export default GlobalStyles;
