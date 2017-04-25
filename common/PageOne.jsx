import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {
    text: state.one
  }
}

class PageOne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        {this.props.text}
      </div>
    )
  }
}

module.exports = connect(mapStateToProps)(PageOne);
