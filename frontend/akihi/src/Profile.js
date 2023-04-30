import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';



export function UserInfo(){
    //Here will we will also show the user's currect made projects

    //Must be sent by backend after login
    const fname = localStorage.getItem('fname');
    const username = localStorage.getItem("username");
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');
    const vacations = localStorage.getItem("vacations");
    //Send request this way
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    let getVacations = async (e) => {
      //Prevents form redirecting to backend ('/api/login')
      // e.preventDefault();
      await fetch('/api/vacation', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              //This is sent to back end
              'Authorization' : 'Bearer ' + token
          },
        })
        .then(function(response) {
          //Checks what the status code is and works
          if (response.status == 200) {
              //returns json response
              return response.json().then(function(text) {
                localStorage.setItem("vacations", JSON.stringify(text.length));
              });
          }
          else {
              alert('Unsuccessful');
          }
      });
    }

    //We will need to create a function that will link to the vacation and the itinerary

    useEffect(() => {
      getVacations();
    }, []);

    const logout = async () => {
      localStorage.clear();
      alert("You have been successfully logged out")
      navigate('/login');
    }
    
    //This is very plain and will be edited later on
    return(
      
      <div className = "UserInfo">
        <fieldset>
          <h1>Welcome {fname}</h1>
          <h3>Username: {username} <span id = "first-name"></span></h3>
          <h3>Email: {email}</h3>
          <h3>Number of Vacations: {vacations}</h3>
          <button onClick={logout}>Logout</button>
        </fieldset>
     </div>
    ) 
}
