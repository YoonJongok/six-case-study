import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import NavBar from './NavBar';
import Typography from '../shared/atoms/Typography';

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
      <NavBar />
    </header>
  );
};

export default Header;
