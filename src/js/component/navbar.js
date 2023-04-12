import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import starWars from "./starWars.png"
import "./navbar.css"
import { Context } from "../store/appContext";
import Favorites from "./Favorites";
import { element } from "prop-types";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const optionsList= store.optionsList
	const planets= store.planets
	const generatedList= [...store.people.map(el=>el.name),...store.vehicles.map(el=>el.name),...store.planets.map(el=>el.name)]
	console.log(generatedList, "the generated List")
	const allOptionsForFilterLinking = [...store.people,...store.vehicles,...store.planets]

	console.log("allOptionsForFilterLinking",allOptionsForFilterLinking)


	// const clickSearchFunction = (event) => {
	// 		event.preventDefault();
	// 		console.log(event.target[0].value)
	// 	console.log("event", event)
	// 	// const formData = new FormData(event.target.value);
	// 	// 	event.preventDefault();
	// 	// 	for (let [key, value] of formData.entries()) {
	// 	// 	  console.log(key, value);
	// 	// 	}
	// 	  };
	
	// const optionClickHandler = () => {

	// }

	const optionLinking = (selectedElement) => {
		console.log("selectedElement",selectedElement)
		return <Link className="datalistOption" to={`${selectedElement.type}/${selectedElement.typeImg}/${selectedElement.uid}`}></Link>
	}
	




	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand nav-link active" aria-current="page" to="/"><img className="navbar-brand-image" src={starWars} alt="Logo"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-right-controls">
					<form className="d-flex" role="search" onSubmit={console.log("submited")}>
						<input className="form-control"  list="datalistOptions" type="search" placeholder="Type to search" aria-label="Search"></input>
						<datalist id="datalistOptions">
							{allOptionsForFilterLinking.length && allOptionsForFilterLinking.map((element, index) => {
							return (
								<option key={index} value={element.name} /*onClick={optionLinking(element)}*//>
							)})}
						</datalist>

						{/* <Link to={`/${item.type}/${item.typeImg}/${item.uid}`}> */}
							<button className="btn btn-outline-primary navbar-form-control" type="submit">Search</button>
						{/* </Link> */}
					</form>
					<Favorites/>
				</div>
			</div>
		</nav>
	);
};
