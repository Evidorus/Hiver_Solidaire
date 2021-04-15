import React, { useEffect, useState } from "react";
import '../App.css';
import { Styles } from '../components/styles';
import moment from 'moment';

export default function Liste() {
  const [userListe, setUserListe] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8000/liste", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUserListe(response);
      });
    }, 1000);
    return () => clearInterval(interval);
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
    .then((response) => {response.json()})
    .then((response) => {
      console.log(response)
    })
  }

  const refreshPage = () => {
    window.location.reload(false);
  };

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
                  <button onClick={() => {annulation(response); refreshPage()}} className="btn btn-primary">
                  Annulation
                </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

    </Styles>

  );
}
