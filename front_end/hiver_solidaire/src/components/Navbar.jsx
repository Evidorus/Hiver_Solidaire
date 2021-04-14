import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Agenda from '../views/Agenda'
import Home from '../views/Home';
import Login from '../views/Login';
import Profil from '../views/Profil';
import Signup from '../views/Signup';


function Navbar() {

    return (
        <BrowserRouter>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" classNameName="navbar-brand">
                        <img style={{ width: "20%" }} src="./imgHS/logoHS.png" alt="Hiver Solidaire" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav " >
                            <li className="nav-item" >
                                <Link to="/signup" className="nav-link " >Inscription</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link " >Connection</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link " >Profil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/agenda" className="nav-link " >Agenda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/agenda" component={Agenda} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profil} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navbar;