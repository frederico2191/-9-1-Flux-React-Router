import { v4 as uuid } from 'uuid';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			toggleFavourite: (id) => {
				console.log("inside favorite hadnler: 1st step load favorites:", getStore())
				const store = getStore()
				// const favorites = store.favorites
				const favorites = store.favorites
				const people = store.people
				console.log("favoritesss before:", favorites)

				// const filteredFavorites = favorites.map(el => !el.uid === id)
				// console.log(filteredFavorites, "filtered favorites")

				// const filteredPeople = people.filter(el => el.uid === id)
				// console.log(filteredPeople, "filtered people")

				// setStore({favorites: updatedFavorites})
				console.log("store.favorites!!!!!!!!!!222222222:", store.favorites)
				console.log("inside favorite hadnler: 2nd step load favorites:", getStore())

				// setStore({favorites: })
				
			
				// favorites.push({"uid":uid, "url":url, "name":name, "type":type, "favorite": true})		
				// //filter the temp var for duplicates				
				// const names = favorites.map(o => o.name)			
				// const filtered = favorites.filter(({name}, uid) => !names.includes(name, uid + 1))
				// //console.log(filtered);

				setStore({favorites: filtered})
			},
			fetchPeople: () => {
				fetch('https://www.swapi.tech/api/people', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					const parsedData = data.results.map(el => ({ ...el, isFavourite: false }))
					console.log(parsedData, "parsedData")
					
					setStore({people: parsedData})
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
			fetchPlanets: () => {
				fetch('https://www.swapi.tech/api/planets', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					const parsedData = data.results.map(el => ({ ...el, isFavourite: false }))

					setStore({planets: parsedData})
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
