const jwt = require('jsonwebtoken')
const jwtsecret = "monsecretchuuuut"

function generateToken(email) {
    return jwt.sign({email}, jwtsecret,{
        expiresIn: 3600
    });
}

function verifyToken(token) {
    return jwt.verify(token, jwtsecret);
}

module.exports = {
    generateToken,
    verifyToken
}