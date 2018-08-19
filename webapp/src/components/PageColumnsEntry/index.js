import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import SuffixPanel from '../SuffixPanel'
import ColumnSimpleEntry from '../ColumnSimpleEntry'
import CheckBox from '../CheckBox'
import AddButton from '../AddButton'

const ColumnEntry = (props) => {

    const mainStyle = {
      margin: '20px',
      height: `${props.entry.height}`,
      width: 'calc(100% - 40px)',
      display: 'block',
      align: 'top'
    }

    return(
      <div>
        {React.cloneElement(props.entry.component, {xzibitProps: props.entry.height})}
      </div>
    )
  }

export default connect(
  null, null
)(ColumnEntry)
