import { Combo } from '../shared/inputs/basicCombo';
import { Plus, Save } from 'react-feather';
import { useState } from 'react';
import { useRPC } from 'renderer/Store';
import { Trash } from 'react-feather';

interface InetworkRPC {
  name: string;
  RPCurl: string;
  chainId: number;
}

const RPCView: React.FC<InetworkRPC> = (props) => {
  const { name, RPCurl, chainId } = props;
  const [edit, showEdit] = useState<boolean>(false);
  const [rpcURl, setRPCurl] = useState<string>(RPCurl);

  const addRPC = useRPC((state) => state.addRPC);
  const removeRPC = useRPC((state) => state.removeRPC);

  const editRPC = async () => {
    await addRPC({
      chainId: chainId,
      name: name,
      RPCurl: rpcURl,
    });
    showEdit(!edit);
  };

  const deleteRPC = async () => {
    await removeRPC(chainId);
  };

  return (
    <li key={chainId} className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate">
            {name}
          </div>
          <div
            className={`text-sm text-primary/95 break-words ${
              edit ? 'hidden' : ''
            }`}
          >
            {RPCurl}
          </div>
          <div className={`mt-1 bg-transparent ${!edit ? 'hidden ' : ''}`}>
            <textarea
              rows={3}
              name="RPCurl"
              id="RPCurl"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full bg-[transparent] border-gray-300 rounded"
              defaultValue={RPCurl}
              onChange={(e) => setRPCurl(e.target.value)}
            />
          </div>
        </div>
        <div className="space-x-2 flex items-center">
          <a
            onClick={() => editRPC()}
            className={`inline-flex items-center cursor-pointer shadow-sm px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full text-gray-700 bg-primary hover:bg-gray-50 ${
              !edit ? 'hidden ' : ''
            }`}
          >
            save
          </a>
          <a
            onClick={() => showEdit(!edit)}
            className={`inline-flex items-center cursor-pointer shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 ${
              edit ? 'hidden ' : ''
            }`}
          >
            edit
          </a>
          <a
            onClick={() => deleteRPC()}
            className={`inline-flex items-center cursor-pointer shadow-sm px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full bg-danger/50 py-1`}
          >
            <Trash size={16} />
          </a>
        </div>
      </div>
    </li>
  );
};

export default RPCView;
