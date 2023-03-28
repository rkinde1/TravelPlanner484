import React, {useState} from 'react';
import './Signup.css';
import {useNavigate} from 'react-router-dom';

/*onSubmit = {handleSubmit}*/

function Signup () {

    return(
        <div className = "signupForm">
            < form id = "form">
                <fieldset>
                    <h1>Signup</h1>
                    <label htmlFor="fname">First Name: </label>
                    <input type="text" id="fname" placeholder="First Name" >
                    </input>
                    <br></br>

                    <label htmlFor="lname">Last Name: </label>
                    <input type="text" id="lname" placeholder="Last Name"
                        
                        >
                    </input>
                    <br></br>

                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="Email"
                        
                        >
                    </input>
                    <br></br>

                    <label htmlFor="dob">Date of Birth: </label>
                    <input type="date" id="dob" placeholder="Date of Birth"
                       
                        >
                    </input>
                    <br></br>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password"></input>
                    <br></br>
                    <label htmlFor="verifypassword">Verify Password:</label>
                    <input type="password" id="verifypassword" placeholder="Verify Password"></input>
                    <br></br>
                    <input type="submit" id = "submit"></input>
                </fieldset>
               
            </form>
        </div>

    );
}

export default Signup;