
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddForm from './components/AddForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/add-movie' element={<AddForm/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
