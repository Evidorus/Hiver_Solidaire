import React from 'react';
import YoutubeEmbed from "../components/YoutubeEmbed";
import "../App.css";
import { Styles } from '../components/styles';
import { Link } from "react-router-dom";
import SocialIcons from '../components/SocialIcons';


function Home() {

    return (
        <Styles>
            <div className="container" >
                <div className="row p-3 " id='rowHome'>
                    <h1 style={{ textAlign: "center", padding: "30px" }}>Hiver Solidaire</h1>
                    <div className="col-sm-8">
                        <YoutubeEmbed embedId="QLO7-CupocE" />
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <p style={{ marginTop: 0, fontSize: '1.2em' }} className="text-one-page">
                                Depuis 12 ans des paroisses se mobilisent chaque hiver
                                à Paris pour accueillir des personnes à la rue, et leur
                                offrir, outre un abri, la possibilité de reprendre confiance
                                en elles-mêmes, grâce aux relations fraternelles établies
                                dans la durée entre elles et avec des paroissiens
                                bénévoles investis dans cette opération.
                            </p>
                        </div>
                        <div className="col-sm">
                            <h2 style={{ textAlign: 'center' }} id="h2Home"> 2020-2021</h2>
                            <p style={{ marginTop: 0, fontSize: '1.2em' }}>
                                Hiver solidaire ne s’arrête pas avec la pandémie. Les paroisses
                                s’adaptent au protocole sanitaire (attestations, recommandations)
                                pour mettre à l’abri des accueillis en toute sérénité.
                            </p>
                            <a href="https://www.paris.catholique.fr/-hiver-solidaire-2711-.html" class="btn btn-warning btn-sm px-3" target="_blank">En savoir +</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ fontSize: '1.1em', margin: "10px", padding: '20px' }}>
                    <h2 style={{ textAlign: 'left' }} id="h2Home">Quelques chiffres pour Paris</h2>
                    <ul>
                        <li>140 places proposées pour des personnes qui sont à la rue</li>
                        <li>37 paroisses participantes</li>
                        <li>3000 bénévoles</li>
                    </ul>
                </div>


                <div className="row p-3 " id='rowHome'>
                    <h1 style={{ textAlign: "center", padding: "30px" }}>Actualité</h1>
                    <div className="col-sm-8">
                        <h5 style={{ textAlign: "center" }}>Pour la onzième année consécutive, notre Paroisse participe à Hiver Solidaire.</h5>


                        <div className="col md-4 col-lg">
                            <p className="card-text" style={{ marginTop: 0, fontSize: '1.2em' }}><br></br>
                                Après avoir pendant 8 années accueilli 8 personnes de la rue dans la salle Ozanam, depuis 2 ans, nous avons réduit ce nombre à 5 personnes afin de rendre plus chaleureux notre accueil fraternel.
                                <br></br>

                                <div className="col md-4 col-lg">
                                    <br></br>
                                Ces « Accueillis », nous essayons de les connaître au préalable en les trouvant parmi les habitués de l’ Accueil Solidaire du lundi après midi ; ils peuvent également nous être envoyés par des associations « amies ».
                                </div>
                                <div className="col md-4 col-lg">
                                    <br></br>
                                Comme vous le savez, depuis l’ an passé, nous bénéficions, en exclusivité, de la salle Saint Geneviève ce qui permet à tous les Accueillis d’avoir chacun un couchage stable pendant les 10 semaines et de bénéficier d’un petit placard, avec clef, pour les affaires personnelles. Ils ont accès soir et matin à une douche et peuvent, une fois par semaine, faire leur lessive.
                                <br></br>
                                    <br></br>
                                Mais ce relatif confort matériel ne trouve son sens que si nous, les Bénévoles , leur apportons notre chaleur fraternelle et, au final, notre amitié pour leur permettre de vivre 10 semaines dans une « ambiance familiale ».
                                <br></br><br></br>
                                    <Link to="/welcome" className="btn btn-warning btn-sm px-3" >En savoir +</Link>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <div className="col-sm hover-zoomin " >
                                <img src="/imgHS/Paris_eglise_nd_des_champs.jpg" className="liste" style={{ width: "100%", padding: "1%" }} alt="Paroisse Notre Dame des Champs" />
                            </div>
                        </div>
                        <div className="col-sm hover-zoomin liste">
                            <img src="/imgHS/tableHS.jpg" className="liste" style={{ width: "100%", padding: "1%" }} alt="Photo Facebook" />
                        </div>
                    </div>
                </div>

                <div >
                    <div className="row g-2" style={{ padding: "5%" }}>
                        <div className="col-12">
                            <div className="p-3">
                                <h5>Avec le soutien de la Fondation Notre Dame.</h5>
                                <img style={{ width: 400, heigth: 200 }} src="\imgHS\Logo-Fondation-Notre-Dame.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <SocialIcons />
        </Styles>
    )
}

export default Home;