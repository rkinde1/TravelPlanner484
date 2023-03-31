import React, {useState } from "react";
import {Navigate} from 'react-router-dom';

function Login () {
    const[goToContact, setGoToContact] = React.useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [setPosts] = useState([]);
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
                setPosts((posts) => [data, ...posts]);
                setUsername('');
                setPassword('');
                console.log(data);
            })

    }
    return(
        <div>
            <form method="POST" class = "form-group" action="" onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Login</h1>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    <input type="password" name="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <button type="submit" onClick = {() => {setGoToContact(true)}}>Login</button>
                </fieldset>
            </form>
            <p div = "line">
                    Don't have an account?<br/>
                    <span className = "line">
                        {/*router link goes here*/}
                        <a href = "/Signup">Sign up</a>
                    </span>
                </p>
        </div>
    );
}

export default Login;
