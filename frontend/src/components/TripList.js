import React from 'react';
import Trip from './Trip';

function TripList({ travels, onDelete, onEdit }) {
    return (
        <table id="travels">
            <caption>Edit or Delete Travels</caption>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Language</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {travels.map((trip, i) => 
                    <Trip 
                        trip={trip} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TripList;
