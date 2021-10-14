import axios from "axios";
import React, { useEffect } from "react";

export default function TripDetailsPage() {

    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trip/6AF296jholXttVSwuHNB",{ 
        headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRCQjVic0MyczFacjM4UEVUZk5DIiwiZW1haWwiOiJhbmRyZWxlYWxAZ21haWwuY29tLmJyIiwiaWF0IjoxNjM0MjM0MzQ3fQ.PI-aMIqceRFElFj32V3CKVK6u4ZbYtC7FoifIBwkMGQ'
        }})
         .then((response)=>{
             console.log(response.data)
         }).catch((error)=>{
             console.log(error.response)
         })
    }, [])
    return (
        <div>
            <h1>TripDetailsPage</h1>
        </div>
    );
}
//https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id
//"6AF296jholXttVSwuHNB"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRCQ…DEzfQ.OUSqjEZ-8GP0QyXn1jQ7GMUnD45rbhpbBYw72z9j7xk