import { X } from 'react-feather';

export const NewContractInput: React.FC<any> = ({
  contract,
  contractIndex,
  contracts,
  handleChange,
  handleRemoveClick,
}) => {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm relative ">
      {contracts.length !== 1 && (
        <button
          className="absolute -right-2 -top-2 bg-danger rounded-full p-0.5 cursor-pointer z-20 text-[#FFFFFF]"
          onClick={() => handleRemoveClick(contractIndex)}
        >
          <X size={16} strokeWidth={4} />
        </button>
      )}
      <div className="relative  border border-b-0  border-blue-yonder/75 dark:border-white-default/25 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="name" className="block text-xs font-medium opacity-75">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 bg-[transparent] focus:ring-0 sm:text-sm"
          placeholder="Enter Contract Name"
          value={contract.name}
          onChange={(e) => handleChange(e, contractIndex)}
        />
      </div>
      <div className="relative  border border-b-0 border-blue-yonder/75 dark:border-white-default/25  px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="address"
          className="block text-xs font-medium opacity-75"
        >
          Addresses
        </label>
        <div className="relative border-t border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-4 border-t border-blue-yonder/75 dark:border-white-default/25">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900  bg-[#FFFFFF] dark:bg-[#2f363d]"
          >
            Rinkeby
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-[transparent]"
            placeholder="Jane Doe"
          />
        </div>
        <div className="relative border-t border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-4">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900  bg-[#FFFFFF] dark:bg-[#2f363d]"
          >
            Mainnet
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-[transparent]"
            placeholder="Jane Doe"
          />
        </div>
        <input
          type="text"
          name="address"
          id="address"
          className="block w-full border-0 p-0 bg-[transparent] focus:ring-0 sm:text-sm"
          placeholder="Enter Contract Address"
          value={contract.address}
          onChange={(e) => handleChange(e, contractIndex)}
        />
      </div>
      <div className="relative  border border-blue-yonder/75 dark:border-white-default/25 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="abi" className="block text-xs font-medium opacity-75">
          ABI
        </label>
        <textarea
          rows={3}
          name="abi"
          id="ABI"
          className="block w-full border-0 p-0 bg-[transparent] focus:ring-0 sm:text-sm"
          defaultValue={contract.abi}
          onChange={(e) => handleChange(e, contractIndex)}
        />
      </div>
    </div>
  );
};

export const BasicInput: React.FC<any> = ({
  inputLabel,
  inputName,
  placeHolder,
  inputType,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <label
          htmlFor={inputName}
          className="block text-sm font-medium text-gray-700"
        >
          {inputLabel}
        </label>
      </div>
      <div className="mt-1">
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          className="shadow-sm bg-[transparent] focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeHolder}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
