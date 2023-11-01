import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<span className="navbar-brand mb-0 h1"></span>

			<div className="ml-auto">
				<Link to="/agenda_form">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
