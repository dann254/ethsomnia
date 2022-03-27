import icon from '../../../../assets/icon.svg';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Settings } from 'react-feather';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const toggleTheme = async () => {
    await window.darkMode.toggle('dark');
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    } else {
      setDarkTheme(true);
    }
  }, []);

  return (
    <div className="flex justify-between h-10 px-3 py-1 border-b border-blue-yonder dark:border-white-default/25">
      <Link to="/">
        <button className="flex space-x-2 items-center">
          <img src={icon} alt="" width="30px" />
          <span>Ethsomnia</span>
        </button>
      </Link>

      <div className="flex space-x-6">
        <button className="">
          <Settings size={18} strokeWidth={1.5} />
        </button>
        <button className="px-4 border border-blue-yonder/75 dark:border-white-default/25 rounded">
          Connect
        </button>
        <button className="h-auto" onClick={toggleTheme}>
          {darkTheme ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Nav;
