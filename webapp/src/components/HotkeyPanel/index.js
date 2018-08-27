import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import DetailPanelEntry from '../DetailPanelEntry'
import { selectProject } from '../../actions.js'
import { Dropdown } from 'semantic-ui-react'

class DetailPanel extends Component{

  constructor(){
    super()
    this.state = {
      selected: ''
    }
  }

  fillBlanks = (currentRows) => {
    let blankArray = []
    let rowsToFill = 10 - currentRows
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

    const middleDivStyle = {
      border: '0px solid black',
      borderRadius: '25px',
      width:'460px',
      textAlign : 'center',
      verticalAlign: 'top',
      boxSizing: 'content-box'
    }

    const blankEntryStyle = [
      {
        backgroundColor: 'rgb(52, 58, 64, 0.5)',
        height: '30px',
      },
      {
        backgroundColor: 'rgb(33, 37, 41, 0.5)',
        height: '30px',
      },
    ]

    const DivWithHover = styled('div')`
      cursor: pointer;
      width: 80%;
      height:  30px;
      display: inline-block;
      color: rgb(255, 255, 255, 0.5);

      &:hover {
        color: rgba(255, 255, 255, 0.75) !important;
        text-decoration: none;
      }
    `

    const placeHolderStyle = {
      width:'100%',
      height: '30px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)'
    }

    const dropdownStyle = {
      width: '150px',
      hieght: '10px',
      backgroundColor: 'rgb(52, 58, 64, 0.5)',
      padding: '0px'
    }

    const dropdownOptions = [
      { key: 'a', value: '000000-00', text: '000000-00' },
      { key: 'b', value: '000000-00', text: '000000-00' },
      { key: 'c', value: '000000-00', text: '000000-00' },
      { key: 'd', value: '000000-00', text: '000000-00' },
     ]

    return(
        <div style = {middleDivStyle} className='noscroll'>
          {
            true  ?
              this.fillBlanks(0).map((item, index) =>
                <div key={index+'outer'} style={blankEntryStyle[index % blankEntryStyle.length]}>
                  <div key={index+'inner'} style={placeHolderStyle}></div>
                </div>
              )
            : null
          }
          <div style={blankEntryStyle[1 % blankEntryStyle.length]}>
            <div style={placeHolderStyle}>
              <Dropdown style={dropdownStyle} placeholder='Select' fluid search selection options={dropdownOptions} />
            </div>
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
)(DetailPanel)
