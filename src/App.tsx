import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

const App:React.FC=()=> {
  return (
    <div className="App">
      <Toaster />
      <Home />
    </div>
  );
}

export default App;
