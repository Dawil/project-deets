import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidePanel from '../SidePanel';
import ColumnEntry from '../ColumnEntry';
import ColumnHotkeys from '../ColumnHotkeys';
import ColumnDivider from '../ColumnDivider';
import ColumnDetail from '../ColumnDetail';

class Hotkeys extends Component {


  render() {

    const wrapperStyle = {
      display: 'inline-block',
      height: '100%',
      width: '100%'
    }

    const pageStyle = {
      minHeight: '800px',
      height: 'calc(100vh - 56px)',
      backgroundColor: '#435a77',
      display: 'inline-block',
      width: 'calc(100%)',
    }

    return (
      <div style={wrapperStyle}>
        <div style={pageStyle}>
          <SidePanel/>
          <ColumnHotkeys />
          <ColumnDetail />
        </div>
      </div>
    );
  }
}

export default connect(
  null,null
)(Hotkeys)
