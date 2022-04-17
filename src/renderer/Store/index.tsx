import create from 'zustand';
import themeStore from './theme';
import rpcURLs from './rpcURLs';

export const useThemeStore = create(themeStore);
export const useRPC = create(rpcURLs);
