const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
    date: Date,
    activité: String,
    bénévole: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})
const PlanningModel = mongoose.model('Plannings', planningSchema);

module.exports = PlanningModel;