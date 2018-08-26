import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SuffixPanelEntry from '../SuffixPanelEntry'
import { selectProject } from '../../actions.js'

class SuffixPanel extends Component{

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  fillBlanks = (currentRows) => {
    let blankArray = []
    let rowsToFill = 20 - currentRows
    if (rowsToFill < 0) {
      rowsToFill = 0
    }
    for (var i = 0; i < rowsToFill; i++) {
      blankArray.push('a');
    }
    return blankArray
  }

  render() {

    const { searchData } = this.props

    const mainStyle = {
      display: 'block',
      height: '100%',
      align: 'top'
    }

    const middleDivStyle = {
      border: '0px solid black',
      borderRadius: '25px',
      width:'460px',
      height: `${this.props.xzibitProps}`,
      textAlign : 'center',
      verticalAlign: 'top',
      overflowX: 'hidden',
      overflowY: 'scroll',
      boxSizing: 'content-box'
    }

    const blankEntryStyle = [
      {
        backgroundColor: 'rgb(52, 58, 64, 0.5)',
        height: '20px',
      },
      {
        backgroundColor: 'rgb(33, 37, 41, 0.5)',
        height: '20px',
      },
    ]

    const DivWithHover = styled('div')`
      cursor: pointer;
      width: 80%;
      height:  20px;
      display: inline-block;
      color: rgb(255, 255, 255, 0.5);

      &:hover {
        color: rgba(255, 255, 255, 0.75) !important;
        text-decoration: none;
      }
    `

    const placeHolderStyle = {
      width:'100%',
      height: '20px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)'
    }

    return(
      <div style = {mainStyle}>
        <div style = {middleDivStyle} className='noscroll'>
          {
            searchData ?
              searchData.value[0].Jobs.map((job, index) =>
                <SuffixPanelEntry key={job.JobSuffix} index={index} job={job} />
              )
            : null
          }
          {
            searchData ?
              this.fillBlanks(searchData.value[0].Jobs.length).map((item, index) =>
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
    searchData: state.MainReducer.searchData
  }),
  {
    selectProject
  }
)(SuffixPanel)
