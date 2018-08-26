import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidePanel from '../SidePanel';
import ColumnEntry from '../ColumnEntry';
import ColumnSingleProject from '../ColumnSingleProject';
import ColumnDivider from '../ColumnDivider';
import ColumnDetail from '../ColumnDetail';
import ProjectNotes from '../ProjectNotes'

class SingleProject extends Component {


  render() {

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
        <ColumnSingleProject/>
        <ColumnDetail />
        </div>
      </div>
    );
  }
}

export default connect(
  null,null
)(SingleProject)
