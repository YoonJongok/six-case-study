import LoginButton from '@/components/features/Auth/LoginButton';
import { SixNotification } from '@/components/shared/icons';
import { getServerAuthSession } from '@/utils/authOptions';
import ProfileMenu from './ProfileMenu';

const NavBar = async () => {
  const session = await getServerAuthSession();
  console.log({ session });
  return (
    <div className='flex items-center gap-3 pr-5'>
      {!session?.user ? (
        <LoginButton isHeader />
      ) : (
        <>
          <SixNotification stroke={'white'} strokeWidth={1} width={24} height={24} />
          <ProfileMenu image={session.user.image} />
        </>
      )}
    </div>
  );
};

export default NavBar;
