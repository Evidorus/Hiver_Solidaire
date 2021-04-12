const UserModel = require('../models/User');
const { verifyToken } = require('../utils/auth.utils');

module.exports = async (req, res, next) => {
    // J'enleve la valeur Bearer ajouté
    try {
        console.log(req.headers)
        const simpleToken = req.headers.authorization.split(" ")[1];
        console.log(simpleToken)
        // Je recupere le token decodé
        const decodedToken = verifyToken(simpleToken)
        // Je recherche l'utilisateur dans la DB, pour voir s'il existe bien
        const user = await UserModel.findOne({
            email: decodedToken.email
        })

        if (user) {
            req.token = user;
            next()
        } else {
            res.status(400).send(err)
        }
    } catch (error) {
        console.log(error)
    }

}