import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './components/Register.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Allproducts from './components/Allproducts.js';
import Productdetails from './components/Productdetails.js';
import './App.css';


export const store = createContext();

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/allproducts" element={<Allproducts/>} />
            <Route path="/products/:id" element={<Productdetails/>} />
        
          </Routes>
        </BrowserRouter>
      </store.Provider>
    
    </div>
  );
}

export default App;