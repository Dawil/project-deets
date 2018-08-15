import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ColumnSimpleEntry from '../ColumnSimpleEntry'

class ColumnSimple extends Component{

  render() {

    const SearchBarEntry = {
      component: <SearchBar />,
      height: '50px'
    }

    const mainStyle = {
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
      height: 'calc(100% - 40px)',
      width: '500px',
      display: 'inline-block',
      overflow: 'auto',
      backgroundColor: 'rgba(91, 113, 83, 0.84)'
    }

    const SampleItem = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    return(
      <div style = {mainStyle}>
        <ColumnSimpleEntry entry={SearchBarEntry} />
      </div>
    )
  }
}

export default connect(
  null, null
)(ColumnSimple)
