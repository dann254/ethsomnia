import { Plus, Save } from 'react-feather';
import { useEffect, useMemo, useState } from 'react';
import { useCollection } from 'renderer/Store';
import { ICollection, IContract, _Collection, _Contract } from 'renderer/Store';
import { NewContractInput, BasicInput } from '../inputs/textInput';
import { MultiselectDropdown } from '../dropDowns/multiselectDropdown';
import { v4 as uuidv4 } from 'uuid';
import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
// import produce from 'immer';

interface ICreateCollection {
  isCollection: boolean;
  closeModal: () => void;
}

const CreateCollection: React.FC<ICreateCollection> = (props) => {
  const { isCollection = false, closeModal } = props;

  const [collection, setCollection] = useState<ICollection>({ ..._Collection });
  const [collectionName, setCollectionName] = useState<string>('');
  const [contracts, setContracts] = useState<IContract[]>([{ ..._Contract }]);
  const [error, setError] = useState<boolean>(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleCollectionNameChange = (e) => {
    const { value } = e.target;
    setCollectionName(value);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...contracts];
    list[index][name] = value;
    setContracts(list);
    setCollection({ ...collection, contracts: list });

    if (!isCollection && name === 'name') setCollectionName(value);
  };

  const handleRemoveClick = (index) => {
    const list = [...contracts];
    list.splice(index, 1);
    setContracts(list);
    setCollection({ ...collection, contracts: list });
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setContracts([...contracts, { ..._Contract }]);
  };
  // const networks = useCollection((state) => state.RPCs);
  const addCollection = useCollection((state) => state.addCollection);

  const saveCollection = async () => {
    await addCollection(collection);
    closeModal();
  };

  useEffect(() => {
    setCollection({ ...collection, name: collectionName });
  }, [collectionName]);

  useEffect(() => {
    setCollection({ ...collection, id: uuidv4() });
  }, []);

  return (
    <div className="flex flex-col grow space-y-4 h-full overflow-y-scroll pt-4">
      {/* collection info */}
      {isCollection && (
        <div className="w-full px-4">
          <BasicInput
            inputLabel={'Collection Name'}
            inputName={'collectionName'}
            placeHolder={'Enter collection name'}
            inputType={'text'}
            name="networks"
            handleChange={handleCollectionNameChange}
          />
        </div>
      )}
      <div className="w-full px-4">
        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Networks
          </label>
        </div>
        <div className="mt-1">
          <MultiselectDropdown options={options} />
        </div>
      </div>
      {/* contract */}
      {isCollection && <div className="w-full px-4">Contracts</div>}
      {contracts.map((x, i) => {
        return (
          <div className="flex flex-col w-full px-4">
            <NewContractInput
              contract={x}
              contractIndex={i}
              contracts={contracts}
              handleChange={handleInputChange}
              handleRemoveClick={handleRemoveClick}
            />
            {isCollection && (
              <div className="btn-box mt-2">
                {contracts.length - 1 === i && (
                  <button
                    className="flex px-2 py-1 items-center  text-sm space-x-2 border border-blue-yonder/75 dark:border-white-default/25 rounded"
                    onClick={handleAddClick}
                  >
                    <Plus size={16} strokeWidth={2} />
                    <span>Add Contract</span>
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
      <div className="flex space-x-6 self-end px-4">
        <button
          className="flex  items-center space-x-2 px-2 bg-primary py-1 border border-blue-yonder/75 dark:border-white-default/25 rounded mt-2"
          onClick={() => {
            !error ? saveCollection() : null;
          }}
          disabled={error ? true : false}
        >
          <span>Save</span> <Save size={16} />
        </button>
        <button
          className="flex  items-center space-x-2 px-2 bg-tetiary/50 py-1 border border-blue-yonder/75 dark:border-white-default/25 rounded mt-2"
          onClick={() => closeModal()}
        >
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default CreateCollection;
