import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import CompleteListTrip from "../components/CompleteListTrip";
import styled from "styled-components";

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token === null) {
            console.log("Não está logado")
            history.push('/login')
        }
    }, [])
}

export default function AdminHomePage() {

    const history = useHistory();

    const [trips, setTrips] = useState([]);

    useProtectedPage()

    useEffect(()=>{
        const token = localStorage.getItem(
            'token'
        )
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trip/6AF296jholXttVSwuHNB",{ 
        headers: {
            auth: token
        }})
         .then((response)=>{
            //  console.log(response.data)
         }).catch((error)=>{
             console.log(error.response)
         })
    }, [])

    
      
        useEffect(() => {
          axios
            .get(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips"
            )
            .then((res) => {
              console.log(res.data.trips);
              setTrips(res.data.trips);
            });
        }, []);
    
        const showTrips = trips.map((trip) => {
            return(
             <li key={trip.id}>{trip.name}</li>
             
             )})

    const goToCreateTrip = () => {
        history.push("/admin/trips/create");
    };

    const goBack = () => {
        history.push("/")
    };

    return (
        <div>
            <h1>AdminHomePage</h1>
            <button onClick={goToCreateTrip}>Create new Trips</button>
            <button onClick={goBack}>Go back</button>
            <div>{showTrips}</div>
               
            
        </div>
    );
}