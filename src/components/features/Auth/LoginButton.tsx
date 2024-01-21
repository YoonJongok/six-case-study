'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import Typography from '@/components/shared/atoms/Typography';

interface LoginButtonProps {
  isHeader?: boolean;
}
const LoginButton = ({ isHeader }: LoginButtonProps) => {
  const signInCredential = async () => {
    await signIn('credentials', {
      username: 'kminchelle',
      password: '0lelplR',
      callbackUrl: '/analytics',
    });
  };

  if (isHeader) {
    <button onClick={signInCredential}>
      <Typography type='body3' className='text-white'>
        Login
      </Typography>
    </button>;
  }

  return (
    <button
      onClick={signInCredential}
      className='w-full flexRowCenter bg-coral py-3 text-white rounded-lg '
    >
      Log in
    </button>
  );
};

export default LoginButton;
