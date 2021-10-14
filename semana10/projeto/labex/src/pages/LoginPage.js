import React from "react";
import { useHistory } from "react-router-dom"

export default function LoginPage() {

    const history = useHistory();

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list");
      };
    
      const goToCreateTrip = () => {
        history.push("/admin/trips/create");
      };

      const goToTripDetails = () => {
        history.push("/admin/trips/:id");
      };

    return (
        <div>
            <h1>Admin Area</h1>
           <button onClick={goToAdminHomePage}>Go to Admin Home Page</button>
           <button onClick={goToCreateTrip}>Create new Trips</button>
           <button onClick={goToTripDetails}>Go to trip details</button>
        </div>
    );
}