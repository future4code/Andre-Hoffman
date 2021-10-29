import React from "react";
import { InputsContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm" ;
import axios from "axios"
import { BASE_URL } from "../../constants/url";
import { goToFeedPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

const LoginForm = () => {

    const [form,onChange,clear] = useForm({email:"",password: ""})

    const history = useHistory()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login()
        
    }

    const login = () =>{
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)

        })
        .catch((err)=>alert(err.response.data.message))
    }

    return(

            <InputsContainer>
                <form onSubmit = {onSubmitForm}>
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}  
                        label={"E-mail"} 
                        variant={"outlined"}
                        fullWidth
                        margin = {"normal"}
                        required
                        type={"email"}
                    
                    />
                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Password"}
                        variant={"outlined"}
                        fullWidth 
                        margin = {"normal"}  
                        required 
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >Log in</Button>


                </form>
            </InputsContainer>
          
    )
}


export default LoginForm