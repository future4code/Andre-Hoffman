import React from "react";
import Router from "./routes/Router";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./constants/theme";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";


const App = () => {

  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(
    token ? "Logout" : "Login"
  )

  return (
    <ThemeProvider theme ={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton}/>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
