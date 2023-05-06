import {CreateProjectButton} from './Itinerary.js';
import './App.css';
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";
import PrivateRoute from './util/privateRoute.js';
import PrivateLink from './util/privateLink.js'

function NavBar () {

    return (
        <nav class="navbar navbar-default">
            <div className = "left">
            <img src="/favicon.svg" width="30" height="30" class="d-inline-block align-top" alt="" className = "logo"></img>

            <a href = "/" className = "site-title"> Akihi </a>

            </div>
            <div className="container">
                <ul class="navbar-nav">
                    <PrivateLink/>
                </ul>
            </div>
        </nav>
        
    
  
  );
}
export default NavBar;
