import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
// import Write from "./write";





const Home = () => {
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
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/login">Login</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/register">Register</Link>
		</li>
	</ul>
        </nav>
        </header>
	</div>
);
};

export default Home;
