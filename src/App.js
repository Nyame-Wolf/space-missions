import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Rockets />} /> */}
        <Route path="/missions" element={<Missions />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
