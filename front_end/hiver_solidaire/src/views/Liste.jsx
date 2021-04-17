import React, { useEffect, useState } from "react";
import '../App.css';
import { Styles } from '../components/styles';
import moment from 'moment';
import { Modal } from 'antd';

export default function Liste() {
  const [userListe, setUserListe] = useState([]);

  // const du popup annulation activité : A voir : 1/insérer le nom activité + date -2/ modifier le fond lors de l'affichage
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    fetch("http://localhost:8000/liste", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUserListe(response);
      });
  }, []);

  const annulation = (action) => {
    console.log(action.activité)
    fetch("http://localhost:8000/removeliste", {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
      body: JSON.stringify(action),
    })
      .then((response) => { response.json() })
      .then((response) => {
        console.log(response)
      })
  }

  const refreshPage = () => {
    window.location.reload(false);
  };

  // fonctions du popup confirmation
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    refreshPage()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // ------------------------------

  return (
    <Styles>
      <div className="container  mt-5 d-flex justify-content-center liste">
        <h3 style={{ textAlign: "center", margin: '30px', color: 'white' }}>Récapitulatif des choix</h3>
        {userListe.map((response) => {
          return (
            < >
              <div className="card">
                <h4 className="card-header">{moment(response.date).format("DD MMM YY")}</h4>
                <div className="card-body">
                  <h6 className="card-text">
                    {response.activité}
                  </h6>
                  <button onClick={() => { annulation(response); showModal() }} className="btn btn-primary">
                    Annulation
                </button>
                  {/*  popup  annulation*/}
                  <Modal title="Confirmation " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p style={{ fontWeight: "bold", color: "red" }}>Veuillez confirmer votre annulation</p>
                  </Modal>
                  {/*  ---------------- */}

                </div>
              </div>
            </>
          );
        })}
      </div>

    </Styles>

  );
}
