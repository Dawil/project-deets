import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'

class SidePanelItem extends Component{

  render() {

    const { projectNumber, projectName } = this.props

    const mainStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      marginLeft: '10px',
      marginRight: '10px',
      height: '40px',
      width: 'calc(100% - 20px)',
      display: 'block',
      textColor: '#1f2328',
      textAlign : 'left',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }

    return(
      <div style = {mainStyle}>
        {projectNumber} - {projectName}
      </div>
    )
  }
}

export default connect(
  null, null
)(SidePanelItem)
