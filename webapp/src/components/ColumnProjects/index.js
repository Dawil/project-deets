import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ColumnSimpleEntry from '../ColumnSimpleEntry'
import { Form, Radio } from 'semantic-ui-react'
import RadioGroup from '../RadioGroup'

class ColumnProjects extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { myProjects } = this.props

    const mainStyle = {
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
      marginRight: '20px',
      height: 'calc(100% - 40px)',
      width: '500px',
      display: 'inline-block',
      overflow: 'auto',
    }

    const titleStyle = {
      marginBottom: '20px',
      marginTop: '20px'
    }

    const entryStyle = {
      marginBottom: '20px',
      marginTop: '20px',
      height: '40px',
      width: '500px',
    }

    const Title = styled('div')`
      display: inline-block;
      color: rgba(255, 255, 255, 0.5);
      width: 40%;
      text-align: center;
    `

    const TitleRadio = styled('div')`
      display: inline-block;
      color: rgba(255, 255, 255, 0.5);
      width: 60%;
      text-align: center;
    `

    const RadioTitle = styled('div')`
      display: inline-block;
      width: 20%;
      text-align: center;
    `

    const DivWithHover = styled('div')`
      display: inline-block;
      color: rgba(255, 255, 255, 0.5);
      width: 40%;
      text-align: center;

      &:hover {
        color: rgba(255, 255, 255, 0.75) !important;
        text-decoration: none;
      }
    `

    return (
      <div style={mainStyle}>
        <div style = {titleStyle}>
          <Title>Project</Title>
          <TitleRadio>
            <RadioTitle>active</RadioTitle>
            <RadioTitle>standby</RadioTitle>
            <RadioTitle>inactive</RadioTitle>
            <RadioTitle>archived</RadioTitle>
          </TitleRadio>
        </div>
        {
          myProjects ?
            myProjects.map( (item, index) =>
              <div key={item.project_number + 'div'} style={entryStyle}>
                <DivWithHover key={item.project_number + 'project'}>{item.project_number.substring(0,6) + '-' + item.project_number.substring(6,8) + '-' + item.project_name}</DivWithHover>
                <RadioGroup index={index} number={item.project_number} key={item.project_number + 'radios'} />
              </div>
            )
          : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    myProjects: state.MainReducer.myProjects
  }), null
)(ColumnProjects)
