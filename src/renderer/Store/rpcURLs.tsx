import { devtools, persist } from 'zustand/middleware';

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

rpcURLs = devtools(persist(rpcURLs, { name: 'RPCs' }));

export default rpcURLs;
