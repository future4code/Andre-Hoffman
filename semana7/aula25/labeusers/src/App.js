import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from "axios"

 
const headers = {
  headers: {
        Authorization: "andre-hoffman-maryam"
  }
} 
  

class App extends React.Component{

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url,headers)
    .then((res)=>{console.log(res.data)})
    .catch((err)=>{console.log(err.response)})
  }

  

  render(){
    return (
    
      <div>
        tentativa
        <input />
        <button>Enviar</button>

        
      </div>
      
    );
  }
}

export default App;
