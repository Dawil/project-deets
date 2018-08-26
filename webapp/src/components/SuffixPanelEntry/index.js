import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { selectProject } from '../../actions.js'

class SuffixPanelEntry extends Component{

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  selectProject = (e) => {
    const { selectProject, index, searchData } = this.props
    this.setState({
      selected: e.target.id
    })
    selectProject(e.target.id, e.target.innerHTML, searchData.value[0].Jobs[index], index)
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

    const { searchData, job, index } = this.props

    const entryStyle = [
      {backgroundColor: 'rgb(52, 58, 64, 0.95)'},
      {backgroundColor: 'rgb(33, 37, 41, 0.95)'},
    ]

    const suffixEntryStyle = {
      width:'10%',
      height: '20px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255)'
    }

    const AccountingCentreCodeEntryStyle = {
      width:'10%',
      height: '20px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)'
    }

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

    return(
      <div onClick={this.selectProject} key={job.JobSuffix} style={entryStyle[index % entryStyle.length]}>
        <div style={suffixEntryStyle} key={job.JobSuffix} id={job.JobCode}>{job.JobSuffix}</div>
        <div style={AccountingCentreCodeEntryStyle} key={job.AccountingCentreCode} id={job.JobCode}>{job.AccountingCentreCode}</div>
        <DivWithHover key={job.JobNameShort} id={job.JobCode}>{job.JobNameShort}</DivWithHover>
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
)(SuffixPanelEntry)
