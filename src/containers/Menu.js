import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchManifest } from '../actions/index';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = { rover: ''};
    //this.selectRover = this.selectRover.bind(this);
  }
  selectRover(name) {
    /*const newState = this.state;
    newState.rover = name;
    this.setState({ rover: newState.rover })
    console.log(this.state);*/
  /*  this.setState({ rover: name }, 
      () => {
        console.log(this.state) 
      }
    );*/
    this.props.fetchManifest(name);
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



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchManifest }, dispatch);
}

export default connect(null, mapDispatchToProps)(Menu);
