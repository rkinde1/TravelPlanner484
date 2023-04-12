import React, {useState } from "react";
import {Navigate} from 'react-router-dom';
import {Link } from 'react-router-dom';
import styles from './login.css';

function Login () {
    //After login, redirect to profile page
    const[goToContact, setGoToContact] = React.useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let handleSubmit = async (username, password) => {
            await fetch("http://localhost:3000/login", {
                method: "POST", 
                body: JSON.stringify({
                    username : username,
                    password : password
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                setUsername('');
                setPassword('');
                console.log(data);
            })

    }
    return(
        <div className="signupFrm">
            <form method="POST"  action="" onSubmit={handleSubmit}>
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
                <br></br>
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
