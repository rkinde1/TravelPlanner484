import React, {useState} from 'react';
import './Signup.css'
import {redirect} from 'react-router-dom';
import {Link } from 'react-router-dom';
import Axios from 'axios';

function Signup () {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [setPosts] = useState([]);
    let handleSubmit = async (fname, lname, email, username, password) => {
            await fetch("http://localhost:3000/signup", {
                method: "POST", 
                body: JSON.stringify({
                    fname : fname,
                    lname : lname,
                    username, username,
                    email : email,
                    password : password
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                setPosts((posts) => [data, ...posts]);
                setFname('')
                setLname('')
                setPassword('');
                console.log(data);
            })
    }

    return(
        <div>
            <form method="POST" action="/api/signup" onSubmit={handleSubmit} className="form-group">
                <fieldset>
                    <h1>Welcome to Akihi</h1>
                    <h1>Signup</h1>
                    <input type="text" id="fname" placeholder="First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)}>
                    </input>
                    <br></br>

                    <input type="text" id="lname" placeholder="Last Name" name="lname"
                        value={lname} onChange={(e) => setLname(e.target.value)}
                        >
                    </input>
                    <br></br>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <br/>
                    <input type="text" id="email" placeholder="Email" name="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                    <br></br>

                    <input type="password" id="password" placeholder="Password" name ="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <input type="password" id="verifypassword" placeholder="Verify Password"></input>
                    <br></br>
                    <button type="submit" id = "submit">Sign Up</button>
                </fieldset>
                <p>
                    Already registered?<br/>
                    <span className = "line">
                        {/*router link goes here*/}
                        <Link to={'/login'} className="border">Login</Link>
                        {/*<a href = "/Login">Login</a>*/}
                    </span>
                </p>
               
            </form>
        </div>
    );
}

export default Signup;
