import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'

class LoadingSquare extends Component{

  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
    this.startLoading()
  }

  startLoading = () => {
    const { startTime } = this.props
    setTimeout(() => {
      this.setState({loading: true})
      this.playAnimations()
    }, startTime);
  }

  playAnimations = () => {
    setTimeout(() => {
      this.setState({loading: true})
      this.playAnimations()
    }, 1500);
  }

  render() {

    const LoadingSquare = styled('div')`

        border: ${this.state.loading ? '1px solid #fff;' : '0px solid #fff;'}
        display: table;
        margin: auto;
        vertical-align: middle;
        height: 20px;
        width: 20px;

        animation: ${this.state.loading ? 'fadeinout 1s linear forwards;' : 'none;'}
        @keyframes fadeinout {
          0%,100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fadein {
          0% { opacity: 0; }
          50% { opacity: 1; }
        }
    `

    return(<LoadingSquare />)
  }
}

export default connect(
  null , null
)(LoadingSquare)
