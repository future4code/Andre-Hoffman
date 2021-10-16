import React from "react";
import { useHistory } from "react-router-dom";

export default function ListTripsPage() {

    const history = useHistory();

    const goToApplication = () => {
        history.push("/trips/application");
    };

    return (
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={goToApplication}>Be part of the Journey! Click here</button>

        </div>
    );
}