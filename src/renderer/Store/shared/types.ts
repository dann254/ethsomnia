// import { State } from 'zustand';

export enum TransactionStatus {
  PENDING = 'PENDING',
  SENDING = 'SENDING',
  SENT = 'SENT',
  TRANSACTIONHASH = 'TRANSACTIONHASH',
  RECEIPT = 'RECEIPT',
  CONFIRMATION = 'CONFIRMATION',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface IResponse {
  preview: any;
  events: any;
  raw: any;
  timeline: any;
}

export interface IRequest {
  functionName: string;
  args: any;
}

export interface ITransaction {
  status: TransactionStatus;
  isSimulation: boolean;
  chainId: number;
  request: IRequest;
  response: IResponse;
  createdAt: number;
  completedAt: number;
}

export interface IContractAdresses {
  chainId: number;
  address: string;
}

export interface IContract {
  name: string;
  addresses: IContractAdresses[];
  abi: any[];
}

export interface ICollection {
  id: string;
  name: string;
  contracts: IContract[];
  createdAt: number;
  requestHistory: ITransaction[];
}
