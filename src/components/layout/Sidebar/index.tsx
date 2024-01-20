import React from 'react';
import CollapseSection from './CollapseSection';
import SideBarLink from './SidebarLink';

export type SideBar = {
  name: string;
  href: string;
  nested?: SideBar[];
};

const sideBarConfig = [
  {
    name: 'Search',
    href: '/search',
  },
  {
    name: 'Overview',
    href: '/',
    nested: [
      {
        name: 'Overview1',
        href: '/',
      },
      {
        name: 'Overview2',
        href: '/',
      },
      {
        name: 'Overview3',
        href: '/',
      },
    ],
  },
] satisfies SideBar[];

const Sidebar = () => {
  return (
    <div className='min-h-screen-minus-header h-full  w-[220px] flexCol items-center shadow-md'>
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
