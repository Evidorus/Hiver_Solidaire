import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Agenda from '../Views/Agenda'
import Home from '../Views/Home';
import Login from '../Views/Login';
import Signup from '../Views/Signup';


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
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/agenda" component={Agenda} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navbar;