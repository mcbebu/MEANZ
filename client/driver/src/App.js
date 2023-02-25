import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Dummy from './components/DummyComponent';

function App() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Dummy />} />
                <Route exact path="/:driverId" element={<Main />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
