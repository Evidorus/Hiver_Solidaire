import React, { useEffect, useState } from "react";
import { Styles } from "../components/styles";
import "../App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Agenda() {
  const [planning, setPlanning] = useState([]);
  const [activité, setActivity] = useState();
  const [nom, setNom] = useState();
  const [prénom, setPrénom] = useState();
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    RemovePlanning();
  }, [page]);

  const RemovePlanning = () => {
    return fetch(`http://localhost:8000/planning?limit=35&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setPlanning(response);
        setActivity(response);
        setNom(response);
        setPrénom(response);
        setNumberOfPage(Math.floor(response.count / 35));
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
        return RemovePlanning(nom, prénom);
      });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const previousPage = () => {
    if (page >= 35) {
      setPage(page - 35);
    }
  };
  const nextPage = () => {
    setPage(page + 35);
  };

  const paginationItem = () => {
    const pages = [];
    for (let i = 0; i < numberOfPage; i++) {
      pages.push(
        <li class="page-item">
          <button class="page-link" onClick={() => setPage(i * 35)}>
            {i + 1}
          </button>
        </li>
      );
    }
  };

  const ckeckPlanning = (date, activité) => {
    const benevole = planning.find((element) => {
      return element.date === date && element.activité === activité;
    }).bénévole;
    if (benevole) {
      return (
        <Styles>
          <p className="nomAgenda">{benevole.nom}</p>
          <p className="nomAgenda">{benevole.prénom}</p>
          <Popup
            trigger={
              <button className="btn btn-warning btn-sm px-3 ">Info</button>
            }
            position="right center"
          >
            <div>
              <p className="nomAgenda">Nom :{benevole.nom}</p>
              <p className="nomAgenda">Prénom :{benevole.prénom}</p>
              <p>Email :{benevole.email}</p>
            </div>
          </Popup>
        </Styles>
      );
    } else {
      const activity = planning.find((element) => {
        return element.activité === activité && element.date === date;
      })._id;
      return (
        <button
          type="button"
          className="btn btn-danger btn-sm px-3 "
          style={{ margin: "10px", padding: "10px" }}
          onClick={() => {
            AddActivity(activity);
            refreshPage();
          }}
        >
          S'inscrire
        </button>
      );
    }
  };
  return (
    <BrowserRouter>
      <Styles>
        {planning.length === 0 ? (
          <p>loading</p>
        ) : (
          <div className="container">
            <div className="table-responsive">
              <h2 style={{ margin: "20px" }}>
                Inscription aux différentes activités
              </h2>
              {/* <div className="row">
                <h2 style={{ margin: "20px" }}>Inscription aux différentes activités</h2>
                <ul style={{ textAlign: "center", padding: "0" }}>
                  <li> <b>7h à 8h </b>: Fournir et partager le petit déjeuner </li>
                  <li> <b>12h </b> : Préparer et partager le repas</li>
                  <li><b>18h à 20h </b> : Préparer le repas chez soi et le tenir à disposition </li>
                  <li><b>20h à 22h </b> : Récupérer le repas et le partager </li>
                  <li><b>22h à 8h </b> : Passer la nuit</li>
                </ul>
              </div> */}
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <button
                      class="page-link"
                      aria-label="Previous"
                      onClick={previousPage}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {paginationItem()}
                  <li class="page-item">
                    <button
                      class="page-link"
                      aria-label="Next"
                      onClick={nextPage}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
              <table className="table table-hover table-bordered align-middle">
                <thead style={{ backgroundColor: "#ddac6e" }}>
                  <tr
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "bolder",
                    }}
                  >
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
                      <b>7h à 8h </b>: Fournir et partager le petit déjeuner
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
                    <th scope="row">
                      <b>12h </b> : Préparer et partager le repas
                    </th>
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
                      <b>18h à 20h </b> : Préparer le repas chez soi et le tenir
                      à disposition
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
                    <th scope="row">
                      <b>20h à 22h </b> : Récupérer le repas et le partager{" "}
                    </th>
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
                    <th scope="row">
                      <b>22h à 8h </b> : Passer la nuit
                    </th>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                    <td>
                      {ckeckPlanning(
                        "2022-01-07T23:00:00.000Z",
                        "Passer la nuit"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <Switch></Switch>
      </Styles>
    </BrowserRouter>
  );
}
export default Agenda;
