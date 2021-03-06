const express = require('express');
const app = express();
const port = 3000;
const Customer = require('./models/customer');
const Log = require('./middleware/log');
const cors = require('cors');

app.use(cors());

app.post('/', () => {
    Customer.getCustomer();
})

app.listen(port, () =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})