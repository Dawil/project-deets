import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import ColumnEntry from '../ColumnEntry';
import ColumnSimple from '../ColumnSimple';
import ColumnDivider from '../ColumnDivider';
import ColumnDetail from '../ColumnDetail';

class PageColumns extends Component{

  render() {
    const { columns } = this.props
    console.log(columns)

    const columnSimple = {component: <ColumnSimple />}
    const columnDivider = {component: <ColumnDivider />}
    const columnDetail = {component: <ColumnDetail />}

    const mainStyle = {
      height: '800px',
      backgroundColor: '#435a77',
      display: 'inline-block',
      width: 'calc(100% - 300px)',
    }

    const SampleItem = styled('div')`
      height: 40px;
      padding: 0.3125rem;
      display: inline-block;
    `

    return(
      <div style = {mainStyle}>
        {
          columns?
            columns.map((item, index) =>
              <ColumnEntry key={index} entry={item} />
            )
          : null
        }
      </div>
    )
  }
}

export default connect(
  null, null
)(PageColumns)
