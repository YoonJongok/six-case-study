import React from 'react';
import OverviewCard from '@/components/shared/OverviewCard';
import Typography from '../../shared/atoms/Typography';

const GeneralInfo = () => {
  return (
    <OverviewCard title={'General Information'}>
      {generalInfoConfig.map((config) => {
        return (
          <div key={config.label} className='flexCol gap-1'>
            <Typography type='body1' className='capitalize font-normal'>
              {config.label}
            </Typography>
            <div>
              <Typography type='title2' className='capitalize'>
                {config.value}
              </Typography>
              {config?.subInfo && (
                <div className='max-w-[270px] flex justify-between'>
                  {config.subInfo.map((subInfoConfig, i) => {
                    return (
                      <div key={i} className='flex items-center gap-1'>
                        <Typography type='caption2' className='capitalize'>
                          {subInfoConfig.label}:
                        </Typography>
                        <Typography type='caption2' className='capitalize'>
                          {subInfoConfig.value}
                        </Typography>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </OverviewCard>
  );
};

export default GeneralInfo;

type GeneralInfoConfig = {
  label: string;
  value: string;
  subInfo?: GeneralInfoConfig[];
};

const generalInfoConfig = [
  {
    label: 'Pipeline volume',
    value: '$1,000,000 (100%)',
    subInfo: [
      {
        label: 'WAW',
        value: '$900,000 (90%)',
      },
      {
        label: 'NAM',
        value: '$100,000 (10%)',
      },
    ],
  },
  {
    label: 'Loan units',
    value: '2356 (100%)',
  },
  {
    label: 'Average loan size',
    value: '$$$ (100%)',
  },
] satisfies GeneralInfoConfig[];
