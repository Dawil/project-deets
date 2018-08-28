import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import { changeHotkeyDropdown } from '../../actions.js'

class HotkeyPanelEntry extends Component{

  constructor(){
    super()
    this.state = {
      value: 'ctrl + 1'
    }
  }

  changeHotkey = (e, target) => {
    const { index, changeHotkeyDropdown } = this.props
    changeHotkeyDropdown(target.value, target.id.substring(0,1), target.id.substring(1))
  }

  render() {
    const { value } = this.state;
    const { hotKeyLists, index, myProjects } = this.props

    const blankEntryStyle = [
      {
        backgroundColor: 'rgb(52, 58, 64, 0.95)',
        height: '30px',
      },
      {
        backgroundColor: 'rgb(33, 37, 41, 0.95)',
        height: '30px',
      },
    ]

    const placeHolderStyle = {
      width:'100%',
      height: '30px',
      minHeight: '30px',
      display: 'inline-block',
      color: 'rgb(255, 255, 255, 0.5)',
      verticalAlign: 'top'
    }

    const projectSelectStyle = {
      width: '250px',
      padding: '0px',
      verticalAlign: 'bottom',
      backgroundColor: 'rgb(33, 37, 41, 0)'
    }

    const hotKeySelectStyle = {
      width: '100px',
      padding: '0px',
      verticalAlign: 'bottom',
      backgroundColor: 'rgb(33, 37, 41, 0)'
    }

     const dropdownOption = myProjects.map((project, index) =>
       ({ key: ('project' + index), value: project.project_number, text: project.project_number})
     )

     const hotkeyOptions = [
       { key: '1', value: 'ctrl + 1', text: 'ctrl + 1' },
       { key: '3', value: 'ctrl + 2', text: 'ctrl + 2' },
       { key: '2', value: 'ctrl + 3', text: 'ctrl + 3' },
       { key: '4', value: 'ctrl + 4', text: 'ctrl + 4' },
       { key: '5', value: 'ctrl + 5', text: 'ctrl + 5' },
       { key: '6', value: 'ctrl + 6', text: 'ctrl + 6' },
       { key: '7', value: 'ctrl + 7', text: 'ctrl + 7' },
       { key: '8', value: 'ctrl + 8', text: 'ctrl + 8' },
       { key: '9', value: 'ctrl + 9', text: 'ctrl + 9' },
       { key: '0', value: 'ctrl + 0', text: 'ctrl + 0' }
     ]

     const mainContainer = {
       width:'60%',
       display: 'inline-block'
     }

     const hotKeyContainer = {
       width:'30%',
       display: 'inline-block'
     }

     const edge ={
       width:'5%',
       display: 'inline-block'
     }

     const HijackNestedStyles = styled('div')`
       div.text {
         vertical-align: middle !important;
         display: table-cell !important;
         height: 30px;
         color: #FFF;
       }
       div.item {
         border-top: 0px solid #fafafa !important;
       }
       span.text {
         color: #FFF;
       }
       .ui.fluid.search.selection.dropdown {
         min-height: 28px !important;
         height: 28px !important;
         display: inline-block !important;
       }
       .ui.fluid.search.selection.upward.dropdown{
         display: inline-block !important;
       }
       .ui.dropdown .menu {
         min-width: 100% !important;
         width: 100% !important;
         background-color: ${(index % 2) ? 'rgb(33, 37, 41, 0.9) !important' : 'rgb(52, 58, 64, 0.9) !important'}
       }
     `

    return(
          <div style={blankEntryStyle[this.props.index % blankEntryStyle.length]}>
            <div style={placeHolderStyle}>
              <HijackNestedStyles>
                <div style={edge}/>
                <div style={mainContainer}>
                {
                  myProjects.length > 0 ?
                    <Dropdown
                    id={index + 'project'}
                    style={projectSelectStyle}
                    placeholder='select project'
                    fluid search selection 
                    options={dropdownOption}
                    value={hotKeyLists[index].project}
                    onChange={this.changeHotkey}/>
                  : null
                }
                </div>
                <div style={hotKeyContainer}>
                {
                  hotKeyLists.length > 0 ?
                    <Dropdown
                    id={index + 'hotkey'}
                    style={hotKeySelectStyle}
                    fluid search selected selection
                    options={hotkeyOptions}
                    value={hotKeyLists[index].hotkey}
                    onChange={this.changeHotkey}/>
                  : null
                }
                </div>
                <div style={edge}/>
              </HijackNestedStyles>
            </div>
          </div>
    )
  }
}

export default connect(
  state => ({
    hotKeyLists: state.MainReducer.hotKeyLists,
    myProjects: state.MainReducer.myProjects
  }),
  {
    changeHotkeyDropdown
  }
)(HotkeyPanelEntry)
