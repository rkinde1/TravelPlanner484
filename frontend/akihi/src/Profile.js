import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export function UserInfo(){
    //Here will we will also show the user's currect made projects
    const fname = localStorage.getItem('fname');
    const username = JSON.parse(localStorage.getItem("username"));
    const email = localStorage.getItem('email');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
  //   useEffect(() => {
  //     const fetchToken = async () => {
  //         const response = await fetch('/api/login/')
  //         const json = await response.json()
  //         if (response.ok) {
  //             navigate('/profile');
  //             setMessage(json);
  //         }
  //     }
  // }, [])
  
    //This is very plain and will be edited later on
    return(
      
      <div className = "UserInfo">
        <fieldset>
          <h1>Welcome {fname}</h1>
          <h3>Name: {username} <span id = "first-name"></span></h3>
          <h3>Email: {email}</h3>
          <h3>Number of Projects: </h3>
        </fieldset>
     </div>
    ) 
}

export function Activity(){
  return(
    <h1>Posts and Comments</h1>
  )
}

export function uploadProfilePicture(){
  return(
    <h1>hi</h1>
  )
}