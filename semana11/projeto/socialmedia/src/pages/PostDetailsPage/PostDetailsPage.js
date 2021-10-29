import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import PostCard from "../../components/Header/PostCard";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostDetailsPage = () =>{

    const [postDetails, setPostDetails] = useState(null);

    useProtectedPage()

    const history= useHistory()

    const params = useParams()
    console.log("PARAMS", params)

    useEffect( ()=> {
        if(!params.id){
            history.push("/feed")
        }
    }, [])

    useEffect(()=>{
        axios.get(`${BASE_URL}/posts/${params.id}}/comments`,
        { headers: {
            Authorization: localStorage.getItem("token")
        }})
        .then((res)=>{
        setPostDetails(res.data.post)
        console.log("COMMENTS", res.data)})
        .catch()
    }, [])

    return(
        <div>

            {postDetails !== null && <PostCard post={postDetails}/>}
            

            
        </div>
    )
}

export default PostDetailsPage