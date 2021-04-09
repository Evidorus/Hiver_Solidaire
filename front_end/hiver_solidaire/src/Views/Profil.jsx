import React, { useEffect, useState } from "react";
import "../App.css";

export default function Profil() {
  const [User, setUser] = useState([]);
  console.log(User);

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

      return (
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card p-8">
            <div className="d-flex align-items-center">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
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
                    <span className="number3">0767532573</span>
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
      );
}
