/** @jsx jsx */
import {
  jsx,
  useThemeUI,
  useColorMode,
  colorMode,
  setColorMode,
  Box,
  Text,
} from "theme-ui"
import React from "react"

// const ThemeContext = React.createContext("light")

// const TestApp = () => {
//   const theme = useContext(ThemeContext)
//   return (
//     <div className="testColor" style={{ background: "black", height: "400px" }}>
//       <div
//         style={{
//           background: theme === "dark" ? "black" : "papayawhip",
//           color: theme === "dark" ? "white" : "palevioletred",
//           width: "100%",
//           height: "200px",
//         }}
//       >
//         {"The theme here is " + theme}
//       </div>
//     </div>
//   )
// }

// export default TestApp

const TestApp = () => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("dark")
  return (
    <Box bg="primary" height="100px" width="100px">
      <Text color="highlight">Test Text</Text>
    </Box>
  )
}

export default TestApp
