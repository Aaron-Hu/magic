import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './routes'

class RootContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Router routes={routes} history={browserHistory} />
  }
}

module.exports = RootContainer;
