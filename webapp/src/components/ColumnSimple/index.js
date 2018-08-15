import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import SuffixPanel from '../SuffixPanel'
import ColumnSimpleEntry from '../ColumnSimpleEntry'

class ColumnSimple extends Component{

  render() {

    const SearchBarEntry = {
      component: <SearchBar />,
      height: '50px'
    }

    const SuffixPanelEntry = {
      component: <SuffixPanel />,
      height: '400px'
    }

    const mainStyle = {
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
      height: 'calc(100% - 40px)',
      width: '500px',
      display: 'inline-block',
      overflow: 'auto'
    }

    const SampleItem = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    return(
      <div style = {mainStyle}>
        <ColumnSimpleEntry entry={SearchBarEntry} />
        <ColumnSimpleEntry entry={SuffixPanelEntry} />
      </div>
    )
  }
}

export default connect(
  null, null
)(ColumnSimple)
