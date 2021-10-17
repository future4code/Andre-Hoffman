import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";

const CardTrip = styled.div `
    display: flex;
    flex-direction: column;
    border: solid 3px black;
    padding: 5px;
    font-size: smaller
`

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token === null) {
           // console.log("Não está logado")
            history.push('/login')
        }
    }, [])
}

export default function TripDetailsPage() {

    const [tripDetail,setTrip]=useState()

    const params = useParams()

    useProtectedPage()

    useEffect(()=>{

        
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trip/6AF296jholXttVSwuHNB",{ 
        headers: {
            auth: localStorage.getItem('token')
        }})
         .then((response)=>{
             //console.log(response.data)
         }).catch((error)=>{
             //console.log(error.response)
         })
    }, [])

    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trip/${params.id}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((response)=>{
            
            setTrip(response.data.trip)
            //console.log("response: ", response.data.trip)
            
            
            
        })
    }, [])

    
    const processRequest = (candidateId, approve) =>{
        const body = { approve: approve }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips/${params.id}/candidates/${candidateId}/decide`, body, {
            
            headers: {
                auth: window.localStorage.getItem('token'),
            }
        })
            .then((response) => {
                
                if (response.data.message === "Application approved successfully") {
                    alert(`Request approved`)
                } else {
                    alert(`Request denied`)
                }

            })
            .catch((error) => {
                alert("Please, repeat operation")
            })
    }

    
     

    


    return (

        
        <div>
            <h1>TripDetailsPage</h1>
                <CardTrip>
                    <p><strong>Name: </strong> {tripDetail.name}</p>
                    <p><strong>Description: </strong> {tripDetail.description}</p>
                    <p><strong>Planet:</strong> {tripDetail.planet}</p>
                    <p><strong>Duration:</strong> {tripDetail.durationInDays}</p>
                    <p><strong>Date: </strong> {tripDetail.date}</p>
                </CardTrip>
            <button>Go back</button>
        

             <h3>Waiting for Approval Candidates:</h3>
            {tripDetail.candidates === undefined || tripDetail.candidates.length === 0
                ? (
                    <CardTrip>
                        <h3>Não há nenhum candidato para esta viagem!</h3>
                    </CardTrip>
                ) : (
                    tripDetail.candidates.map((item) => {
                        return (<CardTrip key={item.id}>
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Age: </strong> {item.age}</p>
                            <p><strong>Profession: </strong> {item.profession}</p>
                            <p><strong>Country: </strong> {item.country}</p>
                            <p><strong>Description: </strong>{item.applicationText}</p>
                            <p><strong>Id: </strong>{item.id}</p>
                            <div>
                               <button onClick={()=>{processRequest(item.id,true)}}>IN</button>
                               <button onClick={()=>{processRequest(item.id, false)}}>OUT</button>
                            </div>
                        </CardTrip>
                        )
                    })
                )}

            <h3>Approved Candidates</h3>

            
            
            {tripDetail.approved === undefined || tripDetail.approved.length === 0
                ? (
                    <CardTrip>
                        <h3>Não há nenhum aprovado para está viagem!</h3>
                    </CardTrip>

                ) : (
                    tripDetail.approved.map((item) => {
                        return (<CardTrip key={item.id}>
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Age: </strong> {item.age}</p>
                            <p><strong>Profession: </strong> {item.profession}</p>
                            <p><strong>Country: </strong> {item.country}</p>
                            <p><strong>Description: </strong>{item.applicationText}</p>
                            <p><strong>Id: </strong>{item.id}</p>
                        </CardTrip>
                        )
                    })
                )}
        </div> 
    );
}
