import React from "react";
import { Link } from "react-router-dom";
import starWars from "./starWars.png"
import "./navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
			<div className="container-fluid">
				<a className="navbar-brand nav-link active" aria-current="page" href="#"><img className="navbar-brand-image"src={starWars} alt="Logo"/></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-right-controls">
					<form className="d-flex" role="search">
						<input className="form-control"  list="datalistOptions" type="search" placeholder="Type to search" aria-label="Search"></input>
						<datalist id="datalistOptions">
							<option value="San Francisco"/>
							<option value="New York"/>
							<option value="Seattle"/>
							<option value="Los Angeles"/>
							<option value="Chicago"/>
						</datalist>
						<button className="btn btn-outline-primary navbar-form-control" type="submit">Search</button>
					</form>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto">
							<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle btn-primary text-white rounded mx-3"  href="#" role="button" data-bs-toggle="dropdown">
								Favorites {1} 
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
