/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface DropdownOptions {
  name: string;
  clickAction?: () => void;
  icon?: any;
}
interface DropdownSections extends Array<DropdownOptions> {}

interface DropdownProps {
  toggleButton: any;
  options: DropdownSections[];
  children?: any;
}

export const DefaultDropdown: React.FC<DropdownProps> = (props) => {
  const { toggleButton, options } = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">{toggleButton}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black dark:ring-white-default/25 ring-opacity-5 divide-y divide-gray-100 focus:outline-none bg-[#FFFFFF] dark:bg-[#2f363d] z-10">
          {options.map((section) => (
            <div className="py-1">
              {section.map((item) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={item.clickAction}
                      className={`
                   ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                    group flex items-center px-4 py-2 text-sm space-x-2
                  `}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
