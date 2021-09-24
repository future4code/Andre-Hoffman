import React from 'react';
import Fill from './Components/Fill';
import List from './Components/List';
import styled from 'styled-components';

export default class App extends React.Component {
  state = {
    auxScreen : "fill"
  }

  changeAuxScreen = () =>{
    if(this.state.auxScreen==="fill"){
      return <Fill goToListPage={this.goToListPage}/>
    }else{
      return <List goToFillPage={this.goToFillPage} />
    }
  }

  goToFillPage = () => {
    this.setState({auxScreen: "fill"})
  }

  goToListPage = () => {
    this.setState({auxScreen: "list"})
  }

  render(){
    return(
      <div>

        {this.changeAuxScreen()}
      </div>
    )
  }
}

