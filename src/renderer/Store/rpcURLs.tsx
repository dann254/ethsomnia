import { devtools, persist } from 'zustand/middleware';
import { StorageDB } from './StorageDB';

let rpcURLs: any = (set) => ({
  RPCs: [],
  addRPC: (rpcURL) =>
    set((state) => ({
      RPCs: [
        rpcURL,
        ...state.RPCs.filter((el) => {
          return el.chainId != rpcURL.chainId;
        }),
      ],
    })),
  removeRPC: (chainId) =>
    set((state) => ({
      RPCs: [
        ...state.RPCs.filter((el) => {
          return el.chainId != chainId;
        }),
      ],
    })),
});

rpcURLs = devtools(
  persist(rpcURLs, {
    name: 'RPC_storage',
    getStorage: () => StorageDB,
  })
);

export default rpcURLs;
