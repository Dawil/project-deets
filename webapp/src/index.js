import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, applyMiddleware, compose  } from 'redux'
import reducer from './reducer'

import thunk from 'redux-thunk'

export const history = createHistory()

const middleWare = [thunk, routerMiddleware(history)]
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = applyMiddleware(...middleWare)(createStore)(reducer, reduxDevToolsExtension)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'))
