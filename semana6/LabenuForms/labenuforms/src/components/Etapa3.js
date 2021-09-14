import React from 'react';
// import Etapa1 from './components/Etapa1.js';
// import Etapa2 from './components/Etapa1';
// import Final from "./components/Final.js";
import styled from 'styled-components';

export default class Etapa3 extends React.Component {
    render() {
       
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h2>5-Por que você não terminou um curso de graduação?</h2>
                <input type="text"></input>
                <h2>6-Você fez algum curso complementar?</h2>
                <select  onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de Inglês</option>
                                      
        
                </select>

                



            </div>
        );
    }
}