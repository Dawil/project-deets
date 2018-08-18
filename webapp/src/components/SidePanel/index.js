import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SidePanelItem from '../SidePanelItem'

class SidePanel extends Component{

  render() {

    const { myProjects } = this.props

    const mainStyle = {
      padding: '20px',
      height: '800px',
      width: '300px',
      display: 'inline-block',
      backgroundColor: 'rgb(52, 58, 64, 0.95)',
      verticalAlign: 'top',
    }

    const SampleItem = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    return(
      <div style = {mainStyle}>
        {
          myProjects ?
            myProjects.map( item =>
              <SidePanelItem key={item.project_number.substring(0,6) + '-' + item.project_number.substring(6,8)} projectNumber={item.project_number.substring(0,6) + '-' + item.project_number.substring(6,8)} projectName={item.project_name}/>
            )
          : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    myProjects: state.MainReducer.myProjects
  }), null
)(SidePanel)
