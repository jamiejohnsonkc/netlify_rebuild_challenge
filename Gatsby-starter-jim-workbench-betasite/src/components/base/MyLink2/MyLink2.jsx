import React, { Component } from "react"

class MyLink2 extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.name} ({this.props.link.link})
        </div>
      </div>
    )
  }
}

export default MyLink2
