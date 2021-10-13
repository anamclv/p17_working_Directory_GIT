const express = require('express');
const app = express();
const port = 3000;
const Customer = require('./models/customer');

app.get('/', (req, res) => {
    //codigo 
})

app.listen(port, () =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})