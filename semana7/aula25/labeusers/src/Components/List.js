import React from 'react';
import Fill from './Fill';
import axios from "axios";
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

const Cont2 = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    border: solid 3px black;
    border-radius: 100px;
    padding:20px;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`


export default class List extends React.Component {

    state = {
        people: []
    }

    componentDidMount(){
        this.showList()
    }

    showList = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
        
        axios.get(url,  {
            headers : {
                Authorization: "andre-hoffman-maryam"
            }})
        .then((answer)=>{
            this.setState({people: answer.data})
        })
        .catch((error)=>{
            alert("Something went wrong")

        })
        
    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`  
        axios.delete(url, {
            headers: {
                Authorization: "andre-hoffman-maryam"
            }
        })
        .then((answer)=>{
            alert("You deleted")
            this.showList()
        })
        .catch((error)=>{
            alert("Something went wrong")
        })
    
    }

  render(){
      const finalList = this.state.people.map((each)=>{
          return (
            <Cont2 key={each.id}>
                {each.name} 
                <Button onClick={()=>this.deleteUser(each.id)}>X</Button>
            </Cont2>
          )
      })
    return(
      <Cont>
        <Button onClick ={this.props.goToFillPage}>Go to Fill Page</Button> 
        <h2>List of Users:</h2>
        {finalList}
      </Cont>
    )
  }
}


