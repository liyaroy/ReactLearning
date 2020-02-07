//functional component

import React, { PureComponent } from 'react';

import Person from './Person/Person'

//there is only return statement in this. So no need for {return}. 
//We can simply add satement to be returned in paranthesis.

class Persons extends PureComponent {
  
  // // static getDerivedStateFromProps(props, state) {
  // //   console.log('[Persons.js] getDerivedStateFromProps');
  // //   return state;
  // // }

  // // componentWillReceiveProps(props) {
  // //   console.log('[Persons.js] componentWillReceiveProps', props);
  // // } //not supported in this version


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ){
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'new Snapshot'};
  }

  // componentWillUpdate() {

  // } // not supported

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot)
  }

  componentWillUnmount() {
    // write the code you want to run right before the component is removed
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index)=> {
      return(
        <Person 
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      ); 
    });
  }
}


export default Persons;
