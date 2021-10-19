import React , {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import planeticon from "../img/planeticon.jpg";

const CardTrip = styled.div `
    display: flex;
    flex-direction: column;
    border: solid 3px black;
    padding: 5px;
    height: 220px;
    font-size: smaller
`

const Main = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

`

const IconLine = styled.div `
    height: 100px;
    background-image: url(${planeticon});
    background-repeat: repeat-x;
    background-position: center;
    background-color: transparent;
    border: none; width: 50%;
    margin: auto;
    margin-top: 5%; 
    margin-bottom: 5%; 

`

const StyledButtons = styled.button `
  border-radius: 40px;
  letter-spacing:2px;
  padding: 12px 36px;
  margin: 10px 0;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.5em;
  :hover {
    background-color: gray;
  }

`


export default function ListTripsPage() {

    const [trips,setTrips] = useState([]);

    const history = useHistory();

    const goToApplication = () => {
        history.push("/trips/application");
    };
    
    const goBack = () => {
        history.push("/")
      };

    useEffect(()=>{
       
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips")
         .then((response)=>{
             //console.log("Got trips", response.data.trips)
             setTrips(response.data.trips)
             
         }).catch((error)=>{
             //console.log(error.response)
         })
    }, [])

    const showTrips = trips.map((trip)=>{
        return (
            <CardTrip>
            <p><strong>Name:</strong> {trip.name}</p>
            <p><strong>Description:</strong> {trip.description}</p>
            <p><strong>Planet:</strong> {trip.planet}</p>
            <p><strong>Duration:</strong> {trip.durationInDays}</p>
            <p><strong>Date:</strong> {trip.date}</p>
            </CardTrip>
         )
    })


    return (
        <Main>
            <h1>List of Trips</h1>
            <IconLine/>
            
            {showTrips}
            <StyledButtons onClick={goToApplication}>Be part of the Journey! Click here</StyledButtons>
            <StyledButtons onClick={goBack}>Go Back</StyledButtons>

        </Main>
    );
}