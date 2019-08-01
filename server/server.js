const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const summoners = require('./routes/summoners')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/summoners', summoners)

const port = 4000;


app.listen(port, ()=> console.log(`Server is running on port ${port}`))