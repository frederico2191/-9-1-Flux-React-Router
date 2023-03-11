import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";

const Home = () =>{
	const { store, actions} = useContext(Context);
	console.log(store.people,"store.people");
	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div>
			<h1 className="scrollerTitles">Characters</h1>
			<ul className="list-group">
						{store.people?.length && store.people.map((item, index) => {
							return (
								<div>
									<Card
										key={index}
										className="list-group-item d-flex justify-content-between"
										style={{ background: item.background }}
										name={item.name}
										id={item.uid}
										/>
								</div>
							);
						})}
					</ul>
		</div>
	)

	
	
};

export default Home
