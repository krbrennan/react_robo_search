import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import './App.css';
import Robots from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: Robots.map(robot => robot),
      searchField: ''
    }
  }

  componentDidMount() {
    // Initially used boilerplate users but later decided to make my own
    // small db of users

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({robots: users}));
    //   console.log(this.state.robots.map(rob => rob))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboSearch</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App;
