import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import starWars from "./starWars.png"
import "./navbar.css"
import { Context } from "../store/appContext";
import Favorites from "./Favorites";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
				const optionsList= store.optionsList
				const planets= store.planets
				let generatedList= [...store.people.map(el=>el.name),...store.vehicles.map(el=>el.name),...store.planets.map(el=>el.name)]
				console.log(generatedList, "the generated List")



	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand nav-link active" aria-current="page" to="/"><img className="navbar-brand-image"src={starWars} alt="Logo"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-right-controls">
					<form className="d-flex" role="search">
						<input className="form-control"  list="datalistOptions" type="search" placeholder="Type to search" aria-label="Search"></input>
						<datalist id="datalistOptions">
							{generatedList.length && generatedList.map((element) => {
							return (
							<>
							<option value={element}/>
							</>
							)})}
						</datalist>

						<button className="btn btn-outline-primary navbar-form-control" type="submit">Search</button>
					</form>
					<Favorites/>
				</div>
			</div>
		</nav>
	);
};
