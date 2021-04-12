const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const PlanningModel = require('./models/Planning');
const UserModel = require('./models/User');
const authRoutes = require('./routes/auth');
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

app.get('/planning',  async (req, res) => {
    try {
        const planning = await PlanningModel.find({}).populate('bénévole').lean().exec()
        res.json(planning)
    } catch (error) {
        console.log(error)
        res.status(403).send('Planning introuvable')
    }
})

app.post('/addplanning', checkAuth, async (req, res) => {
    try {
        const user = req.token
        const body = req.body
        const planning = await PlanningModel.findById(req.body.id)
        if (planning.bénévole) {
            res.status(400).send('cette place est deja prise')
        } else {
            await PlanningModel.updateOne(
            {
                _id: body.id
            },
            {
                bénévole: user._id
            })
            res.status(200).send('Vous vous etes bien inscrit')
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

app.get('/profil',checkAuth, async (req, res) => {
    try{
        const tokenUser = req.token
        const user = await UserModel.findOne({
            _id: tokenUser._id
        })
        res.json(user)
    }catch(error){
        console.log(error)
    }
})

app.get('/liste',checkAuth, async (req, res) => {
    try{
        const tokenUser = req.token
        const user = await PlanningModel.find({
            bénévole: tokenUser._id
        })
        res.json(user)
    }catch(error){
        console.log(error)
    }
})

// app.delete('/liste', async (req, res) => {
//     try{

//     }catch(error){
//         console.log(error)
//     }
// })

