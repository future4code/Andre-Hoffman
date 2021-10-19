import React from "react";
import { useHistory } from "react-router-dom"
import styled from "styled-components";
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
  font-size: 2em;
  :hover {
    background-color: gray;
  }

`

export default function HomePage() {

    const history = useHistory();

    const goToListTripPage = () => {
        history.push("/trips/list");
      };
    
      const goToLoginAdm = () => {
        history.push("/login");
      };

    return (
        <Main>
           <Title> Labex </Title>
          <MainButtons>
            <StyledButtons onClick={goToListTripPage}>Go to trip list</StyledButtons>
            <StyledButtons onClick={goToLoginAdm}>Go to Adm Page</StyledButtons>
           </MainButtons>
        </Main>
    );
}