import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'

class SuffixPanel extends Component{

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
      overflowY: 'scroll'
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

    const JobNameShortEntryStyle = {
      width:'80%',
      height: '20px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)'
    }

    return(
      <div style = {mainStyle}>
        <div style = {middleDivStyle}>
          {
            searchData ?
              searchData.value[0].Jobs.map((job, index) =>
                <div key={job.JobSuffix} style={entryStyle[index % entryStyle.length]}>
                  <div style={suffixEntryStyle} key={job.JobSuffix}>{job.JobSuffix}</div>
                  <div style={AccountingCentreCodeEntryStyle} key={job.AccountingCentreCode}>{job.AccountingCentreCode}</div>
                  <div style={JobNameShortEntryStyle} key={job.JobNameShort}>{job.JobNameShort}</div>
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
  }), null
)(SuffixPanel)
