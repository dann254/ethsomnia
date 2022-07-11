import { IContract, ITransaction } from './types';

export const _Contract = Object.freeze({
  name: '',
  addresses: [],
  abi: [],
});

export const _Collection = Object.freeze({
  id: '',
  name: '',
  contracts: [],
  createdAt: new Date().getTime(),
  requestHistory: [],
});
