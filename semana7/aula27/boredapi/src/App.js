import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Line = styled.hr `
  border-top: 5px dotted red;

`


export default class App extends React.Component {

  state = {
    activities: []
  };

  componentDidMount(){
    this.showActivity();
  }
  
  showActivity =(event) => {

    axios.get(`https://www.boredapi.com/api/activity?participants=${event.value.target}`)
    .then((answer)=>{
      this.setState({activities: answer.data})
    })
    .catch((error)=>{
      console.log(error)
    });
  }

  render() {
    const numberParticipants = [1,2,3,4,5,6,7,8];
    const numberList = numberParticipants.map((each)=>{
      return (
        <option key={each} value={Number(each)}>{each}</option>
      )
    })
    console.log(this.state.activities)
    return (
      <div>
        Hello
        <select onChange={this.showActivity}>
          <option>Choose the number of participants</option>
          {numberList}
        </select> 
        {/* <Line/>
        <h2>Activities</h2> */}
      </div>
      
    );
  }
  
}


