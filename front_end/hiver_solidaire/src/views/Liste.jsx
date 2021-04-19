import React, { useEffect, useState } from "react";
import '../App.css';
import { Styles } from '../components/styles';
import moment from 'moment';
import { Modal } from 'antd';

export default function Liste() {
  const [userListe, setUserListe] = useState([]);

  // const du popup confirmation : A voir : 1/insérer le nom activité + date -2/ modifier le fond lors de l'affichage
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Votre annulation a été enregistrée");

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

  return (
    <Styles>
      <div className="container">
        <div className="row ">
          <h3 style={{ textAlign: "center", margin: '30px', color: '#f69d3c' }}>Récapitulatif des choix</h3>
        </div>

        <div className="row mx-auto" >
          {userListe.map((response) => {
            return (
              < >
                <div className="card ">
                  <h4 className="card-header">{moment(response.date).format("DD MMM YY")}</h4>
                  <div className="card-body">
                    <h6 className="card-text">
                      {response.activité}
                    </h6>
                    <button onClick={() => { annulation(response); showModal() }} className="btn btn-danger mx-auto">
                      Annulation
                </button>
                    {/*  confirmation */}
                    <Modal
                      title="Validation de l'annulation"
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
                </div>
              </>
            );
          })}
        </div>

      </div>

    </Styles>

  );
}
