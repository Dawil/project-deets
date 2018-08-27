import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ColumnSimpleEntry from '../ColumnSimpleEntry'
import GenericButton from '../GenericButton'
import HotkeyPanel from '../HotkeyPanel'

class ColumnHotkeys extends Component{

  downLoadHotkeys = () => {
    console.log('downloaded')
  }

  render() {
    const { myProjects } = this.props

    const SearchBarEntry = {
      component: <SearchBar />,
      height: '50px'
    }

    const mainStyle = {
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
      marginRight: '20px',
      height: 'calc(100% - 40px)',
      width: '500px',
      display: 'inline-block',
      overflow: 'auto',
    }

    const middleStyle = {
      display: 'block',
      align: 'top',
      margin: '20px '
    }

    return(
      <div style = {mainStyle} >
        <div style = {middleStyle} >
          <HotkeyPanel/>
          <div onClick={this.downLoadHotkeys}>
            <GenericButton label="get file"/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null, null
)(ColumnHotkeys)
