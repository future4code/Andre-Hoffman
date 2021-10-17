import React from "react";
import useForm from "../hooks/useForm";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

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


export default function ApplicationFormPage() {

    const [tripNames,setTripNames] = useState([]);

    useEffect(()=>{
        
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips")
         .then((response)=>{
            //  console.log(response.data.trips)
             setTripNames(response.data.trips)

         }).catch((error)=>{
             //console.log(error.response)
         })
    }, [])

    const history = useHistory();

    const {form, onChange, cleanFields} = useForm(
        {name:"",
         age:"", 
         applicationText:"", 
         profession:"",
         country:"",
         trip: {}    
        })
 
    
    const joinTrip = (event) => {
        event.preventDefault()
        // console.log("Done!", form)
        const body = {
            name:form.name,
            age:form.age,
            applicationText:form.applicationText,
            profession:form.profession,
            country:form.country 
         }
         axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trips/${form.trip}/apply`, body)
         .then((response)=>{
            //console.log(response.data)
        })
        cleanFields();
    }

    const goBack = () => {
        history.push("/trips/list")
      };


    return (
        <Form>
            <h1>ApplicationFormPage</h1>

            <FormContainer onSubmit={joinTrip}>
                
                <input
                    
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder = "Name"
                    required
                    pattern={"^.{3,}"}
                    title={"Minimum 3 letters"}
                />
                <input
                    
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    placeholder = "Age"
                    required
                    type={"number"}
                    min={18}
                />
                <input
                    
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder = "Description"
                    required
                    pattern={"^.{30,}"}
                    title={"Minimum 30 letters"}
                />

                <input
                    
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    placeholder = "Profession"
                    required
                    pattern={"^.{10,}"}
                    title={"Minimum 10 letters"}
                />

                <input
                    
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    placeholder = "Country"
                    required
                    pattern = {"[A-z]{3}"}
                    title= {"Country-code with 3 letters"}
                />

                <label for="tripNames">Choose a destination:</label>

                <select 
                name={"trip"}
                value={form.trip}
                onChange={onChange}>
                {tripNames.map((trip)=>{
                    return(
                    <option value={trip.id}>{trip.name}</option>
                    )
                })}
                   
                </select>


                
                <button type={'submit'}>Send</button>
                <button onClick={goBack}>Go back</button>
            </FormContainer>
            
        </Form>
    );

    
}