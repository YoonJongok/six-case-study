import Link from 'next/link';
import Typography from '@/components/shared/atoms/Typography';
import { cn } from '@/utils/cn';

interface SideBarLinkProps {
  name: string;
  href: string;
  isNestedLink?: boolean;
  className?: string;
}

const SideBarLink = ({ name, href, isNestedLink, className }: SideBarLinkProps) => {
  return (
    <Link href={href} className={cn('w-full border-b-gray-300', !isNestedLink && 'border-b px-4')}>
      {isNestedLink ? (
        <Typography type='body1' className='font-light'>
          {name}
        </Typography>
      ) : (
        <Typography type={'title2'} className={cn('text-navy font-light', className)}>
          {name}
        </Typography>
      )}
    </Link>
  );
};

export default SideBarLink;
