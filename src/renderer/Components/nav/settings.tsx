import { Combo } from '../shared/inputs/basicCombo';
import { Plus, Save } from 'react-feather';
import { useMemo, useState } from 'react';
import RPCView from './rpcView';
import { useRPC } from 'renderer/Store';

const AppSettings: React.FC = () => {
  const [addNew, showAddNew] = useState<boolean>(false);
  const [query, setQuery] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<any>();
  const [rpcURl, setRPCurl] = useState<string>('');
  const [key, setKey] = useState<number>(0);

  const networks = useRPC((state) => state.RPCs);
  const addRPC = useRPC((state) => state.addRPC);

  const updateAddState = async () => {
    await setSelectedNetwork({});
    await setRPCurl('');
    setKey(key + 1);
    showAddNew(!addNew);
  };

  const add = async () => {
    await addRPC({
      chainId: selectedNetwork.chainId,
      name: selectedNetwork.name,
      RPCurl: rpcURl,
    });
    updateAddState();
  };

  const filteredNetworks = useMemo(
    () =>
      query
        ? networks.filter((v) =>
            v.name.toLowerCase().includes(query.toLowerCase())
          )
        : networks,
    [networks, query]
  );

  return (
    <div className="grow space-y-4 h-full overflow-y-scroll">
      <div className="flex items-center justify-between border-b border-blue-yonder/75 dark:border-white-default/25 pb-2">
        <h2>RPC URLS</h2>
        <button
          className={`flex px-2 py-1 items-center  text-sm space-x-2 border border-blue-yonder/75 dark:border-white-default/25 rounded ${
            addNew ? 'hidden' : ''
          }`}
          onClick={() => showAddNew(!addNew)}
        >
          <span>Add RPC url</span> <Plus size={16} />
        </button>
      </div>
      <div
        className={`w-[50%] border-b border-blue-yonder/75 dark:border-white-default/25 ${
          !addNew ? 'hidden' : ''
        }`}
      >
        <div className="mb-2  pl-2">
          Select Network
          <Combo key={key} returnSelected={setSelectedNetwork} />
        </div>
        <div className="mb-2">
          <label htmlFor="comment" className="block text-sm font-medium">
            RPC url
          </label>
          <div className="mt-1 bg-transparent">
            <textarea
              rows={3}
              name="RPCurl"
              id="RPCurl"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full bg-[transparent] border-gray-300 rounded"
              defaultValue={''}
              onChange={(e) => setRPCurl(e.target.value)}
              key={key}
            />
          </div>
          <div className="flex flex-row space-x-2">
            <button
              className="flex  items-center space-x-2 px-2 bg-primary py-1 border border-blue-yonder/75 dark:border-white-default/25 rounded mt-2"
              onClick={() => {
                selectedNetwork?.chainId && rpcURl ? add() : null;
              }}
              disabled={!selectedNetwork?.chainId && !rpcURl ? true : false}
            >
              <span>Save</span> <Save size={16} />
            </button>
            <button
              className="flex  items-center space-x-2 px-2 bg-tetiary/50 py-1 border border-blue-yonder/75 dark:border-white-default/25 rounded mt-2"
              onClick={() => updateAddState()}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div>
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 ">
            <label
              htmlFor="search"
              className="absolute -top-2 z-10 left-2 -mt-px inline-block px-1 bg-[#FFFFFF] dark:bg-[#2f363d] text-xs font-medium text-gray-900"
            >
              Search
            </label>
            <input
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              name="search"
              id="search"
              className="w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-[transparent]"
              placeholder=""
            />
          </div>
        </div>
        <div className="mt-6 ">
          <ul role="list" className=" divide-y divide-gray-200 ">
            {filteredNetworks.map((network) => (
              <RPCView
                chainId={network.chainId}
                name={network.name}
                RPCurl={network.RPCurl}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
