import React, {useState} from 'react';

function Signup () {
    return(
        <div>
            <form>
                <fieldset>
                    <h1>Signup</h1>
                    <label for="fname">First Name: </label>
                    <input type="text" name="fname" placeholder="First Name"></input>
                    <br></br>
                    <label for="fname">Last Name: </label>
                    <input type="text" name="lname" placeholder="Last Name"></input>
                    <br></br>
                    <label for="email">Email: </label>
                    <input type="text" name="email" placeholder="Email"></input>
                    <br></br>
                    <label for="dob">Date of Birth: </label>
                    <input type="date" name="dob" placeholder="Date of Birth"></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password"></input>
                    <label for="verifypassword">Verify Password:</label>
                    <input type="password" name="verifypassword" placeholder="Verify Password"></input>
                    <br></br>
                    <input type="submit"></input>
                </fieldset>
            </form>
        </div>
    );
}

export default Signup;