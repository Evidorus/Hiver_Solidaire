import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch} from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Agenda() {
  const [planning, setPlanning] = useState([]);
  const [activité, setActivity] = useState();
  const [nom, setNom] = useState();
  const [prénom, setPrénom] = useState();

  useEffect(() => {
    RemovePlanning();
  }, []);

  const RemovePlanning = () => {
    return fetch("http://localhost:8000/planning")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setPlanning(response);
        setActivity(response);
        setNom(response);
        setPrénom(response);
      });
  };

  const AddActivity = (id) => {
    fetch(`http://localhost:8000/addplanning`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        return RemovePlanning(nom, prénom)
      });
  };

  const refreshPage = () => {
    window.location.reload(false)
  }

  const ckeckPlanning = (date, activité) => {
    const benevole = planning.find((element) => {
      return element.date === date && element.activité === activité;
    }).bénévole;
    if (benevole) {
      return (
        <>
          <p>{benevole.nom}</p>
          <p>{benevole.prénom}</p>
          <Popup trigger={<button> INFOS </button>} position="right center">
            <div>
              <p>Nom :{benevole.nom}</p>
              <p>Prénom :{benevole.prénom}</p>
              <p>Email :{benevole.email}</p>
              <p>Numéro :{benevole.numero}</p>
            </div>
          </Popup>
        </>
      );
    } else {
      const activity = planning.find((element) => {
        return element.activité === activité && element.date === date;
      })._id;
      return (
        <button
          type="button"
          onClick={() => {
            AddActivity(activity); refreshPage()
          }}
        >
          S'inscrire
        </button>
      );
    }
  };
  return (
    <BrowserRouter>
      {planning.length === 0 ? (
        <p>loading</p>
      ) : (
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
                <th scope="row">
                  Fournir et partager le petit déjeuner entre 7h à 8h
                </th>
                <td>
                  {ckeckPlanning(
                    "2022-01-02T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-02T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}
                </td>
                <td>
                  {" "}
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}{" "}
                </td>
                <td>
                  {" "}
                  {ckeckPlanning(
                    "2022-01-02T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}{" "}
                </td>
                <td>
                  {" "}
                  {ckeckPlanning(
                    "2022-01-02T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-08T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}{" "}
                </td>
                <td>
                  {" "}
                  {ckeckPlanning(
                    "2022-01-02T23:00:00.000Z",
                    "Fournir et partager le petit déjeuner"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">Préparer et partager le repas à 12 h</th>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-03T23:00:00.000Z",
                    "Préparer et partager le repas"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Préparer le repas chez soi et le tenir à disposition
                </th>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-04T23:00:00.000Z",
                    "Préparer le repas chez soi et le tenir à disposition"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">Récupérer le repas et le partager</th>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-05T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}{" "}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
                <td>
                  {ckeckPlanning(
                    "2022-01-06T23:00:00.000Z",
                    "Récupérer le repas et le partager"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">Passer la nuit</th>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
                <td>
                  {ckeckPlanning("2022-01-07T23:00:00.000Z", "Passer la nuit")}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <Switch></Switch>
    </BrowserRouter>
  );
}
export default Agenda;
