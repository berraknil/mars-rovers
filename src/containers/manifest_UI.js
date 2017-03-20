import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManifestUI extends Component {
  render() {
    return (
      <div>
        <h2>Name: {console.log(this.props.manifest)} </h2>
        <h3>Status: </h3>
        <p>Launch Date: </p>
        <p>Landing Date: </p>
        <p>Max Date: </p>
        <p>Max Sol: </p>
        <p>Total Photos: </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { manifest: state.manifest.data };
}


export default connect(mapStateToProps)(ManifestUI);