const {generateToken} = require('../utils/auth.utils')
const UserModel = require('../models/User')

module.exports.signup = async (req, res, next) => {
    try{
        const body = req.body
        const newUser = await UserModel.create(body)
        const token = generateToken(newUser.email)
        res.send({token})
    }catch(error){
        res.status(400).send(error)
        console.log(error)
    }
}

module.exports.login = async (req, res, next) => {
    try{
        const body = req.body
        const user = await UserModel.findOne({
            email: body.email
        })
        if (!user) {
            return res.status(404).send("Cette email n'existe pas")
        }
        if (user.motDePasse !== body.motDePasse) {
            return res.status(401).json("Mot de Passe incorrect")
        }
        const token = generateToken(user.email);
        return res.json({
            token
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            notConnected: true
        })
    }
}