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

  {/*debut de ma fonction */}
  const handleChange = (event) => {
    setUserListe({ value: event.target.value });
  }

  const handleSubmit = (event) => {  
    alert('A name was submitted: ' + userListe);
    setUserListe("");
  };

   {/*fin de ma fonction */}

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

                </button> 
                {/*debut de ma fonction */}
                <form onSubmit={handleSubmit}>
                  <label>
                    <input type="texte" value={userListe} />
                  </label>
                  <button style={{ padding: 8 }} onChange={handleChange} className="btn btn-primary">delete</button>

                </form>
                {/*fin de ma fonction */}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
