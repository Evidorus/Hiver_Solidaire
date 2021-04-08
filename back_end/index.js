const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const PlanningModel = require('./models/Planning');
const authRoutes = require('./routes/auth');
const UserModel = require('./models/User');
const checkAuth = require('./middlewares/auth.middlewares')

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes)

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
{ useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("MongoDB connecté")
});

app.listen(port, () => {
    console.log('Serveur lancé')
})

app.get('/planning', checkAuth, async (req, res) => {
    try {
        const planning = await PlanningModel.find({})
        res.json(planning)
    } catch (error) {
        console.log(error)
        res.status(403).send('Planning introuvable')
    }
})

app.post('/addplanning', checkAuth, async (req, res) => {
    try {
        const user = req.toto
        console.log(user)
        const body = req.body
        const planning = await PlanningModel.find({
            date: body.date,
            activité: body.activité
        })
        if (planning) {
            res.status(400).send('cette place est deja prise')
        } else {
            const newPlanning = await PlanningModel.create({
                date: body.date,
                activité: body.activité,
                bénévole: user._id
            })
            console.log(newPlanning)
            res.status(200).json({newPlanning}).send('Vous vous etes bien inscrit')
        }
    } catch (error) {
        console.log(error)
    }
})

app.get('/users', async (req, res) => {
    try{
        const users = await UserModel.find({})
        res.json(users)
    }catch(error){
        console.log(error)
    }
})

