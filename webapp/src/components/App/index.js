import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenericHeader from '../GenericHeader'
import Wrapper from '../Wrapper'
import MyProjects from '../MyProjects'
import SingleProject from '../SingleProject'
import Hotkeys from '../Hotkeys'
import { Switch, Route, Router, Link, withRouter } from 'react-router-dom'
import { getProjects, addAuth } from '../../actions.js'

class App extends Component {

  componentDidMount() {
    const { auth, addAuth } = this.props
    this.props.getProjects(auth)
    addAuth(auth)
  }

  render() {
    const headerContent = {
      icon: 'https://s3-ap-southeast-2.amazonaws.com/buildingperformance.arup.digital/bpdb.png',
      name: 'APM',
      content: [
        'Lookup',
        'My projects',
        'Hotkeys'
      ]
    }

    return (
      <div>
        <GenericHeader headerContent = {headerContent}/>
        <Switch>
        <Route exact path="/" component={Wrapper}/>
        <Route path="/Lookup" component={Wrapper}/>
        <Route path="/Project/:id" component={SingleProject}/>
        <Route path="/My_projects" component={MyProjects}/>
        <Route path="/Hotkeys" component={Hotkeys}/>
        <Route path="*" component={Wrapper} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  {
    getProjects,
    addAuth
  }
)(App))
