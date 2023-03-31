import React, {useState } from "react";
function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [setPosts] = useState([]);
    let handleSubmit = async (username, password) => {
            await fetch("/api/login/", {
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
            <form method="POST" action="/api/login/" onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Login</h1>
                    <label for="username">Username:</label>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <input type="submit"></input>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;
