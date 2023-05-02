import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {DeleteVacation} from './deleteVacation'



export function UserInfo(){
    //Here will we will also show the user's currect made projects

    //Must be sent by backend after login
    const fname = localStorage.getItem('fname');
    const username = localStorage.getItem("username");
    const email = localStorage.getItem('email');
    const vacations = localStorage.getItem("vacations");
    const listOfVacName = useState([])
    //Send request this way
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    //This gets the names of every vacation
    let getVacations = async () => {
      //Prevents form redirecting to backend ('/api/login')
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
                //Sets number of vacations on profile
                localStorage.setItem("vacations", JSON.stringify(text.length));
                
                if (JSON.stringify(text.length) == 1) {
                  listOfVacName[0] = text[0].vacationName;
                  alert(listOfVacName[0])
                }
                else if (JSON.stringify(text.length) > 1) {
                  for (var i = 0 ; i < JSON.stringify(text.length); i ++) {
                    listOfVacName[i] = (text[i].vacationName)
                  }
                  alert(listOfVacName)
                }
                else {
                  alert("You have no vacations created")
                }
                
                // else if (text.length == 1) {
                //   listOfVacName[0] = JSON.stringify(text[0].vacationName)
                // }

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
    
    return(
      
      <div className = "UserInfo">
        <fieldset>
          <h1>Welcome {fname}</h1>
          <h3>Username: {username} <span id = "first-name"></span></h3>
          <h3>Email: {email}</h3>
          <h3>Number of Vacations: {vacations}</h3>
          <button onClick={logout}>Logout</button>
          <DeleteVacation/>
        </fieldset>
     </div>
    ) 
}
