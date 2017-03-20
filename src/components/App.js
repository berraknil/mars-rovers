import React, { Component } from 'react';
import Menu from '../containers/Menu';
import ManifestUI from '../containers/manifest_UI';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <ManifestUI />
      </div>
    )
  }
}