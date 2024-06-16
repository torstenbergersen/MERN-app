// Models for the Travel Collection

import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection to the travel database collection was successful.' });
    } else  {
        console.log('Connection to the travel database collection failed.');
    }
});

// SCHEMA: 
const tripSchema = mongoose.Schema({
	location: { type: String, required: true },
	date:     { type: Date, 
                default: Date.now,
                required: true },
	duration: { type: Number, 
                required: true,
                default: 1,
                min:[1, "minimum of 1 day for duration"]},
    language: { type: String, required: true}
});


const travels = mongoose.model('Travels', tripSchema);


// CREATE model *****************************************
const createTrip = async (location, date, duration, language) => {
    const trip = new travels({ 
        location: location, 
        date: date, 
        duration: duration,
        language: language 
    });
    return trip.save();
}


// RETRIEVE model *****************************************
const retrieveTravels = async () => {
    const query = travels.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTripByID = async (_id) => {
    const query = travels.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTripById = async (_id) => {
    const result = await travels.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTrip = async (_id, location, date, duration, language) => {
    const result = await travels.replaceOne({_id: _id }, {
        location: location, 
        date: date, 
        duration: duration,
        language: language 
    });
    return { 
        _id: _id, 
        location: location, 
        date: date, 
        duration: duration,
        language: language 
    }
}

// EXPORT the variables for use in the controller file.
export { createTrip, retrieveTravels, retrieveTripByID, updateTrip, deleteTripById }