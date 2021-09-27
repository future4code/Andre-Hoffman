import React from 'react';
// import './CardGrande.css';
import styled from "styled-components";


const ContBig = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const ContImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const ContH4 = styled.h4 `
    margin-bottom: 15px;
`;

const ContInt = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;



function CardGrande(props) {
    return (
        <ContBig>
            <ContImg src={ props.imagem } />
            <ContInt>
                <ContH4>{ props.nome }</ContH4>
                <p>{ props.descricao }</p>
            </ContInt>
        </ContBig>
    )
}

export default CardGrande;