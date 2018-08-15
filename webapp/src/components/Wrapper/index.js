import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageColumns from '../PageColumns';
import SidePanel from '../SidePanel';

class Wrapper extends Component {


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

    const wrapperStyle = {
      display: 'inline-block',
      height: '100%',
      width: '100%'
    }


    return (
      <div style={wrapperStyle}>
        <SidePanel/>
        <PageColumns/>
      </div>
    );
  }
}

export default connect(
  null,null
)(Wrapper)
