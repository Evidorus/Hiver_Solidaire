import React from "react";
import '../App.css';
import { Styles } from '../components/styles';
import SocialIcons from '../components/SocialIcons';



export default function Welcome() {

    return (
        <Styles>
            <div className="container">
                <div className="row p-3  ">
                    <h1 style={{ textAlign: "center", padding: "30px" }}>Hiver Solidaire 2022 : 4 janvier – 14 mars</h1>
                    <div className="row " >
                        <div className="col-md-6">
                            <h5 style={{ textAlign: 'center', marginTop: "2%" }} id="h2Home"> Hiver Solidaire permet d’être au service des plus démunis de nos frères et de rencontrer un monde souvent invisible mais qui est à notre porte.</h5>
                            <p style={{ marginTop: 0, fontSize: '1.2em' }}>
                                Nous avons un double objectif, un peu contradictoire, à savoir :
                                <ul>
                                    <li>Qu’un maximum de paroissiens participe,</li>
                                    <li>Mais aussi que chaque bénévole s’inscrive plusieurs fois pour établir un véritable lien avec nos Accueillis.</li>
                                </ul>
                                C’est pour cette raison que chaque bénévole, à chaque inscription, ne peut s’inscrire que pour 2 missions, afin de laisser de la place à d’autres. Il peut renouveler ses inscriptions chaque semaine.
                                <br></br> <br></br>
                                Grâce à ce nouveau planning, vous avez une vision très claire du niveau de remplissage de chaque semaine et vous pouvez ainsi vous inscrire à la date qui vous vous convient et où vous serez le plus utile.
                                <br></br> <br></br>
                                <p style={{ color: "#37628d", fontWeight: "bolder" }}>Joyeux et fraternel Hiver Solidaire! </p>
                            </p>
                        </div>
                        <div className="col-md-6 hover-zoomin">
                            <img src="/imgHS/welcome3.jpg" className="liste" style={{ width: "100%", margin: "2%" }} alt="Paris en hiver" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col border bg-light " id='rowHome' style={{ margin: "5%" }}>
                                <h5 style={{ textAlign: 'center', margin: "5%" }} id="h2Home">Sur la page Agenda, vous trouverez le planning avec <br></br> 5 créneaux horaires différents</h5>
                                <p style={{ marginTop: 0, fontSize: '1.2em' }} className="text-one-page">
                                    <ul>
                                        <li><b>7h-8h</b>: Préparer et partager le petit déjeuner <em>(1 Bénévole)</em></li>
                                        <li><b>18h</b>:Préparer le dîner et le porter au 92bis <em>(2 Bénévole)</em></li>
                                        <li><b>19h-21h</b>: Préparer, servir et partager le dîner <em>(2 Bénévole)</em></li>
                                        <li><b>18h30-21h</b>: Réchauffer, servir et partager le dîner <em>(1 ou 2 Bénévoles)</em></li>
                                        <li><b>19h-8h</b>: Partager le dîner et la nuit <em>(1 Bénévole)</em></li>
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

            </div>
            <SocialIcons />
        </Styles>



    )
}