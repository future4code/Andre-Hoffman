import React from 'react';
// import Etapa2 from './components/Etapa1';
// import Etapa3 from './components/Etapa2';
// import Final from "./components/Final.js";


export default class Etapa1 extends React.Component {

    

    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <h2>1-Qual o seu nome?</h2>
                <input type="text"></input>

                <h2>2-Qual a sua idade?</h2>
                <input type="text"></input>

                <h2>3-Qual seu email?</h2>
                <input type="text"></input>

                <h2>4-Qual sua escolaridade?</h2>
                <select onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>           

            </div>
        );
    }
}