import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompleteListTrip from "../components/CompleteListTrip";
import styled from "styled-components";
import horizon from "../img/horizon.jpg";

const Main = styled.div `

  display:flex;
  flex-direction: column;

  align-items: center;
  background-image: url(${horizon});
  height: 100vh;
 

`
const Title = styled.h1 `
  font-family: Georgia, sans-serif;
  font-size: 3em;
  color: white;
  letter-spacing: -2px;

`

const StyledButtons = styled.button `
  border-radius: 40px;
  letter-spacing:2px;
  padding: 12px 36px;
  margin: 10px 0;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1em;
  :hover {
    background-color: gray;
  }

`
const TripInside = styled.div `
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  background-color: white;
  margin-bottom:3px;

`

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

    const params = useParams()

    const history = useHistory();

    const [trips, setTrips] = useState([]);

    useProtectedPage()

    const removeTrip = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips/${id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((response) => {
                alert('Trip deleted')
                history.push("/admin/trips/list")
            })
            .catch((error) => {
                alert('Something went wrong. Pleasy try again')
            })
    }

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
             //console.log(error.response)
         })
    }, [])

    
      
        useEffect(() => {
          axios
            .get(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips"
            )
            .then((res) => {
              //console.log(res.data.trips);
              setTrips(res.data.trips);
            });
        }, [trips]);
    
        const showTrips = trips.map((trip) => {
            return(
                <TripInside key={trip.id}>
                 <Link to={`/admin/trips/${trip.id}`}>{trip.name}</Link>
                 <button onClick={()=>removeTrip(trip.id)}>Delete</button>
                 </TripInside>
             
             )})

    const goToCreateTrip = () => {
        history.push("/admin/trips/create");
    };

    const goBack = () => {
        history.push("/")
    };

    return (
        <Main>
            <Title>AdminHomePage</Title>
            <StyledButtons onClick={goToCreateTrip}>Create new Trips</StyledButtons>
            <div>{showTrips}</div>
            <button onClick={goBack}>Go back</button>
               
            
        </Main>
    );
}