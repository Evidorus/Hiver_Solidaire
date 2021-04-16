import React from 'react';
import YoutubeEmbed from "../components/YoutubeEmbed";
import "../App.css";
import { Styles } from '../components/styles';
import SocialIcons from '../components/SocialIcons';


function Home() {

    return (
        <Styles>
            <div className="container" >
                <div className="row p-3 border bg-light " id='rowHome'>
                    <h1 style={{ textAlign: "center", padding: "30px" }}>Hiver Solidaire</h1>
                    <div className="col-sm-8">
                        <YoutubeEmbed embedId="QLO7-CupocE" />
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <p style={{ marginTop: 0, fontSize: '1.3em' }} className="text-one-page">
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
                            <p style={{ marginTop: 0, fontSize: '1.3em' }}>
                                Hiver solidaire ne s’arrête pas avec la pandémie. Les paroisses
                                s’adaptent au protocole sanitaire (attestations, recommandations)
                                pour mettre à l’abri des accueillis en toute sérénité.
                            </p>
                            <a href="https://www.paris.catholique.fr/-hiver-solidaire-2711-.html" class="btn btn-warning btn-sm px-3" target="_blank">En savoir +</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ fontSize: '1.3em', margin: "10px", padding: '20px' }}>
                    <h2 style={{ textAlign: 'left' }} id="h2Home">Quelques chiffres pour Paris</h2>
                    <ul>
                        <li>140 places proposées pour des personnes qui sont à la rue</li>
                        <li>37 paroisses participantes</li>
                        <li>3000 bénévoles</li>
                    </ul>
                </div>
                <div >
                    <div className="row g-2">
                        <div className="col-12">
                            <div className="p-3 border bg-light" id='rowHome'>
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