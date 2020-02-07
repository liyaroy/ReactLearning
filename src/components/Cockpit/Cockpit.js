// functional component

import React, { useEffect } from 'react';
import classes from './Cockpit.css';	

const cockpit = (props) => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		setTimeout(() => {
			alert("Saved data to cloud");
		}, 1000);
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	},  []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');

		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

  // the second useEffect has no argument so it will run in every update cycle.

	const colors = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;		
	}
	
  if (props.personsLength <= 2) {
    colors.push(classes.red);
  }

  if (props.personsLength <= 1) {
    colors.push(classes.bold)
  }


	return(
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
	    <p className={colors.join(' ')}>I am working properly</p>
	    <button className={btnClass} onClick={props.clicked}>
	      Toggle Name
	    </button>
	  </div>
	);
};

export default React.memo(cockpit);
