import React, {useState, useEffect} from 'react';
import Person from './Person';
import LoadingMask from './LoadingMask';
//import { v4 as uuidv4} from 'uuid';

const PersonList = () => {

	const [serverData, setServerData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

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

	return (
		<div>

			{
				!isLoaded ? <LoadingMask /> :
				personsArray.map((person) => <Person key={person.id} person={person} />)	
				
			}

		</div>
	);
}

export default PersonList;


















