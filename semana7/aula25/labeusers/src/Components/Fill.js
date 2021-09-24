import React from 'react';
import List from './List';
import axios from "axios"
import styled from 'styled-components';

const Cont = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    border: solid 3px black;
    border-radius: 100px;
    margin-left: auto;
    margin-right: auto;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default class Fill extends React.Component {
    state = {
        name: "",
        email: ""
    }

    nameFill = (event) => {
        this.setState({name: event.target.value })
    }

    emailFill = (event) => {
        this.setState({email: event.target.value })
    }

    completeFill = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        
        axios.post(url, body, {
            headers : {
                Authorization: "andre-hoffman-maryam"
            }})
        .then((answer)=>{
            alert("User added")
        })
        .catch((error)=>{
            alert("Something went wrong")

        })
        
    }

  render(){
    return(
      <Cont>
        <Button onClick ={this.props.goToListPage}>Go to List Page</Button>  
        <h2>Please fill in the required informations</h2>
        <input placeholder = {"Name"} value={this.state.name} onChange={this.nameFill}></input>
        <input placeholder = {"email"} value={this.state.email} onChange={this.emailFill}></input>
        <Button onClick={this.completeFill}>Confirm</Button>
      </Cont>
    )
  }
}

