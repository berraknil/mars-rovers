import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManifestUI extends Component {
  renderUI(data) {
    return (
      <tr key={data.name}>
        <td>{data.name}</td>
        
        <td>{data.status}</td>
        
        <td>{data.launch_date}</td>
        
        <td>{data.landing_date}</td>
        <td>{data.max_date}</td>
        <td>{data.max_sol}</td>
        <td>{data.total_photos}</td>       
      </tr>
    ) /*
      <div>
        <h2>Name: {console.log(data.photo_manifest)} </h2>
        <h3>Status: </h3>
        <p>Launch Date: </p>
        <p>Landing Date: </p>
        <p>Max Date: </p>
        <p>Max Sol: </p>
        <p>Total Photos: </p>
        </div>*/;
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Launch Date</th>
            <th>Landing Date</th>
            <th>Max Date</th>
            <th>Max Sol</th>
            <th>Total Photos</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(this.props.manifest).map(this.renderUI)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { manifest: state.manifest.data };
};

export default connect(mapStateToProps)(ManifestUI);
