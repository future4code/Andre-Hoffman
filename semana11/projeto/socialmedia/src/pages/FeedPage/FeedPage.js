import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid red; 
    padding: 0 0 0 20px;
    margin:10px; 
`

const FeedPage = () => {

    const posts = [
        {
            "id": "7e5a7974-74f7-476f-b9b0-ec592957195e",
            "body": "teste",
            "title": "teste",
            "createdAt": "2021-10-28T18:21:02.422Z",
            "userId": "a45f6d7f-be44-497e-94ee-759673ca5d16",
            "voteSum": null,
            "commentCount": "1",
            "userVote": null,
            "username": "Demo"
        },
        {
            "id": "828e38cd-9a53-49e5-9fec-5c7a3690f4f0",
            "body": "teste",
            "title": "teste",
            "createdAt": "2021-10-28T18:20:11.327Z",
            "userId": "a45f6d7f-be44-497e-94ee-759673ca5d16",
            "voteSum": null,
            "commentCount": null,
            "userVote": null,
            "username": "Demo"
        },
        {
            "id": "ae1543c6-c04b-435f-be35-0a0cf295dbaa",
            "body": "The 7th Element",
            "title": "Vitas",
            "createdAt": "2021-10-28T18:12:41.252Z",
            "userId": "a45f6d7f-be44-497e-94ee-759673ca5d16",
            "voteSum": "-1",
            "commentCount": "1",
            "userVote": null,
            "username": "Demo"
        }
    ]
    return(
        <div>
            <h1>FeedPage</h1>
            {posts.map((post)=>{
               return(
                   //Maybe I should do it in another page
                   <Card>
                       <p>User id: {post.id}</p>
                       <p>Text: {post.body}</p>
                       <Card>
                            <p>Likes {post.voteSum}</p>
                            <p>{post.commentCount} Comments</p>
                       </Card>
                   </Card>
               )  
            })}
        </div>
    )
}

export default  FeedPage