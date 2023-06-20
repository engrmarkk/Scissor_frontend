import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
// import Write from "./write";
import { logout } from "./logout";
import { useEffect, useState } from "react";



const Home = ({isLoggedIn}) => {


	const handleHamburgerClick = () => {
		document.querySelector("ul").classList.toggle("active")
	}

	return (
	<div className="divflex">
        <header className="App-header">
        <nav className="navbar">
	<h1 className="scissor">Cut Live</h1>
	<div class="hamburger" onClick={handleHamburgerClick}>
		<div class="line1"></div>
		<div class="line2"></div>
		<div class="line3"></div>
	</div>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>

        {isLoggedIn ? (
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
        {/* <li> */}
		{/* Endpoint to route to Register component */}
		{/* <Link to="/register">Contact Us</Link> */}
		{/* </li> */}
					
        {/* <li> */}
		{/* Endpoint to route to Register component */}
		{/* <Link to="/users">Users</Link> */}
		{/* </li> */}
		</>
		 
		)}
	</ul>
        </nav>
        </header>
	</div>
);
};

export default Home;
