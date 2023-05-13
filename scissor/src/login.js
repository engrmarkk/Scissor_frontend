import React from "react";
import './login.css';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='div1'>
        <h1 className=''>Login</h1>
        <form>
            <label for="email">Email</label> <br/>
            <input type="email" id="email" name="email" placeholder="Your email.."></input> <br/> 
            <label for="password">Password</label> <br/>
            <input type="password" id="password" name="password" placeholder="Your password.."></input> <br/>
            <input type="submit" value="Submit"></input>
            <span className="psw">Don't have an account? &nbsp; <Link className='link' to='/register'>Register</Link></span>
        </form>
    </div>
  );
}

export default Login;
