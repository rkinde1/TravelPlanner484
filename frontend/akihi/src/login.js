import React, {useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom';
import styles from './login.css';
import axios from 'axios'


//Need to talk to Jal or someone else after preventing the page from redirecting to api/login
function Login () {
    //After login, redirect to profile page
    const[goToContact, setGoToContact] = React.useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    var message;
    let handleSubmit = async (e) => {
        //Prevents form redirecting to backend ('/api/login')
        e.preventDefault();
        await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
          })
          .then(function(response) {
            if (response.status == 200) {
                return response.json().then(function(text) {
                    localStorage.setItem("email", text.email);
                    localStorage.setItem("username", text.username);
                    localStorage.setItem("token", text.token);
                    alert("Successful");
                    navigate('/profile')
                });
            }
            else {
                alert('Invalid Credentials');
            }
        });
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
