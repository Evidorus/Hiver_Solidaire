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
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/03',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/03',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/03',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/03',
            activité: "Passer la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/04',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/04',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/04',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/04',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/04',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/05',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/05',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/05',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/05',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/05',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/06',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/06',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/06',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/06',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/06',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/07',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/07',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/07',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/07',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/07',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/08',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/08',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/08',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/08',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/08',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/09',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/09',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/09',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/09',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/09',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/10',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/10',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/10',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/10',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/10',
            activité: "Passer la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/11',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/11',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/11',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/11',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/11',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/12',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/12',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/12',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/12',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/12',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/13',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/13',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/13',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/13',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/13',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/14',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/14',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/14',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/14',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/14',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/15',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/15',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/15',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/15',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/15',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/16',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/16',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/16',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/16',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/16',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/17',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/17',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/17',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/17',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/17',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/18',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/18',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/18',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/18',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/18',
            activité: "Passer la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/19',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/19',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/19',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/19',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/19',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/20',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/20',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/20',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/20',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/20',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/21',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/21',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/21',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/21',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/21',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/22',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/22',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/22',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/22',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/22',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/23',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/23',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/23',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/23',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/23',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/24',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/24',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/24',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/24',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/24',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/25',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/25',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/25',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/25',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/25',
            activité: "Passer la nuit",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/26',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/26',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/26',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/26',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/26',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/27',
            activité: "Fournir et partager le petit déjeuner",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/27',
            activité: "Préparer et partager le repas",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/27',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/27',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/27',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/28',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/28',
            activité: "Préparer et partager le repas",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/28',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/28',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/28',
            activité: "Passer la nuit",
        },
        {
            date: '2022/01/29',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/29',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/29',
            activité: "Préparer le repas chez soi et le tenir à disposition",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/29',
            activité: "Récupérer le repas et le partager",
        },
        {
            date: '2022/01/29',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/30',
            activité: "Fournir et partager le petit déjeuner",
        },
        {
            date: '2022/01/30',
            activité: "Préparer et partager le repas",
        },
        {
            date: '2022/01/30',
            activité: "Préparer le repas chez soi et le tenir à disposition",
        },
        {
            date: '2022/01/30',
            activité: "Récupérer le repas et le partager",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/30',
            activité: "Passer la nuit",
            bénévole: Users[1]._id
        },
    )
}

createPlanning();
