import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ColumnSimpleEntry from '../ColumnSimpleEntry'
import { Form, Radio } from 'semantic-ui-react'
import { updateProjectStatus } from '../../actions.js'

class RadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => {
    const { number, updateProjectStatus, myProjects, index } = this.props
    this.setState({ value })
    console.log(myProjects[index].project_status == 'active')
    updateProjectStatus(index, number, {value}['value'])
  }

  render() {

    const { myProjects, number, index } = this.props

    const mainStyle = {
      display: 'inline-block',
      width: "60%",
      textAlign: 'center'
    }

    const inlineStyle = {
      display: 'inline-block',
      width: "20%"
    }

    const HijackNestedStylesGreen = styled('div')`
      .ui.radio.checkbox input:focus:checked~.box:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }

      .ui.radio.checkbox input:focus:checked~label:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }

      .ui.radio.checkbox input:checked~.box:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }

      .ui.radio.checkbox input:checked~label:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }

      .ui.radio.checkbox .box:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }

      .ui.radio.checkbox label:after {
        color: rgb(34, 204, 71) !important;
        background-color: rgb(34, 204, 71) !important;
      }
    `

    const HijackNestedStylesYellow = styled('div')`
      .ui.radio.checkbox input:focus:checked~.box:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }

      .ui.radio.checkbox input:focus:checked~label:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }

      .ui.radio.checkbox input:checked~.box:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }

      .ui.radio.checkbox input:checked~label:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }

      .ui.radio.checkbox .box:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }

      .ui.radio.checkbox label:after {
        color: rgb(245, 208, 13) !important;
        background-color: rgb(245, 208, 13) !important;
      }
    `

    const HijackNestedStylesRed = styled('div')`
      .ui.radio.checkbox input:focus:checked~.box:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }

      .ui.radio.checkbox input:focus:checked~label:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }

      .ui.radio.checkbox input:checked~.box:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }

      .ui.radio.checkbox input:checked~label:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }

      .ui.radio.checkbox .box:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }

      .ui.radio.checkbox label:after {
        color: rgb(233, 57, 33) !important;
        background-color: rgb(233, 57, 33) !important;
      }
    `

    const HijackNestedStylesGrey = styled('div')`
      .ui.radio.checkbox input:focus:checked~.box:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }

      .ui.radio.checkbox input:focus:checked~label:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }

      .ui.radio.checkbox input:checked~.box:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }

      .ui.radio.checkbox input:checked~label:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }

      .ui.radio.checkbox .box:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }

      .ui.radio.checkbox label:after {
        color: rgb(154, 154, 154) !important;
        background-color: rgb(154, 154, 154) !important;
      }
    `

    return (
      <div style={mainStyle}>
      <Form>
        <HijackNestedStylesGreen style={inlineStyle}>
          <Radio
            name='radioGroup'
            value='active'
            checked={myProjects[index].project_status == 'active'}
            onChange={this.handleChange}
          />
        </HijackNestedStylesGreen>
        <HijackNestedStylesYellow style={inlineStyle}>
          <Radio
            name='radioGroup'
            value='standby'
            checked={myProjects[index].project_status == 'standby'}
            onChange={this.handleChange}
          />
          </HijackNestedStylesYellow>
          <HijackNestedStylesRed style={inlineStyle}>
          <Radio
            name='radioGroup'
            value='inactive'
            checked={myProjects[index].project_status == 'inactive'}
            onChange={this.handleChange}
          />
          </HijackNestedStylesRed>
          <HijackNestedStylesGrey style={inlineStyle}>
          <Radio
            name='radioGroup'
            value='archived'
            checked={myProjects[index].project_status == 'archived'}
            onChange={this.handleChange}
          />
          </HijackNestedStylesGrey>
          </Form>
      </div>
    )
  }
}

export default connect(
  state => ({
    myProjects: state.MainReducer.myProjects
  }), {
    updateProjectStatus
  }
)(RadioGroup)
