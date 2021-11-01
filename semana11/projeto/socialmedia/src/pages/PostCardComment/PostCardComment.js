import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/url";



const Card = styled.div`
    border: 1px solid red; 
    padding: 0 0 0 20px;
    margin:10px; 
`


const PostCardComment = (props) => {

    const [newComment, setNewComment]=useState("")
    const params = useParams()
    
    const handleUpdateComment = (event) => {
        setNewComment(event.target.value)
    }

    const handleCreateComment = () =>{

        const auth = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            body: newComment
        }

        axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, auth)
        .then((res)=>{
            setNewComment("")
            alert("Comment created successfully")
        })
        .catch((error)=>{
            
            alert("There was a problem creating the comment. Pleasy try again")
           })

    }

        


    return(
        <div>
        <TextField
            placeholder={"Write a comment here"}
            value={newComment}
            onChange={handleUpdateComment} 
            variant={"outlined"}
            fullWidth
            margin = {"normal"}
            type={"text"}
            
        />
        <button
            onClick={handleCreateComment}
        >Send</button>

        

        {(props.post !== undefined) && props.post.map((comment)=>{
            return(
                <Card>
                    <p><strong>Username:</strong> {comment.username}</p>
                    <p><strong>Text:</strong> {comment.body}</p>
                    <p><strong>Date:</strong> {comment.createdAt}</p>
    
                </Card>
            )
        })}

    </div>
    


    )
}

export default PostCardComment