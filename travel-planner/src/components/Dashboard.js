import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get('/api/trips/')
             .then(response => {
                 setTrips(response.data);
             })
             .catch(error => {
                 console.error("There was an error fetching trips!", error);
             });
    }, []);

    return (
        <div>
            <h1>Welcome to the Travel Planner</h1>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>{trip.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
