const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //codigo 
})

app.listen(port, () =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})