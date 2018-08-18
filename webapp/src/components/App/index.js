import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenericHeader from '../GenericHeader';
import Wrapper from '../Wrapper';
import { getProjects } from '../../actions.js'

class App extends Component {

  componentDidMount() {
    this.props.getProjects()
  }

  render() {

    const headerContent = {
      icon: 'https://s3-ap-southeast-2.amazonaws.com/buildingperformance.arup.digital/bpdb.png',
      name: 'Project Deets',
      content: [
        'Lookup',
        'My projects',
        'Hotkeys'
      ]
    }

    return (
      <div>
        <GenericHeader headerContent = {headerContent}/>
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  null,
  {
    getProjects
  }
)(App)
