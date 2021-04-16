import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Styles } from '../components/styles';
import Liste from "./Liste";


export default function Profil() {
  const [User, setUser] = useState([]);
  const [image, setImage] = useState({});

  let history = useHistory()

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8000/profil", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setUser(response);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const addImage = () => {
    const formData = new FormData();
    formData.append('image', image);
      fetch("http://localhost:8000/profilPicture", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        method: "POST",
        body: formData,
      })
  };
  const addProfilimage = (event) => {
    setImage(event.target.files[0])
  }
  const refreshProfilPage = () => {
    window.location.reload(false)
  }
  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }
  return (
    <Styles>
      <div className="container mt-5 d-flex justify-content-center liste">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src={User.image ? User.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                className="rounded"
                width="155"
                alt="Profil"
              />
            </div>
            <div className="row">
              <div>
                <h4 className="mb-0 mt-0" style={{ textAlign: "center", margin: "20px", padding: "20px" }}>
                  {User.prénom} {User.nom}
                </h4>
              </div>
              <div className="ml-3 w-100">
                <div className="p-3 mt-3 bg-primary d-flex justify-content-end rounded text-white stats">
                  <div className="d-flex flex-column">
                    <span className="followers" style={{ fontSize: "1.2em" }}>Email</span>
                    <span className="number2" style={{ fontSize: "1.3em" }}>{User.email}</span>
                  </div>
                  <div className="d-flex flex-column" style={{ marginLeft: "30px" }}>
                    <span className="rating" style={{ fontSize: "1.2em" }}>Téléphone</span>
                    <span className="number3" style={{ fontSize: "1.3em" }}><a className="number3" style={{ fontSize: "1.3em" }} href="tel:{User.numero}">{User.numero}</a></span>
                  </div>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center">
                  <button onClick={logout} className="btn btn-danger btn-sm px-3 "
                    style={{ margin: "10px", padding: "10px" }}>
                    Déconnection
                  </button>
                </div>
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
      <Liste />
    </Styles>
  );
}