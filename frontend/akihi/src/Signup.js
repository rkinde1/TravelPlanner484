import React, {useState} from 'react';
import './Signup.css';
import {Navigate} from 'react-router-dom';

/*onSubmit = {handleSubmit}*/

function Signup () {

    const [goToProfile, setGoToProfile] = React.useState(false);

    if (goToProfile){
        return <Navigate to = "/profile"/>;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(document.getElementById('fname').value, document.getElementById('lname').value);
    }

    return(
        <div className = "signupForm">
            
            < form id = "form" onSubmit = {handleSubmit}>
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
                    <button type="submit" id = "submit" onClick={() => {setGoToProfile(true)}}>Sign Up</button>
                </fieldset>
                <p>
                    Already registered?<br/>
                    <span className = "line">
                        {/*router link goes here*/}
                        <a href = "#">Login</a>
                    </span>
                </p>
               
            </form>
        </div>

    );
}

export default Signup;
