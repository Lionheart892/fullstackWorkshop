// import the pets array from data.js
const pets = require('./data.js');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'Unit4.PetFinder.Starter/index.html');   // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);  // send the pets array as a response

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;    // get the owner from the request
    const ownedPets = pets.filter(pet => pet.owner === owner);
    res.json(ownedPets);   


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;  // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ message: 'Pet not found' });
    }

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;