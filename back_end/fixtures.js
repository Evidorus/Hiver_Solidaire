const mongoose = require('mongoose');
const UserModel = require('./models/User');
const PlanningModel = require('./models/Planning')

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
{ useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("MongoDB connecté")
});

async function createPlanning() {
    await PlanningModel.deleteMany({}).exec();
    await PlanningModel.create(
        {
            date: '03/01/2022',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '04/01/2022',
            activité: "Préparer et partager le repas",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '05/01/2022',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '06/01/2022',
            activité: "Récupérer le repas et le partager",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '07/01/2022',
            activité: "Récupérer le repas et le partager",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '08/01/2022',
            activité: "Passer la nuit",
            bénévole: "606d7f57e27fd10ae05a22de",
        },
        {
            date: '09/01/2022',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: "606d7f57e27fd10ae05a22de",
        }
    )
}

async function createUser() {
    await UserModel.deleteMany({}).exec();
    await UserModel.create(
        {
            nom: "Olicard",
            prénom: "Fabien",
            age: 24,
            email: "fabien.oli@live.fr",
            motDePasse: "fafafafa",
            role: "B"
        },
        {
            nom: "Jean",
            prénom: "Bernard",
            age: 56,
            email: "bernard.jean@live.fr",
            motDePasse: "bebebebe",
            role: "A"
        }
    )
}

createUser();
createPlanning();
