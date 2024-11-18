const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config()

const port = 3000;


app.use('/api/v1/portfolio', require('./routes/routes'))
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../'))
})

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, './client/build/index.html')))

app.listen(port, () => {
    console.log(` your server running on port ${port}`)
})