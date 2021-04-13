import React from 'react'
import "./Home.css";

function Home() {

    return (

        <div style={{ marginTop: 0 }} className="container" >

            <div>
                <img style={{ width: 1240, heigth: 200 }} src="\imgHS\image-daccueil.jpg" />
                <div class="icon-container">
                    <a href="https://www.youtube.com/watch?v=QLO7-CupocE" target="blank"><i style={{ fontSize: 60, textAlignVertical: "center", color: 'red' }} class="fab fa-youtube"></i></a>
                </div>
            </div>


            < div style={{ backgroundColor: 'black', width: 1240, heigth: 400 }}>
                <h2 style={{ color: 'white', height: 95, display: 'flex', alignItems: 'center', paddingLeft: 500 }}>Hiver Solidaire</h2>
            </div >

            <div style={{ paddingLeft: 70, paddingRight: 70 }}>
                <p style={{ marginTop: 0, fontSize: '1.3em' }} className="text-one-page">
                    "Depuis 12 ans des paroisses se mobilisent chaque hiver
                    à Paris pour accueillir des personnes à la rue, et leur
                    offrir, outre un abri, la possibilité de reprendre confiance
                    en elles-mêmes, grâce aux relations fraternelles établies
                    dans la durée entre elles et avec des paroissiens
                    bénévoles investis dans cette opération"
            </p>
                <h2 style={{ textAlign: 'center' }}>Hiver solidaire 2020-2021</h2>
                <p style={{ marginTop: 0, fontSize: '1.4em' }}>
                    Hiver solidaire ne s’arrête pas avec la pandémie. Les paroisses
                    s’adaptent au protocole sanitaire (attestations, recommandations)
                    pour mettre à l’abri des accueillis en toute sérénité.
            </p>
                <h3>Quelques chiffres pour Paris :</h3>
            </div>

            <div style={{ marginTop: 0, fontSize: '1.4em', paddingLeft: 90 }}>
                <ul>
                    <li>140 places proposées pour des personnes qui sont à la rue</li>
                    <li>37 paroisses participantes</li>
                    <li>3000 bénévoles</li>
                </ul>
            </div>
            <div class="container">
                <div class="row g-2">
                    <div class="col-12">
                        <div class="p-3 border bg-light">
                            <h4>avec le soutien de la Fondation Notre Dame.</h4><img style={{ width: 400, heigth: 200 }} src="\imgHS\Logo-Fondation-Notre-Dame.png" /></div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home;