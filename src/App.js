import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      label: "ANNOYING PERSON ELIMINATOR",
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value }); 
  } // when Component App is getting run by JS for the first time, it instantiates the new App Class and sees this handleChange method that points to an arrow function. So then it defines the arrow function and the moment it sees 'this' and because it's an arrow function it automatically binds 'this' to the place where this arrow function was defined in the first place. The context of this arrow function is our App Component.

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
      return (
        <div className="App">
          <SearchBox
            placeholder='Search Monsters'
            handleChange = {this.handleChange}
           />
          <CardList monsters={filteredMonsters} />
          <p>{this.state.label}</p>
          <button onClick={() => this.setState({ label: "REMOVED" })}>
            DELETE
          </button>
        </div>
      )
    }
}

export default App;
