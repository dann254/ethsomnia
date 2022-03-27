import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './Components/nav';
import Dashboard from './Components/dashboard';
import Workspace from './Components/workspace';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </Router>
  );
}
