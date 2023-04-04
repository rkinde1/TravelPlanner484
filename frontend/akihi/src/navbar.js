import {CreateProjectButton} from './Itinerary.js';
import './App.css';
import React from 'react';
import {Link } from 'react-router-dom';

function NavBar () {
    return (
            <div>
                <div>
                    <h1>Welcome to your Itinerary</h1>
                    <CreateProjectButton />
                    <div className="center">
                        <Link to={'login'}>Login</Link>
                        <Link to={'signup'}>Signup</Link>
                        <Link to={'profile'}>Profile</Link>
                        <Link to={'itinerary'}>Itinerary</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
    );
}

export default NavBar;