import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm" ;
import axios from "axios"
import { BASE_URL } from "../../constants/url";
import { goToFeedPage } from "../../routes/coordinator";



const SignUpForm = () => {

    const history = useHistory()

    const [form,onChange,clear] = useForm({username: "", email:"",password: ""})

    const onSubmitForm = (event) => {
        
        event.preventDefault()
        signUp()

    }

    const signUp = () =>{
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)

        })
        .catch((err)=>alert(err.response.data.message))
    }

    return(

            
                <form onSubmit = {onSubmitForm}>

                    <SignUpFormContainer>
                        <InputsContainer>
                            <TextField 
                                    name={"username"}
                                    value={form.username}
                                    onChange={onChange}  
                                    label={"Username"} 
                                    variant={"outlined"}
                                    fullWidth
                                    margin = {"normal"}
                                    required
                                    
                                
                                />
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
                        </InputsContainer>
                    </SignUpFormContainer>
                </form>
            
          
    )
}


export default SignUpForm