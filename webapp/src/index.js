import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { AuthProvider, withAuth }  from 'react-authenticate'

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, applyMiddleware, compose, combineReducers  } from 'redux'

import MainReducer from './MainReducer'

import thunk from 'redux-thunk'

const history = createHistory()

const middleWare = [thunk, routerMiddleware(history)]
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const combinedReducers = combineReducers({
    MainReducer,
    router: routerReducer
  })

let store = applyMiddleware(...middleWare)(createStore)(combinedReducers, reduxDevToolsExtension)



let auth0Options = {
  languageDictionary: {
    title: 'APM (Arup Project Manager)'
  },
  theme: {
    labeledSubmitButton: false,
    logo: 'https://s3-ap-southeast-2.amazonaws.com/arupdigital-assets/logo.png',
    primaryColor: '#27AAE1'
  }
}

class AuthWall extends Component {
  componentDidMount() {
    const { auth } = this.props
    if (!auth.loggedIn) {
      auth.login()
    }
  }
  componentDidUpdate() {
    const { auth } = this.props
    if (!auth.loggedIn) {
      auth.login()
    }
  }
  render() {
    const { auth } = this.props
    if (auth.loggedIn) {
      return <App auth={auth} />

    }
    return null
  }
}

const ConnectedAuthWall = withAuth(AuthWall)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AuthProvider
        title="APM (Arup Project Manager)"
        clientId="A1ib6vpGvP63H8ZoyVR62ZFE1NQzJ8V7"
        domain="arupdigital.au.auth0.com"
        callbackUrl='http://localhost:3000/callback'
        options={auth0Options}
      >
        <ConnectedAuthWall />
      </AuthProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'))
