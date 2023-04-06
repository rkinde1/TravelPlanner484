import React, {useState} from 'react';

export function UserInfo(){
    //Here will we will also show the user's currect made projects
    const firstName = localStorage.getItem('first-name')
    const lastName = localStorage.getItem('first-name')
    const email = localStorage.getItem('email')
    const dob = localStorage.getItem('date-of-birth')
  
    return(
      
      <div className = "UserInfo">
          <h1>Welcome!</h1>
          <h3>Name: <span id = "first-name"></span></h3>
          <h3>Email: </h3>
          <h3>Member Since: </h3>
          <h3>Number of Projects: </h3>
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