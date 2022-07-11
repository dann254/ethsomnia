import create from 'zustand';
import themeStore from './theme';
import rpcURLs from './rpcURLs';
import contractCollections from './contractCollections';

export const useThemeStore = create(themeStore);
export const useRPC = create(rpcURLs);
export const useCollection = create(contractCollections);

export { _Contract, _Collection } from './shared/defaults';
export { ICollection, IContract } from './shared/types';
