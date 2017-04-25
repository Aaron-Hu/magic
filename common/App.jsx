import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <p>App</p>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
