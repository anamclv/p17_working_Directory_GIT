const express = require('express');
const app = express();
const port = 3000;
const Customer = require('./models/customer');

app.post('/', () => {
    Customer.getCustomer();
})

app.listen(port, () =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})