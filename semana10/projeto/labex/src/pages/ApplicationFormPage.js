import React from "react";
import useForm from "../hooks/useForm";
import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

    const history = useHistory();

    const {form, onChange, cleanFields} = useForm(
        {name:"",
         age:"", 
         applicationText:"", 
         profession:"",
         country:""})

    const joinTrip = (event) => {
        event.preventDefault()
        console.log("Done!", form)
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
                
                <button>Send</button>
                <button onClick={goBack}>Go back</button>
            </FormContainer>
        </Form>
    );

    
}