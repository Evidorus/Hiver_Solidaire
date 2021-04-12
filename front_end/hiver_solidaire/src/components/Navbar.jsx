import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Agenda from '../views/Agenda'
import Home from '../views/Home';
import Liste from '../views/Liste';
import Login from '../views/Login';
import Profil from '../views/Profil';
import Signup from '../views/Signup';


function Navbar() {

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" classNameName="navbar-brand">HIVER SOLIDAIRE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/agenda" className="nav-link active" >Agenda</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/signup" className="nav-link active" >Signup</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className="nav-link active" >Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/profile" className="nav-link active" >Profile</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/liste" className="nav-link active" > Recapitulatif </Link>
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
                <Route path="/liste" component={Liste} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navbar;