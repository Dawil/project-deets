import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageColumns from '../PageColumns';
import PageColumnsEntry from '../PageColumnsEntry'
import SidePanel from '../SidePanel';
import ColumnEntry from '../ColumnEntry';
import ColumnSimple from '../ColumnSimple';
import ColumnDivider from '../ColumnDivider';
import ColumnDetail from '../ColumnDetail';

class MyProjects extends Component {


  render() {

    const columnDivider = {component: <ColumnDivider />}
    const columnDetail = {component: <ColumnDetail />}

    const stuffToRender = [
      columnDetail,
      columnDivider,
      columnDetail
    ]

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
        <PageColumns columns={stuffToRender}/>
      </div>
    );
  }
}

export default connect(
  null,null
)(MyProjects)
