import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Styles } from "../components/styles";
import Liste from "./Liste";
import { Modal } from 'antd';



export default function Profil() {
  const [User, setUser] = useState([]);
  const [image, setImage] = useState({});

  let history = useHistory();


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
    formData.append("image", image);
    fetch("http://localhost:8000/profilPicture", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: "POST",
      body: formData,
    });
  };
  const addProfilimage = (event) => {
    setImage(event.target.files[0]);
  };
  const refreshProfilPage = () => {
    window.location.reload(false);
  };
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  function info() {
    Modal.info({
      title: 'Vous êtes bien déconnecté',
      content: (
        <div>
          <p>Nous vous remercions pour votre participation</p>
        </div>
      ),
      onOk() { },
    });
  }

  return (
    <>
      <Styles>
        <div class="container  mt-5 d-flex justify-content-center liste">
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img src={
                        User.image
                          ? User.image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      } alt="Admin" class="rounded-circle" width="150"></img>
                      <div class="mt-3">
                        <h4>{User.nom} {User.prénom}</h4>
                        <input id="inputimage" type="file" onChange={addProfilimage} />
                        <button class="btn btn-danger mx-auto"
                          onClick={() => {
                            addImage();
                            refreshProfilPage();
                          }}
                        >
                          Charger une photo
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 d-flex justify-content-center align-items-center">
                <div class="card mb-3">
                  <div class="card-body" style={{ marginTop: "30%" }}>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Nom</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {`${User.nom}  ${User.prénom}`}
                      </div>
                    </div>
                    <hr></hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {User.email}
                      </div>
                    </div>
                    <hr></hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">N° Tel</h6>
                      </div>
                      <a href={`tel:${User.numero}`} class="col-sm-9 text-secondary">
                        {User.numero}
                      </a>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 col-lg mx-auto" style={{ textAlign: "center", margin: '21%' }}>
                        {/* <button onClick={logout} class="btn btn-danger mx-auto">Se déconnecter</button> */}
                        <button class="btn btn-danger mx-auto"
                          onClick={() => {
                            info();
                            logout();
                          }}
                        >Se déconnecter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Liste />
      </Styles>
    </>
  );
}
