const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
    date: Date,
    activité: String,
    bénévole: {
        type: String,
        ref: 'Users'
    }
})
const PlanningModel = mongoose.model('Plannings', planningSchema);

module.exports = PlanningModel;