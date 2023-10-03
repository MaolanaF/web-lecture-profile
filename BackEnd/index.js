const express = require('express');
const bodyParser = require('body-parser');

const client = require('./connection');
const app = express();
const cors = require("cors");

const dosenRoute = require('./routes/dosenRoute');
const penelitianRoute = require('./routes/penelitianRoute');
const matkulRoute = require('./routes/matkulRoute');

app.use(cors())
app.use(bodyParser.json());

//  Untuk running server pada port yang ditentukan
app.listen(3100, () =>{
    console.log('server running in port 3100')
})

// Untuk menghubungkan ke database postgree melalui node js
client.connect(err => {
    if(err){
        console.log(err.message);
    } else{
        console.log('Connected');
    }
})

app.use('/', dosenRoute)
app.use('/', penelitianRoute)
app.use('/', matkulRoute)
