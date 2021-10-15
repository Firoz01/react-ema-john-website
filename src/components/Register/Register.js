import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="password" placeholder="Re-Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an account <Link to="/login">Login</Link></p>
                <div>--------Or--------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;