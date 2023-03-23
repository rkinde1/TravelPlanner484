import React, {useState } from "react";
function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("/login", {
                method: "POST", 
                body: JSON.stringify({
                    username : username,
                    password : password
                })
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    return(
        <div>
            <form action="POST" onsubmit={handleSubmit}>
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
