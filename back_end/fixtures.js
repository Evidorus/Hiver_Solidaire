const mongoose = require('mongoose');
const UserModel = require('./models/User');
const PlanningModel = require('./models/Planning')

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("MongoDB connecté")
    });

async function createPlanning() {
    await UserModel.deleteMany({}).exec();
    const Users = await UserModel.create(
        {
            nom: "Olicard ",
            prénom: "Fabien",
            age: 24,
            email: "fabien.oli@live.fr",
            motDePasse: "fafafafa",
            role: "B",
            numero: "+336 12 34 56 78 90",
        },
        {
            nom: "Jean",
            prénom: "Bernard",
            age: 56,
            email: "bernard.jean@live.fr",
            motDePasse: "bebebebe",
            role: "A",
            numero: "+337 09 87 65 43 21",
        }
    )
    await PlanningModel.deleteMany({}).exec();
    await PlanningModel.create(
        {
            date: '2022/01/03',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/03',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/03',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/03',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/03',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/04',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/04',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/04',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/04',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/04',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/05',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/05',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/05',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/05',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/05',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/06',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/06',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/06',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/06',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/06',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/07',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/07',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/07',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/07',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/07',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/08',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/08',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/08',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/08',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/08',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/09',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/09',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/09',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/09',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/09',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/10',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/10',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/10',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/10',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/10',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/11',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/11',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/11',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/11',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/11',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/12',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/12',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/12',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/12',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/12',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/13',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/13',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/13',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/13',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/13',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/14',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/14',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/14',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/14',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/14',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/15',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/15',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/15',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/15',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/15',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/16',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/16',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/16',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/16',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/16',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/17',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/17',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/17',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/17',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/17',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/18',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/18',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/18',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/18',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/18',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/19',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/19',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/19',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/19',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/19',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/20',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/20',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/20',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/20',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/20',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/21',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/21',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/21',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/21',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/21',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/22',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/22',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/22',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/22',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/22',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/23',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/23',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/23',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/23',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/23',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/24',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/24',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/24',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/24',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/24',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/25',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/25',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/25',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/25',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/25',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/26',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/26',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/26',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/26',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/26',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/27',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/27',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/27',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/27',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/27',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/28',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/28',
            activité: "18h Préparer le dîner et le porter au 92bis",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/28',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/28',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/28',
            activité: "19h - 8h Partager le dîner et la nuit",
        },
        {
            date: '2022/01/29',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/29',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/29',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/29',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
        },
        {
            date: '2022/01/29',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/30',
            activité: "7h - 8h Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/30',
            activité: "18h Préparer le dîner et le porter au 92bis",
        },
        {
            date: '2022/01/30',
            activité: "19h - 21h Préparer, servir et partager le dîner à disposition",
        },
        {
            date: '2022/01/30',
            activité: "18h30 - 21h Réchauffer, servir et partager le dîner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/30',
            activité: "19h - 8h Partager le dîner et la nuit",
            bénévole: Users[1]._id
        },
    )
}

createPlanning();
