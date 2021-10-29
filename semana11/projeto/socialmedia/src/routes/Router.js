import React from "react";
import {Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostPage from "../pages/PostPage/PostPage";



const Router = () => {
    return(
        
            
            <Switch>
                <Route exact path = "/">
                    
                        <LoginPage/>
                    
                </Route>

                <Route exact path = "/signup">
                    
                        <SignUpPage />
                   
                </Route>

                <Route exact path = "/feed">
                    
                        <FeedPage />
                   
                </Route>

                <Route exact path = "/post/:id">
                    
                        <PostPage />
                   
                </Route>

                <Route >
                   
                        <ErrorPage />
                    
                </Route>

            </Switch>
        

    )
}

export default Router