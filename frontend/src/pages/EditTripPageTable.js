import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTripPageTable = ({ tripToEdit }) => {
 
    const [location, setLocation] = useState(tripToEdit.location);
    const [date, setDate]         = useState(tripToEdit.date);
    const [duration, setDuration] = useState(tripToEdit.duration);
    const [language, setLanguage] = useState(tripToEdit.language);
    
    const redirect = useNavigate();

    const editTrip = async () => {
        const response = await fetch(`/travels/${tripToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                location: location, 
                date: date, 
                duration: duration,
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Trip details updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update trip. Error ${response.status}: ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a trip</h2>
            <p>Please provide the relevant information for your travels!</p>
            <table id="travels">
                <caption>What information would you like to change?</caption>
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
                            placeholder="What language was spoken?"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editTrip}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTripPageTable;