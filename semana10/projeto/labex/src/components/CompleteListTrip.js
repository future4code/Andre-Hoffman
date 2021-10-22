import React from "react";
import styled from "styled-components";

const ListContainer = styled.div `
    display: flex;
    align-items:center;
    border-bottom: 1px solid gray;

    :hover {
        background-color: rgba(0,0,0,0.3)
    }
`

export default function CompleteListTrip (props) {
    return(
        <ListContainer>
            <p>{props.name}</p>
        </ListContainer>
    )
}
