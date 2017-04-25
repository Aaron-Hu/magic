import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../common/App'
import PageOne from '../common/PageOne'
import PageTwo from '../common/PageTwo'
import Home from '../common/Home'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/one/:text' component={PageOne}/>
    <Route path='/two/:text' component={PageTwo}/>
  </Route>
)
