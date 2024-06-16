import React from 'react';
import { FiTrash2, FiEdit } from "react-icons/fi";


function Trip({ trip, onEdit, onDelete }) {
    return (
        <tr>
            <td>{trip.location}</td>
            <td>{trip.date.slice(0,10)}</td>
            <td>{trip.duration} days</td>
            <td>{trip.language}</td>

            <td><FiTrash2 onClick={() => onDelete(trip._id)} /></td>
            <td><FiEdit onClick={() => onEdit(trip)} /></td>
        </tr>
    );
}

export default Trip;