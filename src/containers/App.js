import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  
  constructor(props) {
    super(props); //this will exectute the constructor of  the component you are extending.
    console.log('[App.jd] constructor');
  }

  state = {
    persons: [
      { id: 'dsd', name: "Liya", age: "25" },
      { id: 'bcv', name: "Georgy", age: "21" },
      { id: 'tyk', name: "Johan", age: "21" }
    ], 
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] from getDerivedProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState ) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.person[personIndex];

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({
      persons: persons
    })
  }


  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // another alternate to the above statement is below.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
            this.setState ({showCockpit: false });
          }}>
          Remove Cockpit
        </button>
        { this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null }  
        {persons}
      </div>
    );
  }
}

// export default Radium(App);

export default App;
    
