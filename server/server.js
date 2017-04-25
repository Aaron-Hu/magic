'use strict'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import routes from '../client/routes'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import { match, RouterContext } from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../common/reducers'
import path from 'path'

var app = express()
const compiler = webpack(webpackConfig)

//设置模板引擎，将ejs匹配到html
app.engine('html', require('ejs').renderFile)
//指定模板位置
app.set('views', path.resolve(__dirname, '../templates'))
//设置模板引擎
app.set('view engine', 'html')

//HMR required
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
//HMR required
app.use(require('webpack-hot-middleware')(compiler))

app.use(handleRender)

app.get('*', (req, res, next) => {
  console.log('Enter node server * ...')
  next()
})

app.get('/one/:text', (req, res) => {
  console.log('Enter /one/:text ...')
  setTimeout(() => {
    render(res, {one: req.params.text}, _renderProps)
  }, 5000)
})

app.get('/two/:text', (req, res) => {
  console.log('Enter /two/:text ...')
  setTimeout(() => {
    render(res, {two: req.params.text}, _renderProps)
  }, 5000)
})

app.listen(3000, function() {
  console.log('Express server listen 3000 ...')
})

let _renderProps;
//-----------------------------------------------------------//
function handleRender(req, res, next) {
  console.log('Enter render ...')
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname+redirectLocation.search)
    } else if (renderProps) {
      _renderProps = renderProps
      next()
    } else {
      res.status(404).send('Not Found')
    }
  })
}

function render(res, state, renderProps) {
  let store = createStore(reducers, state)
  res.render('index.html', {
    html: ReactDOMServer.renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          ),
    preloadedState: store.getState()
  })
}
