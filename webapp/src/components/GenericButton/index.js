import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { addProject } from '../../actions.js'

class GenericButton extends Component{

  render() {

    const buttonStyle = {
      height: '50px',
      width: '100px',
      backgroundColor: '#fff'
    }

    return(
      <div>
        <Button style = {buttonStyle} circular>{this.props.label}</Button>
      </div>
    )
  }
}

export default connect(
  state => ({
    selectedProject: state.MainReducer.selectedProject,
    makeActive: state.MainReducer.makeActive
  }),
  {
    addProject
  }
)(GenericButton)
