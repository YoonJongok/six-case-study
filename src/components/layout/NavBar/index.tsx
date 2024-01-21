'use client';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Typography from '@/components/shared/atoms/Typography';
import { SixNotification } from '@/components/shared/icons';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const session = useSession();

  const handleLoginBtnClick = async () => {
    await signIn('credentials', {
      username: 'kminchelle',
      password: '0lelplR',
      callbackUrl: '/',
    });
  };

  return (
    <div className='flex items-center gap-3 pr-5'>
      {session.status === 'authenticated' ? (
        <>
          <SixNotification stroke={'white'} strokeWidth={1} width={24} height={24} />
          <ProfileMenu image={session.data.user.image} />
        </>
      ) : (
        <button onClick={handleLoginBtnClick}>
          <Typography type='body3' className='text-white'>
            Login
          </Typography>
        </button>
      )}
    </div>
  );
};

export default NavBar;
