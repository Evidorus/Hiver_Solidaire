import React from "react";
import '../App.css';
import { Styles } from '../components/styles';
import SocialIcons from '../components/SocialIcons';



export default function Welcome() {

    return (
        <Styles>
            <div className="container">
                <div className="row p-3 border bg-light " id='rowHome'>
                    <h1 style={{ textAlign: "center", padding: "30px" }}>Hiver Solidaire 2022 : 4 janvier – 14 mars</h1>
                    <div className="card mb-3 " style={{ width: "40%" }}>
                        <img src="/imgHS/welcome3.jpg" class="card-img-top" alt="Paris en hiver" />
                        <div className="card-body" >
                            <h5 className="card-title" style={{ textAlign: "center" }}>Pour la onzième année consécutive, notre Paroisse participe à Hiver Solidaire.</h5>
                            <div className="col md-6 col-lg">
                                <p className="card-text" style={{ marginTop: 0, fontSize: '1.3em' }} className="text-one-page"><br></br>
                                Après avoir pendant 8 années accueilli 8 personnes de la rue dans la salle Ozanam, depuis 2 ans, nous avons réduit ce nombre à 5 personnes afin de rendre plus chaleureux notre accueil fraternel.
                                <br></br>
                                    <div className="col md-6 col-lg">
                                        <br></br>
                                Ces « Accueillis », nous essayons de les connaître au préalable en les trouvant parmi les habitués de l’ Accueil Solidaire du lundi après midi ; ils peuvent également nous être envoyés par des associations « amies ».
                                </div>
                                    <div className="col md-6 col-lg">
                                        <br></br>
                                Comme vous le savez, depuis l’ an passé, nous bénéficions, en exclusivité, de la salle Saint Geneviève ce qui permet à tous les Accueillis d’avoir chacun un couchage stable pendant les 10 semaines et de bénéficier d’un petit placard, avec clef, pour les affaires personnelles. Ils ont accès soir et matin à une douche et peuvent, une fois par semaine, faire leur lessive.
                                <br></br>
                                        <br></br>
                                Mais ce relatif confort matériel ne trouve son sens que si nous, les Bénévoles , leur apportons notre chaleur fraternelle et, au final, notre amitié pour leur permettre de vivre 10 semaines dans une « ambiance familiale ».
                                <br></br>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h5 style={{ textAlign: 'center', marginTop: "2%" }} id="h2Home"> Hiver Solidaire permet d’être au service des plus démunis de nos frères et de rencontrer un monde souvent invisible mais qui est à notre porte.</h5>
                            <p style={{ marginTop: 0, fontSize: '1.3em' }}>
                                Nous avons un double objectif, un peu contradictoire, à savoir :

                                <ul>
                                    <li>Qu’un maximum de paroissiens participe,</li>
                                    <li>Mais aussi que chaque bénévole s’inscrive plusieurs fois pour établir un véritable lien avec nos Accueillis.</li>
                                </ul>
                                C’est pour cette raison que chaque bénévole, à chaque inscription, ne peut s’inscrire que pour 2 missions, afin de laisser de la place à d’autres. Il peut renouveler ses inscriptions chaque semaine.
                                <br></br> <br></br>
                                Grâce à ce nouveau planning, vous avez une vision très claire du niveau de remplissage de chaque semaine et vous pouvez ainsi vous inscrire à la date qui vous vous convient et où vous serez le plus utile.
                                <br></br> <br></br>
                                Joyeux et fraternel Hiver Solidaire!
                            </p>
                        </div>
                        <div className="col border bg-light " id='rowHome' style={{ margin: "10%" }}>
                            <h5 style={{ textAlign: 'center', margin: "5%" }} id="h2Home"> Vous trouverez sur le planning <br></br> 5 créneaux horaires différents</h5>
                            <p style={{ marginTop: 0, fontSize: '1.3em' }} className="text-one-page">
                                <ul>
                                    <li>7 h - 8 h : Préparer et partager le petit déjeuner 1 Bénévole</li>
                                    <li>18h : Préparer le dîner et le porter au 92bis 2 Bénévoles</li>
                                    <li>19h - 21h : Préparer, servir et partager le dîner 2 Bénévoles</li>
                                    <li>18h30 – 21h : Réchauffer, servir et partager le dîner 1 ou 2 Bénévoles</li>
                                    <li>19h – 8h : Partager le dîner et la nuit 1 Bénévole</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col">
                            <h6 style={{ textAlign: 'center', marginTop: "5%", padding: "2%" }} id="h2Home"> Pour plus de renseignements, vous pouvez vous adresser à :</h6>
                            <span style={{ fontSize: '1em', textAlign: "center", fontWeight: "bold" }}>
                                <p>Jean Sutter (Responsable)   <i class="fas fa-phone-square-alt fa-lg" style={{ color: '#37628d' }}></i>  06 03 99 88 35   <i class="fas fa-envelope fa-lg" style={{ color: '#37628d' }}></i>  jean.sutter@orange.fr
                                    </p>
                                <p>Christian Homolle   <i class="fas fa-phone-square-alt fa-lg" style={{ color: '#37628d' }}></i>  06 07 76 21   <i class="fas fa-envelope fa-lg" style={{ color: '#37628d' }}></i>  christianhomolle@yahoo.fr
                                    </p>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <SocialIcons />
        </Styles>



    )
}