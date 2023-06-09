import React, { useState } from "react";
import "../css/register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

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
      const response = await axios.post(`${BASE_URL}/register`, user, {
        withCredentials: true
      });
      const data = response.data;
      console.log(data);
      setFlashMessage("Registration successful!"); // set flash message on success

      // navigate to login page after successful registration
      navigate('/login', { state: { message: "Registration successful!" } });
    } catch (error) {
      // set flash message on error
      // if (error?.code === 'ERR_NETWORK') {
      //   setFlashMessage('Email already taken')
      // } else {
      //   setFlashMessage(error?.message)       
      // }

      if (error.response && error.response.data && error.response.data.error) {
        setFlashMessage(error.response.data.error);
      } else if (error.response && error.response.data && error.response.data.message) {
        setFlashMessage(error.response.data.message);
      } else {
        console.error("An error occurred:", error);
        setFlashMessage("An error occurred. Please try again.");
      }
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
