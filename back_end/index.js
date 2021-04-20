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
const path = require("path");


const multer = require('multer');
const upload = multer({ dest: 'public' });
const fs = require("fs");
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes)

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("MongoDB connecté")
    });

app.listen(port, () => {
    console.log('Serveur lancé')
})

app.get('/planning', async (req, res) => {
    let limit = 7;
    let page = 0;
    if (req.query.limit) {
        if (!parseInt(req.query.limit) || parseInt(req.query.limit) < 1) {
            res.status(400).json({ message: "Limit must be a positive number" });
        }
        limit = req.query.limit;
    }
    if (req.query.page) {
        page = req.query.page
    }
    try {
        const planning = await PlanningModel.find({}).populate('bénévole').skip(parseInt(page * limit)).limit(parseInt(limit)).lean().exec()
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
    try {
        const users = await UserModel.find({})
        res.json(users)
    } catch (error) {
        console.log(error)
    }
})

app.get('/profil', checkAuth, async (req, res) => {
    try {
        const tokenUser = req.token
        const user = await UserModel.findOne({
            _id: tokenUser._id
        })
        res.json(user).status(200)
    } catch (error) {
        console.log(error)
    }
})

app.get('/liste', checkAuth, async (req, res) => {
    try {
        const tokenUser = req.token
        const user = await PlanningModel.find({
            bénévole: tokenUser._id
        })
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/removeliste', checkAuth, async (req, res) => {
    try {
        console.log(req.body)
        await PlanningModel.updateOne(req.body, {
            bénévole: null
        })
        res.send(`Votre action du ${req.body.date} pour l'activité ${req.body.activité} a bien était supprimer`)
    } catch (error) {
        console.log(error)
    }
})


app.post('/profilPicture', upload.single('image'), checkAuth, (req, res) => {
    console.log(req.token);
    const user = req.token;
    console.log(req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    user.image = `http://localhost:8000/${req.file.originalname}`;
    user.save();
    res.send(user.image);
});


