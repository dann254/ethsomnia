import icon from '../../../../assets/icon.svg';
import React, { useState } from 'react';
import { chainList, Chains } from '../../helpers/eth-chains';
import { Sun, Moon, Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { DefaultModal } from '../shared/modals';
import AppSettings from './settings';

const Nav: React.FC = () => {
  const [darkMode, toggleTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  const evmChains: Chains = chainList;

  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between h-10 px-3 py-1 border-b border-blue-yonder dark:border-white-default/25 fixed w-full text-sm">
      <Link to="/">
        <button className="flex space-x-2 items-center">
          <img src={icon} alt="" width="30px" />
          <span>Ethsomnia</span>
        </button>
      </Link>

      <div className="flex space-x-6">
        <button className="" onClick={() => setOpen(true)}>
          <Settings size={18} strokeWidth={1.5} />
        </button>
        <button className="px-4 border border-blue-yonder/75 dark:border-white-default/25 rounded">
          Connect
        </button>
        <button className="h-auto" onClick={toggleTheme}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <DefaultModal title={'Settings'} open={open} closeModal={closeModal}>
        <AppSettings />
      </DefaultModal>
    </div>
  );
};

export default Nav;
