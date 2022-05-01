import { StateStorage } from 'zustand/middleware';

export const StorageDB: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const response = await window['dbAPI'].get('loadContent', name);
    return await response;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    window['dbAPI'].set('saveContent', { name, value });
    return;
  },
  removeItem: async (name: string): Promise<void> => {
    window['dbAPI'].delete('deleteContent', name);
    return;
  },
};
