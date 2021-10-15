import React from "react";
import axios from "axios";
import { useHistory } from "react-router";


const useProtectedPage = () => {
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token === null) {
            console.log("Não está logado")
            history.push('/login')
        }
    }, [])
}

export default function AdminHomePage() {

    useProtectedPage()

    useEffect(()=>{
        const token = localStorage.getItem(
            'token'
        )
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-leal-maryam/trip/6AF296jholXttVSwuHNB",{ 
        headers: {
            auth: token
        }})
         .then((response)=>{
             console.log(response.data)
         }).catch((error)=>{
             console.log(error.response)
         })
    }, [])
    
    return (
        <div>
            <h1>AdminHomePage</h1>
        </div>
    );
}