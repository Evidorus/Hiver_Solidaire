const mongoose = require('mongoose');
const UserModel = require('./models/User');
const PlanningModel = require('./models/Planning')

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
{ useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("MongoDB connecté")
});

async function createPlanning() {
    await UserModel.deleteMany({}).exec();
    const Users = await UserModel.create(
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
    await PlanningModel.deleteMany({}).exec();
    const Planning = await PlanningModel.create(
        {
            date: '2022/01/03',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/04',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/05',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id,
        },
        {
            date: '2022/01/06',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id,
        },
        {
            date: '2022/01/07',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/08',
            activité: "Passer la nuit",
            bénévole: Users[1]._id,
        },
        {
            date: '2022/01/09',
            activité: "Fournir et partager le petit déjeuner",
        }
    )
}

// async function createUser() {
//     await UserModel.deleteMany({}).exec();
//     await UserModel.create(
//         {
//             nom: "Olicard",
//             prénom: "Fabien",
//             age: 24,
//             email: "fabien.oli@live.fr",
//             motDePasse: "fafafafa",
//             role: "B"
//         },
//         {
//             nom: "Jean",
//             prénom: "Bernard",
//             age: 56,
//             email: "bernard.jean@live.fr",
//             motDePasse: "bebebebe",
//             role: "A"
//         }
//     )
// }

// createUser();
createPlanning();