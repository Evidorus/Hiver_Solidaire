import React, {useEffect, useState} from 'react';

function Agenda() {
    const [planning, setPlanning] = useState([]);
    useEffect(() => {
        return fetch("http://localhost:8000/planning")
            .then((response) => { return response.json() })
            .then((response) => {
                console.log(response)
                setPlanning(response)
            })
            }, [])

    const ckeckPlanning = ( date,activité)=>{
        const benevole = planning.find((element)=>{
            console.log(element)
            return(
                element.date === date && element.activité === activité 

            )
        })
        .bénévole;

        if(benevole ){
            return(
                <p>{benevole}</p>
            )
        }else{
            return(
                <button>S'inscrire</button>
            )
            
        }
        
        
    }


    return (
       
       <>

       {planning.length === 0 ? <p>loading</p> : (
           <>
           <div>
                <ul>
                    <li>Fournir et partager le petit déjeuner entre 7h à 8h </li>
                    <li> Préparer et partager le repas à 12 h </li>
                    <li>Préparer le repas chez soi et le tenir à disposition </li>
                    <li>Récupérer le repas et le partager </li>
                    <li>Passer la nuit</li>
                </ul>
            </div>
            <table class="table table2">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Lundi</th>
                        <th scope="col">Mardi</th>
                        <th scope="col">Mercredi</th>
                        <th scope="col">Jeudi</th>
                        <th scope="col">Vendredi</th>
                        <th scope="col">Samedi</th>
                        <th scope="col">Dimanche</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Fournir et partager le petit déjeuner entre 7h à 8h</th>
                        <td>

                           {ckeckPlanning("2022-02-28T23:00:00.000Z","Fournir et partager le petit déjeuner")}
                        </td>
                        <td>
                       {ckeckPlanning("2022-03-31T22:00:00.000Z","Préparer et partager le repas")}
                        </td>
                        <td> {ckeckPlanning("2022-04-30T22:00:00.000Z","Préparer le repas chez soi et le tenir à disposition")} </td>
                        <td> </td>
                        <td>  </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th scope="row">Préparer et partager le repas à 12 h</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Préparer le repas chez soi et le tenir à disposition</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Récupérer le repas et le partager</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Passer la nuit</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
           </>
       ) }
            
        </>
    )
}
export default Agenda;