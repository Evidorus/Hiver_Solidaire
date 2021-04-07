const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
{ useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("MongoDB connecté")
});

app.listen(port, () => {
    console.log('Serveur lancé')
})