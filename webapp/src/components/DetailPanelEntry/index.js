import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'

class DetailPanelEntry extends Component{

  constructor(){
    super()
    this.state = {
      selected: null
    }
  }

  render() {

    const { detail, index } = this.props

    const entryStyle = [
      {backgroundColor: 'rgb(52, 58, 64, 0.95)', height: '30px'},
      {backgroundColor: 'rgb(33, 37, 41, 0.95)', height: '30px'},
    ]

    const detailKeyStyle = {
      height: '30px',
      display: 'table-cell',
      verticalAlign: 'middle',
      color: 'rgb(255, 255, 255)'
    }

    const detailValuestyle = {
      height: '30px',
      display: 'table-cell',
      verticalAlign: 'middle',
      color: 'rgb(255, 255, 255, 0.5)'
    }

    const container = {
      width:'45%',
      display: 'inline-block'
    }

    const edge ={
      width:'5%',
      display: 'inline-block'
    }

    return(
      <div key={detail[0] + 'container'} style={entryStyle[index % entryStyle.length]}>
        <div style={edge}>
        </div>
        <div style={container}>
          <div style={detailKeyStyle} key={detail[0] + 'key'} >{detail[0]}</div>
        </div>
        <div style={container}>
          <div style={detailValuestyle} key={detail[1] + 'value'} >{detail[1]}</div>
        </div>
        <div style={edge}>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchData: state.MainReducer.searchData
  }), null
)(DetailPanelEntry)
