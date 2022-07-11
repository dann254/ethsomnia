import { devtools, persist } from 'zustand/middleware';
import { StorageDB } from './StorageDB';

let contractCollections: any = (set) => ({
  Collections: [],
  addCollection: (collection) =>
    set((state) => ({
      Collections: [
        collection,
        ...state.Collections.filter((el) => {
          return el.id != collection.id;
        }),
      ],
    })),
  removeCollection: (collectionId) =>
    set((state) => ({
      Collections: [
        ...state.Collections.filter((el) => {
          return el.id != collectionId;
        }),
      ],
    })),
});

contractCollections = devtools(
  persist(contractCollections, {
    name: 'Collection_storage',
    getStorage: () => StorageDB,
  })
);

export default contractCollections;
