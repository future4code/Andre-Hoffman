import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import PostCard from "../../components/Header/PostCard";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const FeedCards = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 400px;
    align-content: center;
    margin:auto;

`

const FeedPage = () => {

    useProtectedPage()

  
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log("ESSE POST AQUI PRIMEIRA PROP", posts)

    

    

    

    

    return(
        <FeedCards>
            <h1>FeedPage</h1>
           
            {posts.map((post)=>{
               return(
                   <PostCard post={post}/>
                   
               )  
            })}
        </FeedCards>
    )
}

export default  FeedPage