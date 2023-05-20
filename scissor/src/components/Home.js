import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
// import Write from "./write";
import { logout } from "./logout";
import { useEffect, useState } from "react";



const Home = ({isLoggedIn}) => {
	const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

return (
	<div>
        <header className="App-header">
        <nav className="navbar">
	<h1 className="scissor">Scissor</h1>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>

        {loggedIn ? (
		<>
        <li>
		{/* Endpoint to route to Register component */}
		<Link to="#" onClick={() => {logout()}}>Logout</Link> 
		</li>
		</>
        ) : ( 

			<>
		<li>
		{/* Endpoint to route to Login component */}
		<Link to="/login">Login</Link>
		</li>
		<li>
		{/* Endpoint to route to Register component */}
		<Link to="/register">Register</Link>
		</li>
        <li>
		{/* Endpoint to route to Register component */}
		<Link to="/register">Contact Us</Link>
		</li>
					
        <li>
		{/* Endpoint to route to Register component */}
		<Link to="/users">Users</Link>
		</li>
		</>
		 
		)}
	</ul>
        </nav>
        </header>
	</div>
);
};

export default Home;
