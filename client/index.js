import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import RootContainer from './rootContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../common/reducers'

const preloadedState = window.__PRELOADED_STATE__
const store = createStore(reducers, preloadedState)

render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('contentRoot')
)

if (module.hot) {
  module.hot.accept()
}
