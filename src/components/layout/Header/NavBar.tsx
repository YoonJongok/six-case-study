'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import Typography from '@/components/shared/atoms/Typography';
import { SixNotification } from '@/components/shared/icons';

const NavBar = () => {
  const session = useSession();

  // useEffect(() => {
  //   (async () => {
  //     const res = await UserService.login({ username: 'kminchelle', password: '0lelplR' });
  //     console.log({ res });
  //   })();
  // }, []);

  console.log({ session });

  const handleLoginBtnClick = async () => {
    await signIn('credentials', {
      username: 'kminchelle',
      password: '0lelplR',
      callbackUrl: '/',
    });
  };

  const handleLogoutBtnClick = async () => {
    await signOut();
  };

  return (
    <div className='flex items-center'>
      <SixNotification stroke={'white'} strokeWidth={1} width={24} height={24} />
      {session.data?.user ? (
        <button onClick={handleLogoutBtnClick}>
          <Typography type='body3' className='pr-5 pl-4 text-white'>
            Logout
          </Typography>
        </button>
      ) : (
        <button onClick={handleLoginBtnClick}>
          <Typography type='body3' className='pr-5 pl-4 text-white'>
            Login
          </Typography>
        </button>
      )}
    </div>
  );
};

export default NavBar;
