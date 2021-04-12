import React, { useEffect, useState } from 'react';


function Agenda() {

    const [planning, setPlanning] = useState([]);
    const [activité, setActivity] = useState();
    const [nom, setNom]=useState();
    const [prénom,setPrénom]=useState();


    useEffect(() => {
        RemovePlanning()
            }, [])


    const RemovePlanning=()=>{
        return fetch("http://localhost:8000/planning")
        .then((response) => { return response.json() })
        .then((response) => {
            console.log(response)
            setPlanning(response)
            setActivity(response)
            setNom(response)
            setPrénom(response)
            
        })
    }

            const AddActivity = (id) => {
                fetch(`http://localhost:8000/addplanning`,
                   {
                       method: "POST",
                       headers: { 
                        'Authorization': "Bearer " + localStorage.getItem('token'),
                        'Content-type': 'application/json' 
                        },
                       body: JSON.stringify({
                           id: id
                       })  
                   }).then((response) => { return response.json() })
                   .then((response) => {
                       console.log(response)
                       return RemovePlanning(nom, prénom)
                        
                   })
           }


    const ckeckPlanning = ( date,activité)=>{
        const benevole = planning.find((element)=>{
            return(
                element.date === date && element.activité === activité

            )
        })
        .bénévole
        if(benevole ){
            return(<>
                <p>{benevole.nom}</p>
                <p>{benevole.prénom}</p>

                </>
            )
        }else{
            const activity = planning.find((element)=>{
                return(
                    element.activité ===activité && element.date===date
                )
            })
            ._id
            return(
                <button type = "button"  onClick={()=>{AddActivity(activity)}} >S'inscrire</button>
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
                                <th scope="col">Lundi 03/01/2022</th>
                                <th scope="col">Mardi 04/01/2022</th>
                                <th scope="col">Mercredi 05/01/2022</th>
                                <th scope="col">Jeudi 06/01/2022</th>
                                <th scope="col">Vendredi 07/01/2022</th>
                                <th scope="col">Samedi 08/01/2022</th>
                                <th scope="col">Dimanche 02/01/2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">7h à 8h : Fournir et partager le petit déjeuner</th>
                                <td value={activité}>{ckeckPlanning("2022-01-02T23:00:00.000Z", "Fournir et partager le petit déjeuner")}</td>
                                <td value={activité}>{ckeckPlanning("2022-01-02T23:00:00.000Z", "Fournir et partager le petit déjeuner")}</td>
                                <td value={activité}> {ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")} </td>
                                <td value={activité}> {ckeckPlanning("2022-01-02T23:00:00.000Z", "Fournir et partager le petit déjeuner")} </td>
                                <td value={activité}>   {ckeckPlanning("2022-01-02T23:00:00.000Z", "Fournir et partager le petit déjeuner")}</td>
                                <td value={activité}>{ckeckPlanning("2022-01-08T23:00:00.000Z", "Fournir et partager le petit déjeuner")} </td>
                                <td value={activité}>  {ckeckPlanning("2022-01-02T23:00:00.000Z", "Fournir et partager le petit déjeuner")}</td>
                            </tr>
                            <tr>
                                <th scope="row">12 h : Préparer et partager le repas </th>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>
                                <td>{ckeckPlanning("2022-01-03T23:00:00.000Z", "Préparer et partager le repas")}</td>

                            </tr>
                            <tr>
                                <th scope="row">19h : Préparer le repas chez soi et le tenir à disposition</th>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                                <td>{ckeckPlanning("2022-01-04T23:00:00.000Z", "Préparer le repas chez soi et le tenir à disposition")}</td>
                            </tr>
                            <tr>
                                <th scope="row">20h : Récupérer le repas et le partager</th>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                                <td>{ckeckPlanning("2022-01-05T23:00:00.000Z", "Récupérer le repas et le partager")} </td>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                                <td>{ckeckPlanning("2022-01-06T23:00:00.000Z", "Récupérer le repas et le partager")}</td>
                            </tr>
                            <tr>
                                <th scope="row">22h au matin : Passer la nuit</th>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                                <td>{ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}

        </>
    )
}
export default Agenda;