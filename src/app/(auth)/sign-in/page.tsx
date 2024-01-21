import Image from 'next/image';
import { redirect } from 'next/navigation';
import LoginButton from '@/components/features/Auth/LoginButton';
import Typography from '@/components/shared/atoms/Typography';
import { getServerAuthSession } from '@/utils/authOptions';

const SignInPage = async () => {
  const session = await getServerAuthSession();

  if (session) {
    return redirect('/analytics');
  }

  return (
    <main className='flexColCenter bg-white'>
      <div className='flexCol items-start w-[430px] p-[36px] gap-10 shadow-lg'>
        <Image src='/images/six-logo-original.png' width={90} height={25} alt='Six Logo' priority />
        <div className='w-full flexCol items-start '>
          <Typography type='title1' className='font-normal'>
            Hello
          </Typography>
          <Typography type='body1' className='font-normal'>
            Please login to gain access to your SIX Services
          </Typography>
        </div>
        <LoginButton />
      </div>
    </main>
  );
};

export default SignInPage;
