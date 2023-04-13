import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import starWars from "./starWars.png"
import "./navbar.css"
import { Context } from "../store/appContext";
import Favorites from "./Favorites";
import { element } from "prop-types";


export const Navbar = (optionsRendering) => {
	const {store, actions} = useContext(Context)
	const optionsList= store.optionsList
	const planets= store.planets
	const generatedList= [...store.people.map(el=>el.name),...store.vehicles.map(el=>el.name),...store.planets.map(el=>el.name)]
	const allOptionsForFilterLinking = [...store.people,...store.vehicles,...store.planets]
	const navigate = useNavigate()

	const optionLinking = (e) => {
		const filteredOption = allOptionsForFilterLinking.filter(el=>el.name == e.target.value)

		if (filteredOption[0]) {
			navigate(`${filteredOption[0].type}/${filteredOption[0].typeImg}/${filteredOption[0].uid}`)
			e.target.value=""
		}
	}

	// const renderFilteredOptions = (e) => {
	// 	e.preventDefault()
		
	// }

	
	return (
		
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand nav-link active" aria-current="page" to="/"><img className="navbar-brand-image" src={starWars} alt="Logo"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-right-controls">
					<form className="d-flex" role="search">
						<input className="form-control"  list="datalistOptions" type="search" placeholder="Type to search" aria-label="Search" onChange={e=>optionLinking(e)}></input>	
						<datalist id="datalistOptions">
							{allOptionsForFilterLinking.length && allOptionsForFilterLinking.map((element, index) => {
							return (
								<option key={index} id={element.uid} value={element.name}/>
							)})}
						</datalist>
						{/* <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
							Popover on bottom!!
						</button> */}
		

							{/* <button className="btn btn-outline-primary navbar-form-control" type="submit" onClick={e=> renderFilteredOptions(e)}>Search</button> */}

					</form>
					<Favorites/>
				</div>
			</div>
		</nav>
	);
};
