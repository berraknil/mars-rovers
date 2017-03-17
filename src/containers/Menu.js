import React, { Component } from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = { rover: ''};
    this.selectRover = this.selectRover.bind(this);
    
  }
  selectRover(name) {
    const newState = this.state;
    newState.rover = name;
    this.setState({ rover: newState.rover })
    console.log(this.state);
  }
  render() {    
    return (
      <div role="group" aria-label="menu">
        <button type="button" onClick={() => this.selectRover('curiosity')}>Curiosity</button>
        <button type="button" onClick={() => this.selectRover('opportunity')}>Opportunity</button>
        <button type="button" onClick={() => this.selectRover('spirit')}>Spirit</button>
      </div>
    );
  }
}

export default Menu;
