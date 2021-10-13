const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //codigo 
})

app.listen(3000, () =>{
    console.log('servidor escuchando en http://localhost:3000');
})