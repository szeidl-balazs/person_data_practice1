import React, { useState } from 'react';

const Person = ({person}) => {

	const [show, setShow] = useState('show more');

	const showHandler = () => {
		show === 'show more' ? setShow('show less') : setShow('show more');
	}

	return (
		<div>			
			<img src={person.picture} alt={`profile_image_${person.id}`} />
			<h3>Name: {`${person.title} ${person.firstName} ${person.lastName}`}</h3>
			<button onClick={showHandler}>{show}</button>

			{
				show === 'show less' ? <p>email: {person.email}</p> : null
			}
						
		</div>
	);
}

export default Person;