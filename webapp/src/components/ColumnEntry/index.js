import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import SuffixPanel from '../SuffixPanel'
import CheckBox from '../CheckBox'
import AddButton from '../AddButton'

const ColumnEntry = (props) => {

  const mainStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    height: '100%'
  }

    return(
      <div style={mainStyle}>
        {React.cloneElement(props.entry.component, {xzibitProps: props.entry.height})}
      </div>
    )
  }

export default connect(
  null, null
)(ColumnEntry)
