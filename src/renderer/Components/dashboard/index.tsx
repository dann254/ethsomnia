import Card from './cards';
import { DefaultDropdown } from '../shared/dropDowns';
import { ChevronDown } from 'react-feather';
import { FilePlus, FolderPlus } from 'react-feather';
import { DefaultModal } from '../shared/modals';
import { useState } from 'react';
import CreateCollection from '../shared/modals/createCollection';
import { useCollection } from 'renderer/Store';

let dropdownButton = (
  <div className="pl-4 pr-2 py-1 bg-primary rounded flex justify-between items-center space-x-2">
    <span>Create</span>
    <ChevronDown size={18} />
  </div>
);

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [createCollection, setCreateCollection] = useState<boolean>(false);

  const Collections = useCollection((state) => state.Collections);

  const options = [
    [
      {
        name: 'Single Contract',
        icon: <FilePlus size={16} strokeWidth={1.5} />,
        clickAction: () => openModal(false),
      },
      {
        name: 'Contract Collection',
        icon: <FolderPlus size={16} strokeWidth={1.5} />,
        clickAction: () => openModal(true),
      },
    ],
  ];

  const openModal = (isCollection) => {
    setCreateCollection(isCollection);
    setOpen(true);
  };

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
        <div className="flex grow  flex-wrap px-8">
          {Collections.map((collection, i) => {
            return (
              <Card
                cardInfo={{ ...collection }}
                isCollection={collection.contracts.length > 1 ? true : false}
              />
            );
          })}
        </div>
      </div>
      <DefaultModal
        title={createCollection ? 'New Contract Collection' : 'New Contract'}
        open={open}
        closeModal={closeModal}
      >
        <CreateCollection
          isCollection={createCollection}
          closeModal={closeModal}
        />
      </DefaultModal>
    </div>
  );
};

export default Dashboard;
