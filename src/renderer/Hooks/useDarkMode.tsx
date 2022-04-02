import { useThemeStore } from '../Store';

export const useDarkMode = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const darkMode = useThemeStore((state) => state.darkMode);

  const toggleTheme = async () => {
    await window.darkMode.toggle('dark');
    setTheme();
  };

  return [darkMode, toggleTheme] as const;
};
