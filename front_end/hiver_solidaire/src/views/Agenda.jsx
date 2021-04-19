import React, { useEffect, useState } from "react";
import { Styles } from "../components/styles";
import "../App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import moment from 'moment';
import { Modal, Spin, Alert } from 'antd';


function Agenda() {
  const [planning, setPlanning] = useState([]);
  // const [activité, setActivity] = useState();
  const [semaineStart, setSemaineStart] = useState([])
  const [semaineEnd, setSemaineEnd] = useState([])
  const [nom, setNom] = useState();
  const [prénom, setPrénom] = useState();
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [page, setPage] = useState(0);
  const [connected, setConnected] = useState(false)

  // const du popup confirmation : A voir : 1/insérer le nom activité + date -2/ modifier le fond lors de l'affichage
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Vous retrouverez votre choix de créneaux dans votre page Profil");



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
        // setActivity(response);
        setNom(response);
        setPrénom(response);
        setNumberOfPage(Math.floor(response.count / 35));
        setSemaineStart(moment(response[0].date).format("DD MMM YYYY"))
        setSemaineEnd(moment(response[30].date).format("DD MMM YYYY"))
        setConnected(localStorage.getItem("token"))
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
    if (page >= 0) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
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


  // fonctions du popup confirmation
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText();
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  // ------------------------------


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
              <i className="fas fa-info-circle fa-lg" style={{ color: '#f69d3c' }}></i>
            }
            position="right center"
          >
            <div>
              <p className="nomAgenda">Nom :{benevole.nom}</p>
              <p className="nomAgenda">Prénom :{benevole.prénom}</p>
              <p>Email :{benevole.email}</p>
              <p>Numéro :{benevole.numero}</p>
            </div>
          </Popup>
        </Styles>
      );
    } else {
      const activity = planning.find((element) => {
        return element.activité === activité && element.date === date;
      })._id;
      return (
        <div>
          <button
            type="button"
            className="btn btn-danger btn-sm px-3 "
            style={{ margin: "10px", padding: "10px" }}
            onClick={() => {
              AddActivity(activity);
              showModal();
            }}
          >
            S'inscrire
        </button>

          {/*  confirmation */}
          <Modal
            title="Validation de l'inscription"
            visible={visible}
            footer={null}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={refreshPage}
          >
            <p>{modalText}</p>
          </Modal>
          {/*  ---------------- */}
        </div>

      );
    }
  };
  return (
    <BrowserRouter>
      <Styles>
        {planning.length === 0 ? (
          <Spin tip="Loading...">
            <Alert
              message="Le planning est réservé aux bénévoles inscrits. Pour y accéder, vous devez vous inscrire sur le site ou vous connecter"
              description="Page en cours de téléchargement"
              type="info"
              style={{ textAlign: "center", padding: "20%" }}
            />
          </Spin>

        ) : (
          <div className="container liste">
            <div className="table-responsive">
              <h2 style={{ margin: "5%" }}>Inscription aux différentes activités</h2>
              <div className="row" style={{ margin: "1%" }} >
                <div className="col col-md-4 m-auto">
                  <button
                    className="btn btn-danger "
                    aria-label="Previous"
                    onClick={previousPage}
                  >
                    <span aria-hidden="false">&laquo; Semaine précédente</span>
                  </button>
                </div>
                <div className="col col-md-4 m-auto" style={{ textAlign: "center" }}>
                  <b>Semaine du {semaineStart} au {semaineEnd}</b>
                  {paginationItem()}
                </div>

                <div className="col col-md-4">
                  <button
                    className="btn btn-danger"
                    aria-label="Next"
                    onClick={nextPage}
                  >
                    <span aria-hidden="true">Semaine suivante &raquo;</span>
                  </button>
                </div>


              </div>



              <div className="container d-flex">
                <table className="table table-hover table-bordered align-middle " >
                  <thead style={{ backgroundColor: "#ddac6e" }}>
                    <tr
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "bolder",
                      }}
                    >
                      <th scope="col">Activités</th>
                      <th scope="col"><p>Lundi</p>{moment(planning[0].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Mardi</p>{moment(planning[5].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Mercredi</p>{moment(planning[10].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Jeudi</p>{moment(planning[15].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Vendredi</p>{moment(planning[20].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Samedi</p>{moment(planning[25].date).format("DD MMM YYYY")}</th>
                      <th scope="col"><p>Dimanche</p>{moment(planning[30].date).format("DD MMM YYYY")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <th scope="row" id="tabledejeuner">
                        <p><b>7h à 8h</b></p>Préparer et partager le petit déjeuner
                    </th>
                      <td id="tabledejeuner">
                        {ckeckPlanning(
                          `${planning[0].date}`,
                          `${planning[0].activité}`
                        )}
                      </td>
                      <td id="tabledejeuner">
                        {ckeckPlanning(
                          `${planning[5].date}`,
                          `${planning[5].activité}`
                        )}
                      </td>
                      <td id="tabledejeuner">
                        {" "}
                        {ckeckPlanning(
                          `${planning[10].date}`,
                          `${planning[10].activité}`
                        )}{" "}
                      </td>
                      <td id="tabledejeuner">
                        {" "}
                        {ckeckPlanning(
                          `${planning[15].date}`,
                          `${planning[15].activité}`
                        )}{" "}
                      </td>
                      <td id="tabledejeuner">
                        {" "}
                        {ckeckPlanning(
                          `${planning[20].date}`,
                          `${planning[20].activité}`
                        )}
                      </td>
                      <td id="tabledejeuner">
                        {ckeckPlanning(
                          `${planning[25].date}`,
                          `${planning[25].activité}`
                        )}{" "}
                      </td>
                      <td id="tabledejeuner">
                        {" "}
                        {ckeckPlanning(
                          `${planning[30].date}`,
                          `${planning[30].activité}`
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="tablemidi">
                        <p><b>18h</b></p>Préparer le dîner et le porter au 92bis
                    </th>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[1].date}`,
                          `${planning[1].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[6].date}`,
                          `${planning[6].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[11].date}`,
                          `${planning[11].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[16].date}`,
                          `${planning[16].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[21].date}`,
                          `${planning[21].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[26].date}`,
                          `${planning[26].activité}`
                        )}
                      </td>
                      <td id="tablemidi">
                        {ckeckPlanning(
                          `${planning[31].date}`,
                          `${planning[31].activité}`
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="tablesouper">
                        <p><b>19h-21h</b></p>Préparer, servir et partager le dîner
                      à disposition
                    </th>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[2].date}`,
                          `${planning[2].activité}`
                        )}
                      </td>
                      <td>
                        {ckeckPlanning(
                          `${planning[7].date}`,
                          `${planning[7].activité}`
                        )}
                      </td>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[12].date}`,
                          `${planning[12].activité}`
                        )}
                      </td>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[17].date}`,
                          `${planning[17].activité}`
                        )}
                      </td>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[22].date}`,
                          `${planning[22].activité}`
                        )}
                      </td>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[27].date}`,
                          `${planning[27].activité}`
                        )}
                      </td>
                      <td id="tablesouper">
                        {ckeckPlanning(
                          `${planning[32].date}`,
                          `${planning[32].activité}`
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="tableapressouper">
                        <p><b>18h30-21h</b></p>Réchauffer, servir et partager le dîner{" "}
                      </th>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[3].date}`,
                          `${planning[3].activité}`
                        )}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[8].date}`,
                          `${planning[8].activité}`
                        )}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[13].date}`,
                          `${planning[13].activité}`
                        )}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[18].date}`,
                          `${planning[18].activité}`
                        )}{" "}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[23].date}`,
                          `${planning[23].activité}`
                        )}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[28].date}`,
                          `${planning[28].activité}`
                        )}
                      </td>
                      <td id="tableapressouper">
                        {ckeckPlanning(
                          `${planning[33].date}`,
                          `${planning[33].activité}`
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="tablenuit">
                        <p><b>19h-8h</b></p>Partager le dîner et la nuit
                    </th>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[4].date}`,
                          `${planning[4].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[9].date}`,
                          `${planning[9].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[14].date}`,
                          `${planning[14].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[19].date}`,
                          `${planning[19].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[24].date}`,
                          `${planning[24].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[29].date}`,
                          `${planning[29].activité}`
                        )}
                      </td>
                      <td id="tablenuit">
                        {ckeckPlanning(
                          `${planning[34].date}`,
                          `${planning[34].activité}`
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        )}
        <Switch></Switch>
      </Styles>
    </BrowserRouter>
  );
}
export default Agenda;