import React, { Component } from "react"

class MyLink3 extends Component {
  render(props) {
    return (
      <div>
        <div>
          {this.props.link.name} ({this.props.link.link})
        </div>
      </div>
    )
  }
}

export default MyLink3
