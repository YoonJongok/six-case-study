import React from 'react';
import GeneralInfo from '@/components/features/Analytics/GeneralInfo';
import DoughnutChart from '@/components/shared/DoughnutChart';
import OverviewCard from '@/components/shared/OverviewCard';
import Typography from '@/components/shared/atoms/Typography';

const Analytics = () => {
  return (
    <div className='w-full flexCol px-10 py-4 gap-6 overflow-auto'>
      <Typography type='title1' className='capitalize'>
        Analytics overview
      </Typography>
      <section className='grid grid-cols-3 gap-6 items-center'>
        <GeneralInfo />
        <OverviewCard title='Color ratio (Doughnut chart)'>
          <DoughnutChart />
        </OverviewCard>
        <GeneralInfo />
      </section>
    </div>
  );
};

export default Analytics;
