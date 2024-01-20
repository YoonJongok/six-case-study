import { PropsWithChildren } from 'react';
import Typography from './atoms/Typography';

interface OverviewCardProps {
  title: string;
}

const OverviewCard = ({ title, children }: PropsWithChildren<OverviewCardProps>) => {
  return (
    <article className='w-full flexCol items-start gap-2'>
      <Typography type='title2' className='capitalize'>
        {title}
      </Typography>
      <div className='w-full min-w-[340px] max-w-[430px] min-h-[325px] flexCol gap-6 py-6 px-10 bg-white rounded-lg'>
        {children}
      </div>
    </article>
  );
};

export default OverviewCard;
