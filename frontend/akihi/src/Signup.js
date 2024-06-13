import React, {useState} from 'react';
import './Signup.css'
import {useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom';

function Signup () {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const navigate = useNavigate();
    const json = useState('');
    let handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await fetch('/api/signup', {
                method: 'POST', 
                body: JSON.stringify({
                    fname : fname,
                    lname : lname,
                    username: username,
                    email : email,
                    password : password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(function(response) {
                alert(response.status);
                if (response.status == 200){
                    return response.json().then(function(text) {
                        alert("Successful");
                        navigate('/login');
                    });
                }
                else 
                    alert("Signup is unsuccessful");
            });
    }
}

    const validateForm = () => {
        let isValid = true;
        if (fname === "") {
            isValid = false;
            alert("Please enter your first name.");
        }
        else if (lname === "") {
            isValid = false;
            alert("Please enter your last name.");
        }
       else if (username === "") {
            isValid = false;
            alert("Please enter a username.");
        }
        else if (email === "") {
            isValid = false;
            alert("Please enter your email address.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }
        else if (password === "") {
            isValid = false;
            alert("Please enter a password.");
        } else if (password.length < 8) {
            isValid = false;
            alert("Password must be at least 8 characters long.");
        }
        else if (verifyPassword === "") {
            isValid = false;
            alert("Please verify your password.");
        } else if (password !== verifyPassword) {
            isValid = false;
            alert("Passwords do not match.");
        }
        return isValid;
    }
    return(
        <div className = "screen">
            <form method="POST" action="/api/signup" onSubmit={handleSubmit} className="form-group form-control no border">
                    <div className = "inputContainer">
                    <h1>Signup</h1>
                    <input type="text" id="fname" placeholder="First Name" name="fname" isRequired value={fname} onChange={(e) => setFname(e.target.value)}>
                    </input>
                    <br></br>

                    <input type="text" id="lname" placeholder="Last Name" name="lname"
                        isRequired value={lname} onChange={(e) => setLname(e.target.value)}
                        >
                    </input>
                    <br></br>
                    <input isRequired type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <br/>
                    <input isRequired type="text" id="email" placeholder="Email" name="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                    <br></br>

                    <input isRequired type="password" id="password" placeholder="Password" name ="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <input isRequired type="password" id="verifypassword" placeholder="Verify Password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)}></input>
                    <br></br>
                    <button type="submit" className = "hvr-grow btn" id = "submit">Sign Up</button>
                <br></br>
                <p>
                    Already registered?<br/>
                    <span className = "line">
                        {/*router link goes here*/}
                        <Link to={'/login'} className="border">Login</Link>
                        {/*<a href = "/Login">Login</a>*/}
                    </span>
                </p>
                </div>
            </form>
        </div>
    );
}

export default Signup;
