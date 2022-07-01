import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './Calendar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
