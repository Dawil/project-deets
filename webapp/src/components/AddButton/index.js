import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { addProject } from '../../actions.js'

class AddButton extends Component{

  _addProject = () => {
    const { selectedProject, addProject, makeActive } = this.props
    addProject(selectedProject, makeActive)
  }

  render() {
    const { selectedProject } = this.props

    const buttonStyle = {
      height: `${this.props.xzibitProps}`,
      width: '100px',
      backgroundColor: '#fff'
    }

    return(
      <div>
        {
          selectedProject.jobName ?
          <Button style = {buttonStyle} circular onClick={this._addProject}>Add</Button>
          : null
        }
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
)(AddButton)
