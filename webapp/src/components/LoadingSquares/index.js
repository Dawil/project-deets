import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import LoadingSquare from '../LoadingSquare'

class LoadingSquares extends Component{

  constructor(){
    super()
    this.state = {
    }
  }

  render() {

    const loadingContentMiddleStyle = {
      height: '100%',
      width: '20%',
      display: 'inline-block',
    }

    const loadingSquareContainer = {
      display: 'inline-block',
      textAlign: 'center',
      height: '20px',
      width: '33.333%'
    }

    return(
      <div style={loadingContentMiddleStyle}>
        <div style={loadingSquareContainer}>
          <LoadingSquare startTime={0} start={this.props.start}/>
        </div>
        <div style={loadingSquareContainer}>
          <LoadingSquare startTime={250} start={this.props.start}/>
        </div>
        <div style={loadingSquareContainer}>
          <LoadingSquare startTime={500} start={this.props.start}/>
        </div>
      </div>
    )
  }
}

export default connect(
  null , null
)(LoadingSquares)
