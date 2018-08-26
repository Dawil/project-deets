import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import DetailPanelEntry from '../DetailPanelEntry'
import { Form, TextArea } from 'semantic-ui-react'
import { selectProject } from '../../actions.js'

class ProjectNotes extends Component{

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  fillBlanks = (currentRows) => {
    let blankArray = []
    let rowsToFill = 23 - currentRows
    if (rowsToFill < 0) {
      rowsToFill = 0
    }
    for (var i = 0; i < rowsToFill; i++) {
      blankArray.push('a');
    }
    return blankArray
  }

  render() {

    const { searchData, selectedProject } = this.props

    const mainStyle = {
      display: 'block',
      height: '100%',
      align: 'top',
      height: '693px',
      margin: '20px ',
    }

    const middleDivStyle = {
      border: '0px solid black',
      width:'460px',
      borderRadius: '25px',
      height: '100%',
      textAlign : 'center',
      verticalAlign: 'top',
      overflowX: 'hidden',
      overflowY: 'scroll',
      boxSizing: 'content-box',
      backgroundColor: 'rgb(255, 255, 255)'
    }

    const formStyle = {
      height: '100%',
      width: '100%',
    }

    const textAreaStyle = {
      height: '100%',
      width: '90%',
      resize: 'none',
      border: '0px solid black',
      paddingLeft: '0px',
      paddingRight: '0px'
    }

    return(
      <div style = {mainStyle}>
        <div style = {middleDivStyle} className='noscroll'>
          <Form style={formStyle}>
            <TextArea autoHeight rows="40" style={textAreaStyle} placeholder='Notes...' />
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchData: state.MainReducer.searchData,
    selectedProject: state.MainReducer.selectedProject
  }),
  {
    selectProject
  }
)(ProjectNotes)
