import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className='flex min-h-screen-minus-header'>
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;
