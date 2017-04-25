import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {
    text: state.two
  }
}

class PageTwo extends React.Component {
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

module.exports = connect(mapStateToProps)(PageTwo);
