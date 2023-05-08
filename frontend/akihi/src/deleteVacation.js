import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import './App.css';

const token = localStorage.getItem("token");

export function DeleteVacation () {
    const [vacationName, setVacationName] = useState("");
    //get id from vacation presed
    //send id to backend through fetch
    const navigate = useNavigate();
    let delete2 = (e) => {
        e.preventDefault();
        fetch("/api/vacation/:id", {
            method: "DELETE", 
            body: JSON.stringify({
                id: localStorage.getItem("vacation_id")
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            return res.text().then(function(text) {
                if (res.status == 200) {
                    alert(text);
                    localStorage.setItem("vacation_id", null)
                    // alert('Deleted');
                    navigate('/profile');
                }
                else {
                    alert('Cannot find vacation');
                }
            });
        });
    }
    let getVacationId = async () => {
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
                //If vacationName matches with id, store vacation id and then call delete2 function
                return response.json().then(function(text) {
                    for (var i = 0; i < text.length; i ++ ) {
                        if (text[i].vacationName == vacationName) {
                            localStorage.setItem("vacation_id", text[i]._id)
                        }
                    }
                });
            }
            else {
                alert('Unsuccessful');
            }
        });
        }
    useEffect(() => {
        getVacationId();
    }, [vacationName]);
    return (
        <div>
            <form action="/api/vacation" method="DELETE" onSubmit={delete2}>
                <h2>Type in name of Vacation you wish to <em className="delete">delete</em></h2>
                <input type="text" name="vacationName" value={vacationName} onChange={((e) => setVacationName(e.target.value))} placeholder="Enter name of vacation"></input>
                <button className="deleteButton" type="submit">Delete Vacation</button>
            </form>
        </div>
    );
}

//Create a function here that user clicks delete on name of vacation
//Sends to backend and deletes with matching id

export default DeleteVacation;