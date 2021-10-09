import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios';
import PerfilPagina from './PerfilPagina'
import ListaPage from './ListaPage';

const ApiContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`


const TesteAPI = () => {

    //estado
    const [profileName, setProfileName] = useState("andre");
    //requisição api
    
    const pegaPessoa = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
        axios
        .get(url)
        .then((res) => setProfileName(res.data.profile.name))
        .catch((err) => console.log(err.response));
    };

    //funcao para atualizar o estado
    useEffect(() => {
        pegaPessoa();
      });

    return (
        <ApiContainer>
            <PerfilPagina />
        </ApiContainer>
    )
}

export default TesteAPI