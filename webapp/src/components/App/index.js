import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenericHeader from '../GenericHeader'
import Wrapper from '../Wrapper'
import MyProjects from '../MyProjects'
import SingleProject from '../SingleProject'
import { Switch, Route, Router, Link, withRouter } from 'react-router-dom'
import { getProjects } from '../../actions.js'

class App extends Component {

  componentDidMount() {
    this.props.getProjects()
  }

  render() {

    const headerContent = {
      icon: 'https://s3-ap-southeast-2.amazonaws.com/buildingperformance.arup.digital/bpdb.png',
      name: 'Project Deets',
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
        <Route path="/Hotkeys" component={Wrapper}/>
        <Route path="*" component={Wrapper} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  {
    getProjects
  }
)(App))
