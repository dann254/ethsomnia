import { devtools, persist } from 'zustand/middleware';

let themeStore: any = (set) => ({
  darkMode: true,
  setTheme: () => set((state) => ({ darkMode: !state.darkMode })),
});

themeStore = devtools(persist(themeStore, { name: 'selected-theme' }));

export default themeStore;
