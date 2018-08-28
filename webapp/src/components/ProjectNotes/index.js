import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import DetailPanelEntry from '../DetailPanelEntry'
import { Form, TextArea } from 'semantic-ui-react'
import { updateProjectNotes } from '../../actions.js'

class ProjectNotes extends Component{

  constructor(){
    super()
    this.state = {
      selected: null,
      index: '',
      text: ''
    }
  }

  updateText = (e) => {
    const { myProjects, updateProjectNotes, pageId } = this.props
    updateProjectNotes(e.target.value, this.getIndex(), pageId.replace('-',''))
  }

  getIndex = () => {
    const { myProjects, updateProjectNotes, pageId } = this.props
    let index
    myProjects.map((entry, i) =>
        (entry.project_number) == pageId ? index = i : null
      )
    return index
  }

  getProjectEntry = () => {
    const { myProjects, updateProjectNotes, pageId } = this.props
    const entry = myProjects.filter(entry => (entry.project_number) == pageId)
    return entry
  }

  getText = () => {
    const entry = this.getProjectEntry()
    let text
      entry[0].project_text == 'blankTextField' ? text = '' : text = entry[0].project_text
    return text
  }

  render() {

    const { myProjects, pageId } = this.props

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
      height: 'calc(100% - 50px)',
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
          {
            myProjects[2] ?
              <TextArea autoHeight rows="40"
              style={textAreaStyle}
              placeholder='Notes'
              value={this.getText()}
              onChange={this.updateText}
              />
            : null
          }
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    myProjects: state.MainReducer.myProjects
  }),
  {
    updateProjectNotes
  }
)(ProjectNotes)
