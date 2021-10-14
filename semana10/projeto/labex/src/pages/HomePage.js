import React from "react";
import { useHistory } from "react-router-dom"

export default function HomePage() {

    const history = useHistory();

    const goToListTripPage = () => {
        history.push("/trips/list");
      };
    
      const goToLoginAdm = () => {
        history.push("/login");
      };

    return (
        <div>
           <h1> HomePage</h1>
           <button onClick={goToListTripPage}>Go to trip list</button>
           <button onClick={goToLoginAdm}>Go to Adm Page</button>
        </div>
    );
}