import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {useState} from "react"
import axios from "axios";
import useForm from "../hooks/useForm";
import { getDefaultNormalizer } from "@testing-library/react";


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
        console.log(email, password);
        const body = {
          email: email,
          password: password

        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/login", body)
        .then((response)=>{
          console.log(response.data.token)
          localStorage.setItem('token', response.data.token)
          
          history.push('/admin/trips/list')
        }).catch((error)=>{
          console.log(error.response)
        })
        
        
      }



    return (
        <div>
            <h1>Admin Area</h1>
            <input
              placeholder = "email"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
            <input
              placeholder = "password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}>Log in</button>
           <button onClick={goBack}>Go back</button>
        </div>
    );
}