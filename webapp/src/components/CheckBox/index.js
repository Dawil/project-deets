import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'
import { setMakeActive } from '../../actions.js'

class CheckBox extends Component{

  _setMakeActive = () => {
    const { makeActive, setMakeActive } = this.props
    setMakeActive(makeActive)
  }

  render() {
    const { makeActive, selectedProject } = this.props

    const HijackNestedStyles = styled('div')`
      .ui.checkbox label {
        color: rgba(255, 255, 255) !important;
      }

      .ui.toggle.checkbox input:checked~.box:before {
        color: rgba(255, 255, 255) !important;
      }

      .ui.toggle.checkbox input:checked~label:before {
        color: rgba(255, 255, 255) !important;
      }
    `

    return(
      <HijackNestedStyles>
      {
        selectedProject ?
        <Checkbox
        label='Make active project'
        checked={makeActive}
        onClick={this._setMakeActive}
        />
        : null
      }
      </HijackNestedStyles>
    )
  }
}

export default connect(
  state => ({
    selectedProject: state.MainReducer.selectedProject,
    makeActive: state.MainReducer.makeActive
  }),
  {
    setMakeActive
  }
)(CheckBox)
