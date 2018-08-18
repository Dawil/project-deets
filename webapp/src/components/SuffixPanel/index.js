import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { selectProject } from '../../actions.js'

class SuffixPanel extends Component{

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  selectProject = (e) => {
    this.setState({
      selected: e.target.id
    })
    this.props.selectProject(e.target.id, e.target.innerHTML)
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

    const aEntryStyle = {
      backgroundColor: 'rgb(72, 71, 85)',
    }

    const bEntryStyle = {
      backgroundColor: 'rgb(43, 42, 56)',
    }

    const entryStyle = [
      {backgroundColor: 'rgb(52, 58, 64, 0.95)'},
      {backgroundColor: 'rgb(33, 37, 41, 0.95)'},
    ]

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
                <div onClick={this.selectProject} key={job.JobSuffix} style={entryStyle[index % entryStyle.length]}>
                  <div style={suffixEntryStyle} key={job.JobSuffix} id={job.JobCode}>{job.JobSuffix}</div>
                  <div style={AccountingCentreCodeEntryStyle} key={job.AccountingCentreCode} id={job.JobCode}>{job.AccountingCentreCode}</div>
                  <DivWithHover key={job.JobNameShort} id={job.JobCode}>{job.JobNameShort}</DivWithHover>
                </div>
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
