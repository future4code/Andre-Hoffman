import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';
import { Router } from './route/Router';

function App() {
  return (
    <div>
      {/* <h1>Início Projeto LabeX</h1> */}
      <Router />
    </div>
  );
}

export default App;
