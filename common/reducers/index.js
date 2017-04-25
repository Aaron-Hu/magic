import {combineReducers} from 'redux'
import pageOne from './pageOneReducer'
import pageTwo from './pageTwoReducer'

module.exports = combineReducers({
  one: pageOne,
  two: pageTwo
})
