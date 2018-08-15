import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'

class SearchBar extends Component{

  render() {

    const mainStyle = {
      display: 'block',
      height: '100%',
      align: 'top',
      backgroundColor: '#604a88'
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
      height: '100%'
    }

    return(
      <div style = {mainStyle}>
        <div style = {middleDivStyle} >
        <input placeholder='Search...' style = {inputStyle}/>
        </div>
      </div>
    )
  }
}

export default connect(
  null, null
)(SearchBar)
