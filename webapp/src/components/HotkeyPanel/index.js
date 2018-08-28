import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import DetailPanelEntry from '../DetailPanelEntry'
import { selectProject } from '../../actions.js'
import { Dropdown } from 'semantic-ui-react'
import HotkeyPanelEntry from '../HotkeyPanelEntry'

class HotkeyPanel extends Component{

  constructor(){
    super()
    this.state = {
      selected: ''
    }
  }

  render() {

    const { searchData, selectedProject } = this.props

    const middleDivStyle = {
      border: '0px solid black',
      borderRadius: '25px',
      width:'460px',
      textAlign : 'center',
      verticalAlign: 'top',
      boxSizing: 'content-box',
    }

     const hotkeyOptions = [
       { key: '1', value: 'ctrl + 1', text: 'ctrl + 1' },
       { key: '2', value: 'ctrl + 2', text: 'ctrl + 2' },
       { key: '3', value: 'ctrl + 3', text: 'ctrl + 3' },
       { key: '4', value: 'ctrl + 4', text: 'ctrl + 4' },
       { key: '5', value: 'ctrl + 5', text: 'ctrl + 5' },
       { key: '6', value: 'ctrl + 6', text: 'ctrl + 6' },
       { key: '7', value: 'ctrl + 7', text: 'ctrl + 7' },
       { key: '8', value: 'ctrl + 8', text: 'ctrl + 8' },
       { key: '9', value: 'ctrl + 9', text: 'ctrl + 9' },
       { key: '0', value: 'ctrl + 0', text: 'ctrl + 0' }
      ]

    return(
        <div style = {middleDivStyle} className='noscroll'>
          {
            true  ?
              hotkeyOptions.map((item, index) =>
                <HotkeyPanelEntry key={item.key} index={index} />
              )
            : null
          }
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
)(HotkeyPanel)
