import React from "react";
import { useHistory } from "react-router-dom";
import {useState} from "react"
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

export default function LoginPage() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")

    const history = useHistory();

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list");
      };
    
      const goToCreateTrip = () => {
        history.push("/admin/trips/create");
      };

      const goToTripDetails = () => {
        history.push("/admin/trips/:id");
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
        }).catch((error)=>{
          console.log(error.response)
        })
        
      }
      // https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips
      // https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id


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
            <button onClick={onSubmitLogin}>Enviar</button>
           <button onClick={goToAdminHomePage}>Go to Admin Home Page</button>
           <button onClick={goToCreateTrip}>Create new Trips</button>
           <button onClick={goToTripDetails}>Go to trip details</button>
        </div>
    );
}