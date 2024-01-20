import React from 'react';
import Sidebar from '@/components/layout/Sidebar';

const HomePage = () => {
  return (
    <>
      <main className='flex min-h-screen-minus-header'>
        <Sidebar />
        {/* <Typography type='title1'>Welcome to</Typography> */}
      </main>
    </>
  );
};

export default HomePage;
