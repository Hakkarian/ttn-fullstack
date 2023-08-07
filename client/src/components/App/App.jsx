import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from '../AppBar';
import Home from '../Home';
import OtherPage from '../OtherPage';

const App = () => {
  return (
      <Router>
          <AppBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/other" element={<OtherPage />} />
          </Routes>
    </Router>
  )
}

export default App