import { Folder, ChevronRight, ChevronDown } from 'react-feather';
import ContractFunction from './contractFunction';
import { Disclosure } from '@headlessui/react';

const ContractSection: React.FC = () => {
  const navigation = [
    {
      name: 'Send',
      stateMutability: 'view',
      isActive: true,
      inputs: [],
      outputs: [],
    },
    {
      name: 'USDC contract',
      icon: Folder,
      isActive: true,
      children: [
        {
          name: 'approve',
          stateMutability: 'nonpayable',
          isActive: false,
          inputs: [],
          outputs: [],
        },
        {
          name: 'balance',
          stateMutability: 'view',
          isActive: true,
          inputs: [],
          outputs: [],
        },
      ],
    },
    {
      name: 'Dai contract',
      icon: Folder,
      isActive: false,
      children: [
        {
          name: 'approve',
          stateMutability: 'payable',
          isActive: false,
          inputs: [],
          outputs: [],
        },
        {
          name: 'balance',
          stateMutability: 'view',
          isActive: false,
          inputs: [],
          outputs: [],
        },
      ],
    },
    {
      name: 'Dai Contract',
      icon: Folder,
      isActive: false,
      children: [
        {
          name: 'approve',
          stateMutability: 'pure',
          isActive: false,
          inputs: [],
          outputs: [],
        },
        {
          name: 'balance',
          stateMutability: 'view',
          isActive: false,
          inputs: [],
          outputs: [],
        },
      ],
    },
  ];

  return (
    <div className=" w-full pt-3 text-black/50 dark:text-white-default/50">
      {/* <ContractFunction name="view" stateMutability="view" isActive={false} /> */}
      <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        {navigation.map((item) =>
          !item.children ? (
            <ContractFunction
              name={item.name}
              stateMutability={item.stateMutability}
              isActive={item.isActive}
            />
          ) : (
            <Disclosure as="div" key={item.name} className="w-full">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex space-x-2 items-center w-full py-1 hover:bg-black/25 dark:hover:bg-white-off-white/25  pl-3 pr-1 cursor-default w-max ${
                      item.isActive
                        ? 'bg-gray-100 text-black dark:text-white-default '
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Folder size={16} strokeWidth={2} />
                    <span className="flex-1 text-left">{item.name}</span>
                    <span>
                      {open ? (
                        <ChevronDown size={18} strokeWidth={2} />
                      ) : (
                        <ChevronRight size={18} strokeWidth={2} />
                      )}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    {item.children.map((subItem) => (
                      <ContractFunction
                        name={subItem.name}
                        stateMutability={subItem.stateMutability}
                        isActive={subItem.isActive}
                        isChild={true}
                      />
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        )}
      </nav>
    </div>
  );
};

export default ContractSection;
