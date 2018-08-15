import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SidePanelItem from '../SidePanelItem'

class SidePanel extends Component{

  render() {

    const { sidePanelItems } = this.props

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
          sidePanelItems ?
            sidePanelItems.map( item =>
              <SidePanelItem key={item.number} projectNumber={item.number} projectName={item.shortName}/>
            )
          : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    sidePanelItems: state.MainReducer.sidePanelItems
  }), null
)(SidePanel)
