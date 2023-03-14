const express = require('express');

const app = express();

const router = require('./Router/router');

const model = require('./Model/model');



const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", router);




app.listen(3000, ()=> { 
    console.log('Server starts on 3000')
})
