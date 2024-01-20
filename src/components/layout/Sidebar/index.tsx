import React from 'react';
import CollapseSection from './CollapseSection';
import SideBarLink from './SidebarLink';

export type NestedSideBar = {
  name: string;
  href: string;
};

export type SideBar = {
  name: string;
  href?: string;
  nested?: NestedSideBar[];
};

const sideBarConfig = [
  {
    name: 'Analytics',
    href: '/',
  },
  {
    name: 'Search',
    href: '/search',
  },
  {
    name: 'Specific',
    href: '/overview',
    nested: [
      {
        name: 'Overview1',
        href: '/',
      },
      {
        name: 'Overview2',
        href: '/',
      },
    ],
  },
] satisfies SideBar[];

const Sidebar = () => {
  return (
    <div className='min-h-screen-minus-header h-full  w-[220px] flexCol items-center shadow-md bg-white'>
      {sideBarConfig.map((config) => {
        if (config.nested) {
          return (
            <CollapseSection
              key={config.name}
              nestedLinkTitle={config.name}
              nested={config.nested}
            />
          );
        }

        return (
          <SideBarLink key={config.name} name={config.name} href={config.href} className='py-4' />
        );
      })}
    </div>
  );
};

export default Sidebar;
