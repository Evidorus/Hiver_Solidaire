import React, { useEffect, useState } from "react";
import moment from 'moment'

export default function Liste() {
  const [userListe, setUserListe] = useState([
    {
      date:"01-04-2021",
      activité: "sport"
    },
    {
      date:"03-04-2021",
      activité: "sport"
    },
    {
      date:"04-04-2021",
      activité: "sport"
    },
    {
      date:"05-04-2021",
      activité: "sport"
    },
  ]);


  


{/* useEffect(() => {
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
 */}  

  {/*debut de ma fonction */}
  

  const handleDelete = (index) => {  
    let newArray = [];
     // console.log(index)
     // console.log(userListe)
        newArray = userListe.filter((user, indexEl) =>!(indexEl == index));
       // console.log(newArray);
        setUserListe(newArray)
  //  alert('etes-vous sur de supprimer  :' +setUserListe([]));
 };

   {/*fin de ma fonction */}

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", width: "50%" }}>Liste et dates des activités </h1>
      {userListe.map((response, index) => {
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
                
                   <button style={{ padding: 8 }}  onClick={()=> handleDelete(index)} className="btn btn-primary">delete</button>

                
                {/*fin de ma fonction */}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
