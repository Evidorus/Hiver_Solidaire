const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const PlanningModel = require('./models/Planning');

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

app.get('/planning', async (req, res) => {
    try {
        const planning = await PlanningModel.find({})
        res.json(planning)
    } catch (error) {
        console.log(error)
        res.status(403).send('Planning introuvable')
    }
})

app.post('/addplanning', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})