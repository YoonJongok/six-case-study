import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import Typography from '../shared/atoms/Typography';
import { SixNotification } from '../shared/icons';

const Header = () => {
  return (
    <header
      className={cn(
        'w-full h-[var(--header-height)] flex items-center justify-between bg-navy border-b-2 border-b-white z-10'
      )}
    >
      <div className='flex items-center'>
        <Link href='/' className='px-5 border-r-2 border-white'>
          <Image src='/images/six-logo.png' width={90} height={30} alt='Six Logo' priority />
        </Link>
        <Typography type='title2' className='px-4 text-white font-normal'>
          Analytics
        </Typography>
      </div>
      <div className='flex items-center'>
        <SixNotification stroke={'white'} strokeWidth={1} width={24} height={24} />
        <Typography type='body3' className='pr-5 pl-4 text-white'>
          Login
        </Typography>
      </div>
    </header>
  );
};

export default Header;
