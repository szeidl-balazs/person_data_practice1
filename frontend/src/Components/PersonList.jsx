import React, {useState, useEffect} from 'react';
import Person from './Person';
import LoadingMask from './LoadingMask';
//import { v4 as uuidv4} from 'uuid';

const PersonList = () => {

	const [serverData, setServerData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [sortedData, setSortedData] = useState([]);
	

	//dummy api key: 60848a2b8bc5251343d0e22a
	const APP_ID = '60848a2b8bc5251343d0e22a';
	const BASE_URL = 'https://dummyapi.io/data/api';

	useEffect(() => {
		fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
		.then((response) => response.json())
		.then((result) => {
			setServerData(result);
			setIsLoaded(true);			
		},

		(error) => {
			console.log('error in loading');
			setIsLoaded(true);
		}	
		
		);

	}, []);


	let personsArray = serverData.data;

		const showData = () => {
			
			const personsArray = serverData.data;
			console.log(personsArray);
			
		}
		
		showData();	

	
	const sortNamesAZ = () => {	
		setSortedData(personsArray.sort((a, b) => {return ((a.lastName > b.lastName) - (a.lastName < b.lastName))}));
	}

	const sortNamesZA = () => {
		setSortedData(personsArray.sort((a, b) => {return ((a.lastName < b.lastName) - (a.lastName > b.lastName))}));
	}


	console.log('sorted data')
	console.log(sortedData);

	return (
		<div>
			<button onClick={sortNamesAZ}>{`sort A\u279cZ`}</button>
			<button onClick={sortNamesZA}>{`sort Z\u279cA`}</button>

			{
				!isLoaded ? <LoadingMask /> :
				personsArray.map((person) => <Person key={person.id} person={person} />)				
			}
		
		</div>
	);
}

export default PersonList;
