'use client';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Typography from '@/components/shared/atoms/Typography';
import { SixChevronDown, SixChevronUp } from '@/components/shared/icons';
import { NestedSideBar } from '.';
import SideBarLink from './SidebarLink';

interface NestedSidebarLinkProps {
  nestedLinkTitle: string;
  nested: NestedSideBar[];
}

const CollapseSection = ({ nestedLinkTitle, nested }: NestedSidebarLinkProps) => {
  return (
    <Disclosure
      as='div'
      className='w-full flexCol items-center gap-2 py-4 px-4 border-b-gray-300 border-b'
    >
      {({ open }) => (
        <>
          <Disclosure.Button className='w-full flex justify-between items-center mb-1'>
            <Typography type='title2' className='text-navy font-light'>
              {nestedLinkTitle}
            </Typography>
            <>
              {open ? (
                <SixChevronUp width={30} className='stroke-slate-500' />
              ) : (
                <SixChevronDown width={30} className='stroke-slate-500' />
              )}
            </>
          </Disclosure.Button>
          <Transition
            show={open}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-85 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
            className={'self-start pl-5'}
          >
            <div className='flexCol space-y-4'>
              {nested.map((nested, i) => {
                return (
                  <Disclosure.Panel key={i}>
                    <SideBarLink name={nested.name} href={nested.href} isNestedLink />
                  </Disclosure.Panel>
                );
              })}
            </div>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default CollapseSection;
