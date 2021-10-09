import React, {useState} from 'react'
import styled from "styled-components"
import logo from './logo.svg';
import './App.css';
import TesteAPI from './Components/TesteAPI';
import BarraSuperior from './Components/BarraSuperior';
import BarraBotoes from './Components/BarraButoes';

function App() {
  return (
    <>
      <BarraSuperior/>
      <TesteAPI />
      <BarraBotoes/>
    </>
  );
}

export default App;
