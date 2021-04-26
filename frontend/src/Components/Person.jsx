import React from 'react';

const Person = ({person}) => {

	return (
		<div>			
			<img src={person.picture} alt={`profile_image_${person.id}`} />
			<h3>Name: {`${person.title} ${person.firstName} ${person.lastName}`}</h3>
			<p>email: {person.email}</p>			
		</div>
	);
}

export default Person;