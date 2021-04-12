import React, { useEffect, useState } from "react";
import moment from 'moment'

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
    <div className="container">
      <h1 style={{ textAlign: "center", width: "50%" }}>Liste et dates des activités </h1>
      {userListe.map((response) => {
        return (
          < >
            <div className="card">
              <h5 className="card-header">Activité</h5>
              <div className="card-body">
                <h5 className="card-title">{moment(response.date).format("DD MMM YY")}</h5>
                <p className="card-text">
                  {response.activité}
                </p>
                {/* <button className="btn btn-primary">
                  Annulation
                </button> */}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
