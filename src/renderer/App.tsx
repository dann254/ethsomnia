import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const toggleTheme = async () => {
    await window.darkMode.toggle();
  };
  return (
    <div className="bg-green-default dark:bg-orange-default">
      <img src={icon} alt="" width="30px" />
      <button className="text-green-300" onClick={toggleTheme}>
        change theme
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
