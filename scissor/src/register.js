import React from "react";
import './register.css';
import { Link } from "react-router-dom";



function Register(){
    return(
        <div className="div2">
            <h1>Register</h1>
            <form>
                <label for="name">First Name</label> <br/>
                <input type="text" id="name" name="first_name" placeholder="Your first name.."></input> <br/>
                <label for="name">Last Name</label> <br/>
                <input type="text" id="name" name="last_name" placeholder="Your last name.."></input> <br/>
                <label for="name">Username</label> <br/>
                <input type="text" id="name" name="username" placeholder="Your username.."></input> <br/>
                <label for="email">Email</label> <br/>
                <input type="email" id="email" name="email" placeholder="Your email.."></input> <br/>
                <label for="password">Password</label> <br/>
                <input type="password" id="password" name="password" placeholder="Your password.."></input> <br/>
                <label for="password">Confirm Password</label> <br/>
                <input type="password" id="password" name="confirm_password" placeholder="Confirm password.."></input> <br/>
                <input type="submit" value="Submit"></input>
                <span className="psw">Already have an account? &nbsp; <Link className='link' to='/login'>Login</Link></span>
            </form>
        </div>
    );
}

export default Register;
