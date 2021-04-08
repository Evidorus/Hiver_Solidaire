import React from 'react';
import  { Component, useState } from 'react';
import Select from 'react-select'
function Agenda() {

    const activities = [
        {
            value: 1,
            label: 'Fournir et partager le petit déjeuner'
        },
        {
            value: 2,
            label: 'Préparer et partager le repas'
        },
        {
            value: 3,
            label: 'Préparer le repas chez soi et le tenir à disposition'
        },
        {
            value: 4,
            label: 'Récupérer le repas et le partager'
        },
        {
            value: 5,
            label: 'Passer la nuit'
        }
    ];
    const [result, choixValue] = useState(activities.label);
    const choixHandle = e => {
        choixValue(e.label);
        console.log(result, choixValue)
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
                        <th scope="row" />
                        <td>
                            <Select
                                options={activities}
                                onChange={choixHandle} />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                            >Envoyer</button>
                        </td>
                        <td>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>Choose...</option>
                                    <option value="1" >firstActivity</option>
                                    <option value="2" >secondActivity</option>
                                    <option value="3" >thirdActivity</option>
                                    <option value="4" >fourthActivity</option>
                                    <option value="5" >fifthActivity</option>
                                </select>
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                >Envoyer</button>
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
                        <th scope="row"></th>
                        <td><center>
                            <p>{result}</p>
                        </center></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
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