import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlusSquare } from "react-icons/fi";

import TripList from '../components/TripList';
import { Link } from 'react-router-dom';

function TravelsPage({ setTrip }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [travels, setTravels] = useState([]);

    // RETRIEVE the entire list of travels
    const loadTravels = async () => {
        const response = await fetch('/travels');
        const travels = await response.json();
        setTravels(travels);
    } 
    

    // UPDATE a single trip
    const onEditTrip = async trip => {
        setTrip(trip);
        redirect("/update");
    }


    // DELETE a single trip  
    const onDeleteTrip = async _id => {
        const response = await fetch(`/travels/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travels');
            const travels = await getResponse.json();
            setTravels(travels);
        } else {
            console.error(`Trip (${_id}) deletion failed, status code: ${response.status}`)
        }
    }

    // LOAD all the travels
    useEffect(() => {
        loadTravels();
    }, []);

    // DISPLAY the travels
    return (
        <>
            <h2>Travel Log</h2>
            <p>Here is where you can log your travels! Add information on where you went, when you went, for how long, and what the primary language was.</p>
            <Link to="/create"><FiPlusSquare />Add Trip</Link>
            <br></br>
            <br></br>
            <TripList 
                travels={travels} 
                onEdit={onEditTrip} 
                onDelete={onDeleteTrip} 
            />
        </>
    );
}

export default TravelsPage;