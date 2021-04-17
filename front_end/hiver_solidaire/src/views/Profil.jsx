import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Styles } from "../components/styles";
import Liste from "./Liste";
// import { Skeleton, Switch, Card, Avatar } from "antd";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   LogoutOutlined
// } from "@ant-design/icons";

// const { Meta } = Card;

export default function Profil() {
  const [User, setUser] = useState([]);
  const [image, setImage] = useState({});
  // const [loading, setLoading] = useState(true)

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

  // const onChange = checked => {
  //   setLoading(!checked);
  // };

  return (
    <>
    <Styles>

      {/* <Switch checked={!loading} onChange={onChange} />

      <Card
        style={{ width: 600, marginTop: 30 }}
        actions={[
          <LogoutOutlined key="setting" onClick={logout} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            style={{fontSize: 20}}
            avatar={
              <Avatar style={{objectFit: "cover", height: 200, width: 200}} src={
                User.image
                  ? User.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              } />
            }
            title={`${User.prénom} ${User.nom}`}
            Titletwo={User.role}
            description={`Mail : ${User.email}
            Tel : ${User.numero}`}
          />
        </Skeleton>
      </Card> */}
        {/* <div className="container mt-5 d-flex justify-content-center liste">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div className="image">
                <img
                  src={
                    User.image
                      ? User.image
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  className="rounded"
                  width="155"
                  alt="Profil"
                />
              </div>
              <div className="row">
                <div>
                  <h4
                    className="mb-0 mt-0"
                    style={{
                      textAlign: "center",
                      margin: "20px",
                      padding: "20px",
                    }}
                  >
                    {User.prénom} {User.nom}
                  </h4>
                </div>
                <div className="ml-3 w-100">
                  <div className="p-2 mt-1 d-flex flex-wrap justify-content-start stats">
                    <div className="d-flex flex-column">
                      <span className="followers" style={{ fontSize: "1.2em" }}>
                        Email
                      </span>
                      <span className="number2" style={{ fontSize: "1.3em" }}>
                        {User.email}
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="rating" style={{ fontSize: "1.2em" }}>
                        Téléphone
                      </span>
                      <span className="number3" style={{ fontSize: "1.3em" }}>
                        <a
                          className="number3"
                          style={{ fontSize: "1.3em" }}
                          href="tel:{User.numero}"
                        >
                          {User.numero}
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="button mt-2 d-flex flex-row align-items-center">
                    <button
                      onClick={logout}
                      className="btn btn-danger btn-sm px-3 "
                      style={{ margin: "10px", padding: "10px" }}
                    >
                      Déconnection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container">
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
                      <button onClick={logout} class="btn btn-danger">Se déconnecter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom complet</h6>
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
                      <h6 class="mb-0">Tel</h6>
                    </div>
                    <a href={`tel:${User.numero}`} class="col-sm-9 text-secondary">
                      {User.numero}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> 
        <input type="file" onChange={addProfilimage} />
        <button
          style={{ padding: 10, color: "white" }}
          onClick={() => {
            addImage();
            refreshProfilPage();
          }}
        >
          changer mon image
        </button>
        <Liste />
      </Styles>
    </>
  );
}
