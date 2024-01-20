import { PropsWithChildren } from 'react';

const OverviewCard = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full min-w-[340px] max-w-[430px] flexCol gap-6 py-6 px-10 bg-white rounded-lg'>
      {children}
    </div>
  );
};

export default OverviewCard;
