'use client';
import React, { useEffect } from 'react';
import { UserService } from '@/api/services/User';
import Typography from '@/components/shared/atoms/Typography';
import { SixNotification } from '@/components/shared/icons';

const NavBar = () => {
  useEffect(() => {
    (async () => {
      const res = await UserService.login({ username: 'kminchelle', password: '0lelplR' });
      console.log({ res });
    })();
  }, []);

  return (
    <div className='flex items-center'>
      <SixNotification stroke={'white'} strokeWidth={1} width={24} height={24} />
      <Typography type='body3' className='pr-5 pl-4 text-white'>
        Login
      </Typography>
    </div>
  );
};

export default NavBar;
