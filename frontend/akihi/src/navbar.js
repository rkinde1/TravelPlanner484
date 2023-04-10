import {CreateProjectButton} from './Itinerary.js';
import './App.css';
import React from 'react';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";

function NavBar () {

    return (
        <nav className = "nav">
            <div className = "left">
            <img src="/favicon.svg" width="30" height="30" class="d-inline-block align-top" alt="" className = "logo"></img>

            <a href = "/" className = "site-title"> Akihi </a>

            </div>
            <div className="container">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className='hvr-grow'><Link to={'login'} className="border">Login</Link></li>
                    <li className='hvr-grow'><Link to={'signup'} className="border">Signup</Link></li>
                    <li className='hvr-grow'><Link to={'profile'} className="border">Profile</Link></li>
                    <li className='hvr-grow'><Link to={'itinerary'} className="border">Itinerary</Link></li>
                    <li className='hvr-grow'><Link to={'budget'} className="border">Budget</Link></li>
                </ul>
            </div>
        </nav>
        
        
            /*<div>
                <div className="nav">
                    <h1>Welcome to your Itinerary</h1>
                    <CreateProjectButton />
                    <div className="center">
                        <Link to={'login'} className="border">Login</Link>
                        <Link to={'signup'} className="border">Signup</Link>
                        <Link to={'profile'} className="border">Profile</Link>
                        <Link to={'itinerary'} className="border">Itinerary</Link>
                        <Link to={'budget'} className="border">Budget</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
   ); */
    
  
  );
}
export default NavBar;

/*<div>
                <div className="nav">
                    <h1>Welcome to your Itinerary</h1>
                    <CreateProjectButton />
                    <div className="center">
                        <Link to={'login'} className="border">Login</Link>
                        <Link to={'signup'} className="border">Signup</Link>
                        <Link to={'profile'} className="border">Profile</Link>
                        <Link to={'itinerary'} className="border">Itinerary</Link>
                        <Link to={'budget'} className="border">Budget</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
   ); 
    <>*/