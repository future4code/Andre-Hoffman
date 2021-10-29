import React from "react";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import {useHistory} from 'react-router-dom';
import {goToSignUpPage} from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({rightButton, setRightButton}) => {
    
    useUnprotectedPage()
    const history = useHistory()



    return(
        <ScreenContainer>
            <h1>LoginPage</h1>
            <LoginForm rightButton={rightButton} setRightButton={setRightButton}/>
            <SignUpButtonContainer>
                <Button
                onClick = {()=>{goToSignUpPage(history)}}
                type={"submit"}
                variant={"text"}
                fullWidth
                color={"primary"}
                
                >Don't have an account? Sign up!</Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}


export default LoginPage