import create from 'zustand';
import themeStore from './theme';

export const useThemeStore = create(themeStore);
