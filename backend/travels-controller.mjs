// Controllers for the Travel Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travels-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  


// CREATE controller ******************************************
app.post ('/travels', (req,res) => { 
    travels.createTrip(
        req.body.location, 
        req.body.date, 
        req.body.duration,
        req.body.language
        )
        .then(trip => {
            console.log(`"${trip.location}" was added to the collection.`);
            res.status(201).json(trip);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation of Travel document failed.'});
        });
});


// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.retrieveTravels()
        .then(travels => { 
            if (travels !== null) {
                console.log(`All travels were retrieved from the collection.`);
                res.json(travels);
            } else {
                res.status(404).json({ Error: 'Retrieval of Travel document failed.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Server cannot process request.' });
        });
});


// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.retrieveTripByID(req.params._id)
    .then(trip => { 
        if (trip !== null) {
            console.log(`"${trip.location}" was retrieved, based on its ID.`);
            res.json(trip);
        } else {
            res.status(404).json({ Error: 'Retrieval of Travel document failed.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Server cannot process request.' });
    });

});


// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTrip(
        req.params._id, 
        req.body.location, 
        req.body.date, 
        req.body.duration,
        req.body.language
    )
    .then(trip => {
        console.log(`"${trip.location}" was updated.`);
        res.json(trip);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Updating of Travel document failed.' });
    });
});


// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTripById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} trip was deleted.`);
                res.status(200).send({ Success: 'Trip was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Deletion of Travel document failed.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Invalid ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});