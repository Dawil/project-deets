import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import DetailPanelEntry from '../DetailPanelEntry'
import { selectProject } from '../../actions.js'

class DetailPanel extends Component{

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
      height: '690px',
      margin: '20px '
    }

    const middleDivStyle = {
      border: '0px solid black',
      borderRadius: '25px',
      width:'460px',
      height: '100%',
      textAlign : 'center',
      verticalAlign: 'top',
      overflowX: 'hidden',
      overflowY: 'hidden',
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

    return(
      <div style = {mainStyle}>
        <div style = {middleDivStyle} className='noscroll'>
          {
            true ?
              Object.entries(selectedProject).map((detail, index) =>
              <DetailPanelEntry key={detail[0]} detail={detail} index={index}/>
              )
            : null
          }
          {
            true  ?
              this.fillBlanks(Object.entries(selectedProject).length).map((item, index) =>
                <div key={index+'outer'} style={blankEntryStyle[index % blankEntryStyle.length]}>
                  <div key={index+'inner'} style={placeHolderStyle}></div>
                </div>
              )
            : null
          }
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
