const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    prénom:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    motDePasse:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;