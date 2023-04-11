import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const Home = () =>{
	const { store, actions} = useContext(Context);
	useEffect(() => {
		actions.fetchPeople();
		actions.fetchPlanets();
		actions.fetchVehicles();
	}, []);
	
	return (
		<div>
			<h1 className="scrollerTitles">Characters</h1>
			<div className="list-group horizontal-scroller">
						{store.people?.length && store.people.map((item, index) => {
							return (
								// <div key={index} className="card">
									<Card
									key={index} 
										className="list-group-item d-flex justify-content-between"
										item={item}
										category="characters"
									>
									</Card>
								// </div>
							);
						})}
					</div>
			<h1 className="scrollerTitles">Planets</h1>
			<ul className="list-group  horizontal-scroller">
						{store.planets?.length && store.planets.map((item, index) => {
							return (
									<Card
										key={index} 
										className="list-group-item d-flex justify-content-between"
										item={item}
										category="planets"
									>
									</Card>
							);
						})}
					</ul>
			<h1 className="scrollerTitles">Vehicles</h1>
			<ul className="list-group horizontal-scroller">
						{store.vehicles?.length && store.vehicles.map((item, index) => {
							return (
									<Card
										key={index} 
										className="list-group-item d-flex justify-content-between"
										item={item}
										category="vehicles"
									>
									</Card>
							);
						})}
					</ul>
		</div>
	)
};

export default Home
