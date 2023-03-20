import './Profile.css';
import React, {useState} from 'react';

export function UserInfo(){
    return(
        <div className = "UserInfo">
            <label for = "firstName"> First Name: </label>
            <input type="text" placeholder="First Name" id = "firstName" required></input><br></br>
            <label for = "lastName"> Last Name: </label>
            <input type="text" placeholder="Last Name" id = "lastName" required></input><br></br>
            <label for = "username"> Username: </label>
            <input type="text" placeholder="Username" id = "username" required></input><br></br>
            <label for = "email"> Email: </label>
            <input type="text" placeholder="Email" id = "email"></input><br></br>
            <label for = "dob"> Date of Birth: </label>
            <input type="date" placeholder="Date of Birth" id = "dob"></input><br></br>
            <label for = "acctCreatedDate"> Member Since: </label>
            <input type = "date" id = "acctCreatedDate"></input><br></br>
            <label for = "numOfProjects"> Number of vacations:  </label>
            <input type = "number" id = "numOfProjects"></input>
        </div>
    ) 
}

//export function uploadProfilePicture{
  //  return (
    //    <div>
            
      //  </div>
    //)
//}


