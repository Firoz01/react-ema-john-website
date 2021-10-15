import React from 'react';
import { Link , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            });
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id=""
                        placeholder="Your Email"></input>
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Acount</Link></p>
                <div>---------------Or----------------</div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn-regular">
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;