function Login () {
    return(
        <div>
            <form>
                <fieldset>
                    <h1>Login</h1>
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="username"></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password"></input>
                    <br></br>
                    <input type="submit"></input>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;