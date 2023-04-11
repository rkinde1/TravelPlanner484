import {CreateProjectButton} from './Itinerary.js';
import './App.css';
import React from 'react';
import {Link } from 'react-router-dom';

function NavBar () {
    return (
            <div>
                <div className="nav">
                    <h1>Welcome to your Itinerary</h1>
                    <div className="center">
                        <Link to={'login'} className="border">Login</Link>
                        <Link to={'signup'} className="border">Signup</Link>
                        <Link to={'profile'} className="border">Profile</Link>
                        <Link to={'vacation'} className="border">Create Vacation</Link>
                        <Link to={'itinerary'} className="border">Itinerary</Link>
                        <Link to={'budget'} className="border">Budget</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
    );
}

export default NavBar;