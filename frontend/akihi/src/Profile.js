import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {DeleteVacation} from './deleteVacation'
import EditSpecificVacation from './EditItinerary'
import './Profile.css';


export function UserInfo(){
    //Here will we will also show the user's currect made projects

    //Must be sent by backend after login
    const fname = localStorage.getItem('fname');
    const username = localStorage.getItem("username");
    const email = localStorage.getItem('email');
    const vacations = localStorage.getItem("vacations");
    const [listOfVacName, copy] = useState([])

    const[vacationData, setVacationData] = useState([]);
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
          if (response.status === 200) {
              //returns json response
              return response.json().then(function(text) {
                //Sets the vacation data
                setVacationData(text);
                //Sets number of vacations on profile
                localStorage.setItem("vacations", JSON.stringify(text.length));
                if (JSON.stringify(text.length) == 1) {
                  listOfVacName[0] = text[0].vacationName;
                }
                else if (JSON.stringify(text.length) > 1) {
                  for (var i = 0 ; i < JSON.stringify(text.length); i ++) {
                    listOfVacName[i] = JSON.stringify(text[i].vacationName)
                  }
                }
                else {
                  alert("You have no vacations created")
                }
              });
          }
          else {
          }
      });
    }

    //We will need to create a function that will link to the vacation and the itinerary
    
    useEffect(() => {
      getVacations();
    }, [listOfVacName.length]);

    const logout = async () => {
      localStorage.clear();
      alert("You have been successfully logged out")
      navigate('/login');
    }

    return(
      
      <div className = "profile">
          <h1>Welcome {fname}!</h1>
          <h3>Username: {username} <span id = "first-name"></span></h3>
          <h3>Email: {email}</h3>
          <h3>Number of Vacations: {vacations}</h3>
          {/* display the list of vacation data */}
          <div id = "vacation-list">
            <h3>Vacations: </h3>
            <ul>
              {listOfVacName.map((vacation) => (
                <li>
                  <Link to = "/itinerary" className="link-style">
                    {vacation}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
          <button onClick={logout}>Logout</button>
     </div>
    ) 
}
