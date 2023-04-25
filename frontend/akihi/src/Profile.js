import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';



export function UserInfo(){
    //Here will we will also show the user's currect made projects

    //Must be sent by backend after login
    const fname = localStorage.getItem('fname');
    const username = localStorage.getItem("username");
    const email = localStorage.getItem('email');
    const token = localStorage.getItem("token");
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const logout = async () => {
      localStorage.clear();
    }
    
    //This is very plain and will be edited later on
    return(
      
      <div className = "UserInfo">
        <fieldset>
          <h1>Welcome {fname}</h1>
          <h3>Name: {username} <span id = "first-name"></span></h3>
          <h3>Email: {email}</h3>
          <h3>Number of Projects: {token} </h3>
          <button onClick={logout}>Logout</button>
        </fieldset>
     </div>
    ) 
}
