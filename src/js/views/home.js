import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";
import { AiOutlineHeart } from 'react-icons/ai';


const Home = () =>{
	const { store, actions} = useContext(Context);
	console.log(store,"store IS MEEEE");
	console.log(store.planets,"store.planets is here!")

	useEffect(() => {
		actions.fetchPeople();
		actions.fetchPlanets();
		actions.fetchVehicles();

	}, []);
	console.log(store.vehicles, "we are the store vehicles")

	return (
		<div>
			<h1 className="scrollerTitles">Characters</h1>
			<ul className="list-group">
						{store.people?.length && store.people.map((item, index) => {
							return (
								<div key={index}>
									<Card
										className="list-group-item d-flex justify-content-between"
										item={item}
									>
									</Card>
								</div>
							);
						})}
					</ul>
			<h1 className="scrollerTitles">Planets</h1>
			<ul className="list-group">
						{store.planets?.length && store.planets.map((item, index) => {
							return (
								<div key={index}>
									<Card
										className="list-group-item d-flex justify-content-between"
										item={item}
									>
									</Card>
								</div>
							);
						})}
					</ul>
			<h1 className="scrollerTitles">Vehicles</h1>
			<ul className="list-group">
						{store.vehicles?.length && store.vehicles.map((item, index) => {
							return (
								<div key={index}>
									<Card
										className="list-group-item d-flex justify-content-between"
										item={item}
									>
									</Card>
								</div>
							);
						})}
					</ul>
		</div>
	)

	
	
};

export default Home
