/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, { useState } from "react"
// import PropTypes from "prop-types"
// import Pancake from "../layout/Pancake"

// const Demo = (props) => {
//   const [isVisible, setIsVisible] = useState(true)
//   return (
//     // <Pancake>
//     //   <Container>
//     <div className={`box ${isVisible ? "" : "hidden"}`}>
//       <h1>Demo Content Begins Here</h1>

//       <button onClick={() => setIsVisible(false)}>Click</button>
//     </div>
//     //   </Container>
//     // </Pancake>
//   )
// }

// Demo.propTypes = {}

// Demo.defaultProps = {}

// export default Demo

function Demo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Demo
