import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddTripPageTable = () => {

    const [location, setLocation] = useState('');
    const [date, setDate]         = useState('');
    const [duration, setDuration] = useState('');
    const [language, setLanguage] = useState('');
    
    const redirect = useNavigate();

    const addTrip = async () => {
        const newTrip = { location, date, duration, language };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTrip),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Trip succesfully added!`);
        } else {
            alert(`Failed to add trip. Error = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a trip</h2>
            <p>Please provide the relevant information for your travels!</p>
            <table id="travels">
                <caption>Which trip are you adding?</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="location">Trip Location</label>
                        <input
                            type="text"
                            placeholder="Where did you go?"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label htmlFor="date">Date Visited</label>
                        <input
                            type="date"
                            value={date}
                            placeholder="Date Visited"
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td><label htmlFor="duration">Duration of visit</label>
                        <input
                            type="number"
                            value={duration}
                            placeholder="How long did you stay?"
                            onChange={e => setDuration(e.target.value)} 
                            id="duration" />
                    </td>

                    <td><label htmlFor="language">Primary Language</label>
                        <input
                            type="text"
                            placeholder="¿Qué idioma hablaban?"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTrip}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTripPageTable;