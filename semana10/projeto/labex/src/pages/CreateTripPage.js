import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";

const Form = styled.div `
    display: flex;
    margin:10px;
    align-items:center;
    flex-direction: column;
`

const FormContainer = styled.form `
    display: flex;
    margin:10px;
    align-items:center;
    flex-direction: column;
    padding: 20px;
`

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token === null) {
            //console.log("Not Logged")
            history.push('/login')
        }
    }, [])
}

export default function CreateTripPage() {

    const {form, onChange, cleanFields} = useForm(
        {name:"",
         planet:"", 
         date:"", 
         description:"",
         durationInDays:""})

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips`, form, {
            headers: {
                auth: window.localStorage.getItem('token'),
            }})
            .then((res) => {
                //console.log(res.data)
                alert("Trip successfully created!")
                cleanFields()
            })
            .catch((err) => {
                //console.log(err.messagem)
                alert("Pleasy try again")
            });
        cleanFields();
    }
    
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
            // console.log(response.data)
         }).catch((error)=>{
             //console.log(error.response)
         })
    }, [])

    

    return (
        <div>
           <h1> CreateTripPage</h1>
           <FormContainer onSubmit={createTrip}>
                
                <input
                    
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder = "Name"
                    required
                    pattern={"^.{5,}"}
                    title={"Minimum 5 letters"}
                />
                <input
                    
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    placeholder = "Choose Planet"
                    required
                    pattern={"^.{3,}"}
                    title={"Minimum 3 letters"}
                />
                <input
                    
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    placeholder = "Date"
                    required
                    type={"date"}
                    
                />

                <input
                    
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    placeholder = "Description"
                    required
                    pattern={"^.{30,}"}
                    title={"Minimum 30 letters"}
                />

                <input
                    
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder = "Trip Length in days"
                    required
                    type={"number"}
                    min={50}
                />
                
                <button>Create</button>
            </FormContainer>
        </div>
    );
}