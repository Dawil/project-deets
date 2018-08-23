import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { searchProject } from '../../actions.js'

class SearchBar extends Component{

  search = (e) => {
    const { searchProject } = this.props
    if (e.target.value.length == 6 && /^\d+$/.test(e.target.value)) {
      console.log('searching')
      searchProject('JobNumber', e.target.value)
    }
  }

  render() {

    const MainDiv = styled('div')`
      input:focus {
        outline: 0px !important;
        border: 1px solid blue !important;
      }
    `

    const mainStyle = {
      display: 'block',
      height: '100%',
      align: 'top'
    }

    const middleDivStyle = {
      display: 'table-cell',
      width:'460px',
      height: `${this.props.xzibitProps}`,
      textAlign : 'center',
      verticalAlign: 'middle'
    }

    const inputStyle = {
      width:'100%',
      height: '100%',
      border: '0px solid blue',
      borderRadius: '10em',
    }

    return(
      <MainDiv style = {mainStyle}>
        <div style = {middleDivStyle} >
        <input placeholder='Search...' style = {inputStyle} onChange = {this.search}/>
        </div>
      </MainDiv>
    )
  }
}

export default connect(
  null,
  {
    searchProject
  }
)(SearchBar)
