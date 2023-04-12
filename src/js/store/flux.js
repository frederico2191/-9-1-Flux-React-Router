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
			vehicles:[],
			optionsList: [],
			detail:{},
			favorites: [],
			favoriteCounter: 0,
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
			generateOptionsList: () => {
				const store = getStore();
				const optionsList= store.optionsList
				const planets= store.planets
				let generatedList= store.planets.map(el=>el.name)
				console.log(generatedList, "the generated List")
				setStore({optionsList: generatedList })
				
			},
			toggleFavourite: (element) => {
				const store = getStore()
				let favorites = store.favorites
				let counter = store.favoriteCounter

				const isFavourite = favorites.find(el => el.name === element.name)
				if (isFavourite) {
					favorites = favorites.filter(el => el.name !== element.name)
					counter--
				}
				else {
					favorites.push(element)
					counter++
				}
				setStore({favoriteCounter: counter })
				setStore({ favorites })
			},
			fetchDetail: ({ type, id }) => {
				console.log(type, id, "TYPE AND ID INSIDE")
				fetch(`https://www.swapi.tech/api/${type}/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					setStore({ detail: data.result.properties })
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
			fetchPeople: () => {
				fetch('https://www.swapi.tech/api/people', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					const parsedData = data.results.map(el => ({ ...el, type: 'people', typeImg:'characters' }))
					setStore({ people: parsedData })
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
			fetchVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					const parsedData = data.results.map(el => ({ ...el, type: 'vehicles', typeImg:'vehicles' }))
					console.log("parsedData of VEHICELSS:",parsedData )
					
					setStore({ vehicles: parsedData })
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
					const parsedData = data.results.map(el => ({ ...el, type: 'planets', typeImg:'planets' }))

					setStore({planets: parsedData})
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
		}
	};
};

export default getState;
