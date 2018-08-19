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

import { createStore, applyMiddleware, compose, combineReducers  } from 'redux'

import MainReducer from './MainReducer'

import thunk from 'redux-thunk'

export const history = createHistory()

const middleWare = [thunk, routerMiddleware(history)]
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const combinedReducers = combineReducers({
    MainReducer,
    router: routerReducer
  })

let store = applyMiddleware(...middleWare)(createStore)(combinedReducers, reduxDevToolsExtension)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'))
