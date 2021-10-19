import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import {useState} from "react"
import axios from "axios";
import useForm from "../hooks/useForm";
import { getDefaultNormalizer } from "@testing-library/react";
import horizon from "../img/horizon.jpg";

const Title = styled.h1 `
  font-family: Georgia, sans-serif;
  font-size: 5em;
  color: white;
  letter-spacing: -2px;

`

const Main = styled.div `

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${horizon});
  height: 100vh;
 

`

const MainButtons = styled.div `
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  
  
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

const StyledInput = styled.input`

  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;


`


export default function LoginPage() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")

    const history = useHistory();
    

      const goBack = () => {
        history.push("/")
      };

      const onChangeEmail = (event) =>{
        setEmail(event.target.value);
      }

      const onChangePassword = (event) => {
        setPassword(event.target.value);
      }

      const onSubmitLogin = () => {
        //console.log(email, password);
        const body = {
          email: email,
          password: password

        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/login", body)
        .then((response)=>{
          //console.log(response.data.token)
          localStorage.setItem('token', response.data.token)
          
          history.push('/admin/trips/list')
        }).catch((error)=>{
         // console.log(error.response)
        })
        
        
      }



    return (
        <Main>
            <Title>Admin Area</Title>
            <StyledInput
              placeholder = "email"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
            <StyledInput
              placeholder = "password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <StyledButtons onClick={onSubmitLogin}>Log in</StyledButtons>
            <StyledButtons onClick={goBack}>Go back</StyledButtons>
        </Main>
    );
}