import Cards from './cards';
import { DefaultDropdown } from '../shared/dropDowns';
import { ChevronDown } from 'react-feather';
import { FilePlus, FolderPlus } from 'react-feather';
import { DefaultModal } from '../shared/modals';
import { useState } from 'react';

let dropdownButton = (
  <div className="pl-4 pr-2 py-1 bg-primary rounded flex justify-between items-center space-x-2">
    <span>Create</span>
    <ChevronDown size={18} />
  </div>
);

const openModal = () => {};

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const options = [
    [
      {
        name: 'Single Contract',
        icon: <FilePlus size={16} strokeWidth={1.5} />,
        clickAction: () => setOpen(true),
      },
      {
        name: 'Contract Collection',
        icon: <FolderPlus size={16} strokeWidth={1.5} />,
        clickAction: () => setOpen(true),
      },
    ],
  ];

  const closeModal = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col pb-2 pt-10 text-sm h-screen overflow-hidden">
      <div className="overflow-scroll">
        <div className="flex justify-between w-full mb-8 mt-8 px-8 ">
          <span className="text-2xl">Dashboard</span>
          <div>
            <DefaultDropdown toggleButton={dropdownButton} options={options} />
          </div>
        </div>
        <div className="flex grow  flex-wrap justify-center px-2">
          <Cards cardInfo={{ name: 'Bank Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'USDC contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
        </div>
      </div>
      <DefaultModal
        title={'Create Collection'}
        open={open}
        closeModal={closeModal}
      >
        <div className="">Create</div>
      </DefaultModal>
    </div>
  );
};

export default Dashboard;
