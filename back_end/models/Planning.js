const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
    date: Date,
    activité: String,
    bénévole: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})
const PlanningModel = mongoose.model('Planning', planningSchema);

module.exports = PlanningModel;