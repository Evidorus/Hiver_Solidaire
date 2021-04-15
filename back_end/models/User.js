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
        // required: true
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
        default: 'B'
    },
    image:{
        type: String,
    },
    numero:{
        type: String,
        required: true
    }

});
const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;