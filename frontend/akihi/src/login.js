import React, {useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom';
import styles from './login.css';


//Need to talk to Jal or someone else after preventing the page from redirecting to api/login
function Login () {
    //After login, redirect to profile page
    const[goToContact, setGoToContact] = React.useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/login', {
            method: 'POST',
          })
          .then(res => {
            //This is not navigating
            //Also goes to api/login
            res.json();
            // localStorage.setItem("token", res['token']);
            localStorage.setItem("username", res.json() );
            // localStorage.setItem("email", res.email);
            navigate('/profile');
          })
          .then (data => {
//Save data here
//This is not working for some reason
          })
          .catch(err => { console.log(err) })
    }
    return(
        <div className="signupFrm">
            <form method="POST"  action="/api/login" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div class="inputContainer">
                    <input type="text" name="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div class="inputContainer">
                    <input type="password" name="password" placeholder="Password" required value={password} onChange = {(e) => setPassword(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div>
                    <button type="submit" className = "hvr-grow btn" onClick = {() => {setGoToContact(true)}}>Login</button>
                    </div>
                <p>
                    Don't have an account?<br/>
                    <span className = "line">
                        {/*router link goes here*/}
                        <Link to={'/signup'} className="border">Signup</Link>
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
