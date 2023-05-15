import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Itinerary.css';

const token = localStorage.getItem("token");
function EditSpecificVacation() {
    const [listOfVacName, copy] = useState([])
    const [vacationName, setVacationName] = useState("");
    //get id from vacation presed
    //send id to backend through fetch
    const navigate = useNavigate();
    //This function is not working
    let getVacationId = async (e) => {
        e.preventDefault()
        await fetch('/api/itinerary/vacationName', {
            method: 'POST',
            body: JSON.stringify({
                vacationName: vacationName
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            })
            .then(function(response) {
                if (response.status == 200) {
                    return response.json().then(function(text) {
                        //uncomment this code to see the data
                        // alert(JSON.stringify(text))
                        // alert(text[0]._id)
                        //Stores itinerary Id in here
                        localStorage.setItem("itinerary_id", text[0]._id)
                        localStorage.setItem("vacationName", vacationName)
                        window.location.reload();
                    });
                }
                else {
                    alert("ERROR: Cannot find vacation");
                }
        });
    }
    let getVacations = async () => {
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
                  //Sets number of vacations on profile
                  localStorage.setItem("vacations", JSON.stringify(text.length));
                  if (JSON.stringify(text.length) == 1) {
                    listOfVacName[0] = text[0].vacationName;
                  }
                  else if (JSON.stringify(text.length) > 1) {
                    for (var i = 0 ; i < JSON.stringify(text.length); i ++) {
                      if (text[i].vacationName == vacationName) {
                        localStorage.setItem("vacation_id", text[i]._id)
                      }
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
      }, [listOfVacName]);
      const tableRows=listOfVacName.map((item) => {
        return (
          <p>{item}</p>
        );
      })
    return(
        <div class = 'editItinerary'>
            <form action="/api/itinerary/vacationName" method="POST" onSubmit={getVacationId}>
                <h1>Please enter the vacation you wish to access</h1>
                <h5>*Note*: Start typing to see pre-existing vacations</h5>
                <h5>Don't forget to refresh the page!</h5>
                {tableRows}
                <input type="text" name="vacationName" placeholder="Enter Vacation name here" value={vacationName} onChange={(e) => setVacationName(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default EditSpecificVacation;