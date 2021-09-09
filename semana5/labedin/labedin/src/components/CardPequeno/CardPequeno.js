import React from 'react';
// import './CardPequeno.css';
import styled from "styled-components";

const ContainerBase = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px 10px 10px;
    margin-bottom: 10px;
    
`;

const ContImage = styled.img`
    width: 30px;
    margin-right: 10px;
    
`;
const ContH4 = styled.h4`
    margin-bottom: 15px;

`;
const ContSmall = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    
`;

function CardPequeno(props) {
    return (
        <ContainerBase>
            <ContImage src={ props.imagem } />
            <ContSmall>
                <ContH4>{ props.nome } </ContH4>
                <p>{ props.descricao }</p>
            </ContSmall>
        </ContainerBase>
    );
}

export default CardPequeno;