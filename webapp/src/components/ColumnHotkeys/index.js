import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ColumnSimpleEntry from '../ColumnSimpleEntry'
import GenericButton from '../GenericButton'
import HotkeyPanel from '../HotkeyPanel'
import { autoHotKeyGenerate } from '../../autoHotKeyGenerate.js'

class ColumnHotkeys extends Component{

  downLoadHotkeys = () => {
    const { authObject, hotKeyLists } = this.props
    console.log(authObject)
    authObject.getUserInfo().then(res =>{
      let user = res.given_name + '.' + res.family_name
      let hotKeyMappings = hotKeyLists.filter(item => item.project.length > 0)
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(autoHotKeyGenerate(user, hotKeyMappings)));
      element.setAttribute('download', 'project_folders.ahk');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
      console.log('downloaded')
    })
  }

  render() {
    const { myProjects } = this.props

    const SearchBarEntry = {
      component: <SearchBar />,
      height: '50px'
    }

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

    const middleStyle = {
      display: 'block',
      align: 'top',
      margin: '20px '
    }

    return(
      <div style = {mainStyle} >
        <div style = {middleStyle} >
          <HotkeyPanel/>
          <div onClick={this.downLoadHotkeys}>
            <GenericButton label="get file"/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    authObject: state.MainReducer.authObject,
    hotKeyLists: state.MainReducer.hotKeyLists
  }), null
)(ColumnHotkeys)
