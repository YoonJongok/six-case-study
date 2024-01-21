import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface ProfileMenuProps {
  image?: string;
}

const ProfileMenu = ({ image }: ProfileMenuProps) => {
  const handleLogoutBtnClick = async () => {
    await signOut();
  };

  return (
    <Menu as='div' className='relative'>
      <div>
        <Menu.Button className='py-1 w-8 h-8 inline-flex  justify-center  bg-black/20 rounded-full'>
          <Image
            src={image || '/images/six-logo.png'}
            width={80}
            height={80}
            alt='User image'
            priority
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right divide-y border border-navy rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogoutBtnClick}
                  className={`${
                    active ? 'bg-navy text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
