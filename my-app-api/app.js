const express = require('express'); // Importing express module 
const cors = require('cors'); 
const app = express(); // Creating an express object 
const port = 8000;  // Setting an port for this application
var count = 1;

app.use(cors());
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});

app.get("/getdata", (request, response) => {
const status = {
    "temperature" : (Math.random() * count) % 10,
    "moisture" : (Math.random() * count) % 10,
    "humidity" : (Math.random() * count) % 10,
    "motor" : (Math.random() * count) % 10,
    "smoke" : (Math.random() * count) % 10,
    "fire" : (Math.random() * count) % 10
};

this.count++;
response.send(status);
});