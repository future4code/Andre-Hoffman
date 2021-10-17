import React , {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CardTrip = styled.div `
    display: flex;
    flex-direction: column;
    border: solid 3px black;
    padding: 5px;
    height: 220px;
    font-size: smaller
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
            <p>Name: {trip.name}</p>
            <p>Description: {trip.description}</p>
            <p>Planet: {trip.planet}</p>
            <p>Duration: {trip.durationInDays}</p>
            <p>Date: {trip.date}</p>
            </CardTrip>
         )
    })


    return (
        <div>
            <h1>ListTripsPage</h1>
            
            {showTrips}
            <button onClick={goToApplication}>Be part of the Journey! Click here</button>
            <button onClick={goBack}>Go Back</button>

        </div>
    );
}