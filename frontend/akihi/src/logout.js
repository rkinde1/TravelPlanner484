import React, {useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom';

function Logout() {
    const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem("username");
        navigate('/signup');
    }
    return (
        <div>
            <form onsubmit={logout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}

export default Logout;