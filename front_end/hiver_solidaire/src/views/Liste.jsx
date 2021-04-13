import React, { useEffect, useState } from "react";
import { Styles } from '../components/styles';
import moment from 'moment';

export default function Liste() {
  const [userListe, setUserListe] = useState([]);


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
                  {/* <button className="btn btn-primary">
                  Annulation
                </button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>

    </Styles>

  );
}
