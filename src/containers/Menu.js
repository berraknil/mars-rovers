import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div role="group" aria-label="menu">
        <button type="button" onClick={() => console.log('curiosity')}>Curiosity</button>
        <button type="button" onClick={() => console.log('opportunity')}>Opportunity</button>
        <button type="button" onClick={() => console.log('spirit')}>Spirit</button>
      </div>
    );
  }
}

export default Menu;
