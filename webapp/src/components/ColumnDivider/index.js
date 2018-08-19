import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import GenericContainer from '../GenericContainer'
import Divider from '../Divider'

class ColumnDivider extends Component{

  render() {

    const divider = {component: <Divider />}

    const mainStyle = {
      marginRight: '20px',
      marginLeft: '20px',
      marginTop: '40px',
      height: 'calc(100% - 80px)',
      width: '2px',
      display: 'inline-block',
      overflow: 'auto',
      verticalAlign: 'top',
      backgroundColor: 'rgba(255, 255, 255)'
    }

    const SampleItem = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    return(
      <div style = {mainStyle}>
        <GenericContainer entry={divider} />
      </div>
    )
  }
}

export default ColumnDivider
