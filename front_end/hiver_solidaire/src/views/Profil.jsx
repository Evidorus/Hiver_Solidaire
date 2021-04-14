import React, { useEffect, useState } from "react";
import "../App.css";

export default function Profil() {
  const [User, setUser] = useState([]);
  const [image, setImage] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/profil", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  }, []);

  const addImage = () => {
    const formData = new FormData();
     formData.append('image',image);
     fetch("http://localhost:8000/profilPicture",{
        headers:{
          authorization: "Bearer " + localStorage.getItem("token"),
        },
         method:"POST",
         body:formData,
     })
  };

  const addProfilimage = (event) => {
    setImage(event.target.files[0])
}
const refreshProfilPage = () => {
  window.location.reload(false)
}



  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-8">
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src={User.image ? User.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                className="rounded"
                width="155"
                alt="Profil"
              />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0">
                {User.prénom} {User.nom}
              </h4>
              <span>{User.role}</span>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  <span className="articles">Age</span>
                  <span className="number1">{User.age}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="followers">Email</span>
                  <span className="number2">{User.email}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="rating">Téléphone</span>
                  <span className="number3">{User.numero}</span>
                </div>
              </div>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <button className="btn btn-sm btn-outline-primary w-100">
                  Chat
                  </button>
                <button className="btn btn-sm btn-primary w-100 ml-2">
                  Follow
                  </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <input type="file" onChange={addProfilimage} />
      <button 
       onClick={() => {
       addImage(); refreshProfilPage()
      }}
      >changer mon image</button>
    </>
  );
}
