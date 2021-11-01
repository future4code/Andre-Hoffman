import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import PostCard from "../../components/Header/PostCard";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCardComment from "../PostCardComment/PostCardComment";

const PostDetailsPage = () =>{

    const [postDetails, setPostDetails] = useState(null);

    useProtectedPage()

    const history= useHistory()

    const params = useParams()

    useEffect( ()=> {
        if(!params.id){
            history.push("/feed")
        }
    }, [])

    useEffect(()=>{

        const auth = { 
           headers: {
             Authorization: localStorage.getItem("token")
            }
        }
        axios.get(`${BASE_URL}/posts/${params.id}/comments`, auth)
        .then((res)=>{
        setPostDetails(res.data)})
        .catch()
    }, [])

    return(
        <div>

            {postDetails !== null && <PostCardComment post={postDetails} params={params}/>}
            

            
        </div>
    )
}

export default PostDetailsPage