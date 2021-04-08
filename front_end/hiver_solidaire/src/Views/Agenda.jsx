import React, {useState} from 'react'

function Agenda() {
    const [activitéUne, setActivitéUne] = useState('')
    // const [activitéDeux, setActivitéDeux] = useState('')
    // const [activitéTrois, setActivitéTrois] = useState('')
    // const [activitéQuatre, setActivitéQuatre] = useState('')
    // const [activitéCinq, setActivitéCinq] = useState('')

    // const un = "Fournir et partager le petit déjeuner";
    // const deux = "Préparer et partager le repas,";
    // const trois = "Préparer le repas chez soi et le tenir à disposition";
    // const quatre = "Récupérer le repas et le partager";
    // const cinq = "Passer la nuit";

    const recupUn = (value) => {
        setActivitéUne(value)
        console.log(activitéUne)
    }

    return (
        <>

            <table class="table table2">
                <thead>
                    <tr>
                        <th scope="col">Créneaux</th>
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
                        <th scope="row">1</th>

                        <td>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>Choose...</option>
                                    <option value="un">firstActivity</option>
                                    <option value="deux">secondActivity</option>
                                    <option value="trois">thirdActivity</option>
                                    <option value="quatre">fourthActivity</option>
                                    <option value="cinq">fifthActivity</option>
                                </select>
                                <button class="btn btn-outline-secondary" onClick={recupUn} type="button">Send</button>
                            </div>
                        </td>
                        <td>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>Choose...</option>
                                    <option value="1">firstActivity</option>
                                    <option value="2">secondActivity</option>
                                    <option value="3">thirdActivity</option>
                                    <option value="3">fourthActivity</option>
                                    <option value="3">fifthActivity</option>
                                </select>
                                <button class="btn btn-outline-secondary" type="button">Send</button>
                            </div>
                        </td>
                        <td>  <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">firstActivity</option>
                                <option value="2">secondActivity</option>
                                <option value="3">thirdActivity</option>
                                <option value="3">fourthActivity</option>
                                <option value="3">fifthActivity</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div></td>
                        <td>  <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">firstActivity</option>
                                <option value="2">secondActivity</option>
                                <option value="3">thirdActivity</option>
                                <option value="3">fourthActivity</option>
                                <option value="3">fifthActivity</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div></td>
                        <td>  <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">firstActivity</option>
                                <option value="2">secondActivity</option>
                                <option value="3">thirdActivity</option>
                                <option value="3">fourthActivity</option>
                                <option value="3">fifthActivity</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div></td>
                        <td>  <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">firstActivity</option>
                                <option value="2">secondActivity</option>
                                <option value="3">thirdActivity</option>
                                <option value="3">fourthActivity</option>
                                <option value="3">fifthActivity</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div></td>
                        <td>  <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">firstActivity</option>
                                <option value="2">secondActivity</option>
                                <option value="3">thirdActivity</option>
                                <option value="3">fourthActivity</option>
                                <option value="3">fifthActivity</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
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

            <table class="table table2">
                <thead>
                    <tr>
                        <th scope="col">Créneaux</th>
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
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row">5</th>
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
    )
}

export default Agenda;