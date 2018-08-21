import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidePanel from '../SidePanel';
import ColumnEntry from '../ColumnEntry';
import ColumnProjects from '../ColumnProjects';
import ColumnDivider from '../ColumnDivider';
import ColumnDetail from '../ColumnDetail';

class MyProjects extends Component {


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

    const pageStyle = {
      height: '800px',
      backgroundColor: '#435a77',
      display: 'inline-block',
      width: 'calc(100%)',
    }


    return (
      <div style={wrapperStyle}>
        <div style={pageStyle}>
        <SidePanel/>
        <ColumnProjects />
        <ColumnDivider />
        <ColumnDetail />
        </div>
      </div>
    );
  }
}

export default connect(
  null,null
)(MyProjects)
