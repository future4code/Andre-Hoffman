import React from 'react';
import Etapa1 from './components/Etapa1.js';
import Etapa2 from './components/Etapa2.js';
import Etapa3 from './components/Etapa3.js';
import Final from "./components/Final.js";
import styled from 'styled-components';


const ContPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center


`

export default class App extends React.Component {
  state = {
    etapa:1,
  };
  
  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
        
      
      case 2:
        return <Etapa2 />;
        

      case 3:
        return <Etapa3 />;
        

      case 4:
        return <Final />;
      
      default:
        return("tivemos problemas!");
    }
  };

  estadoEtapa = () => {

    this.setState({etapa: this.state.etapa + 1})
  };

  

  render() {
    console.log(this.state.etapa)  ;
      return (
        <ContPrincipal>	
           
          {this.renderizaEtapa()}
          <button onClick={this.estadoEtapa}>Próxima etapa</button>
        </ContPrincipal>  
      )           
      
  }
}

 