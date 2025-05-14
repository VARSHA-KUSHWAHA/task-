import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login"; // Correct spelling
import Home from "./components/Home"; // Correct spelling
import PrivateRoute from './components/PrivateRoute';
function App() {
  

  return ( 
    
      <Routes>
        <Route path="/" element={<Login />} />
         <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      </Routes>
    
  );
}

export default App;
