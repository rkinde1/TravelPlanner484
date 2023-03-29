import React, {useState} from 'react';
import './Signup.css'

function Signup () {
const [goToProfile, setGoToProfile] = React.useState(false);

if (goToProfile){
    return <Navigate to = "/profile"/>;
}
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let handleSubmit = async (fname, lname, email, password) => {
            await fetch("/signup", {
                method: "POST", 
                body: JSON.stringify({
                    fname : fname,
                    lname : lname,
                    email : email,
                    password : password
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        } 
    return(
        <div className = "signupForm">
            < form id = "form" method="POST" action="" onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Signup</h1>
                    <label htmlFor="fname">First Name: </label>
                    <input type="text" id="fname" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}>
                    </input>
                    <br></br>

                    <label htmlFor="lname">Last Name: </label>
                    <input type="text" id="lname" placeholder="Last Name"
                        value={lname} onChange={(e) => setLname(e.target.value)}
                        >
                    </input>
                    <br></br>

                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                    <br></br>

                    <label htmlFor="dob">Date of Birth: </label>
                    <input type="date" id="dob" placeholder="Date of Birth"
                       
                        >
                    </input>
                    <br></br>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
