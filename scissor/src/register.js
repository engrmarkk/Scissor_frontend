import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const [flashMessage, setFlashMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", user);
      const data = response.data;
      console.log(data);
      setFlashMessage("Registration successful!"); // set flash message on success
      navigate('/login', { state: { message: "Registration successful!" } });
 // navigate to login page after successful registration
    } catch (error) {
      console.error(error);
      setFlashMessage(error.response.data.message); // set flash message on error
    }
  };

  return (
    <div className="div2">
      <h1>Register</h1>
      {/* conditionally render flash message */}
      {flashMessage && <div className="flash-message">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <br />
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Your first name.."
          value={user.first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Last Name</label>
        <br />
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Your last name.."
          value={user.last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your username.."
          value={user.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="confirm_password">Confirm Password</label>
        <br />
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm password.."
          value={user.confirm_password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <span className="psw">
          Already have an account? &nbsp;{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
