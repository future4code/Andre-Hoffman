import React from "react"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { ScreenContainer } from "../LoginPage/styled"
import SignUpForm from "./SignUpForm"

const SignUpPage = ({rightButton, setRightButton}) => {

    useUnprotectedPage()

    

    return(
        <ScreenContainer>
            <h1>SignUpPage</h1>
            <SignUpForm rightButton={rightButton} setRightButton={setRightButton} />
        </ScreenContainer>
    )
}


export default SignUpPage