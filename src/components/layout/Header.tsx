import Image from 'next/image';
import Link from 'next/link';
import { themeColor } from '@/styles/theme';
import { cn } from '@/utils/cn';
import Typography from '../shared/atoms/Typography';
import { NotifIcon } from '../shared/icons';

const Header = () => {
  return (
    <header className={cn('w-full h-[60px] flex items-center justify-between z-10')}>
      <div className='flex items-center'>
        <Link href='/' className='px-5 border-r-2 border-coral'>
          <Image src='/images/six-logo.png' width={90} height={30} alt='Six Logo' priority />
        </Link>
        <Typography type='body1' className='px-4 text-coral'>
          Analytics
        </Typography>
      </div>
      <div className='flex items-center'>
        <NotifIcon stroke={themeColor.coral} width={28} height={28} />
        <Typography type='body2' className='pr-5 pl-4 text-coral'>
          Login
        </Typography>
      </div>
    </header>
  );
};

export default Header;
