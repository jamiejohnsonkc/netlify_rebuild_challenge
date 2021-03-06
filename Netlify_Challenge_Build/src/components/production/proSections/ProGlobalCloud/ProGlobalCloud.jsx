/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import Cloud from "../../../../svg/assets/cloud.svg"
import SplitTextLine from "../../../base/SplitTextLine/SplitTextLine"
import Grid66Text33Visual from "../../../templates/Grid66Text33Visual"
import ProPancake from "../../proLayout/ProPancake"

// const SplitText = ({ textline1, textline2, ...props }) => (
//   <>

// />
//   </>
// )

// SplitText = {
//   textLine1: "Global by default.",
//   textLine2: "Multi-cloud by design.",
// }

const ProGlobalCloud = (props) => {
  const SplitText = () => (
    <SplitTextLine
      textLine1="Global by default."
      textLine2="Multi-cloud by design."
    />
  )

  return (
    <ProPancake>
      <Container
        {...props}
        // className="Container"
        sx={{
          variant: "layout.containerNarrow",
        }}
      >
        <Grid66Text33Visual
          displayText="Distributed just like a CDN, but with advanced functionality for publishing entire sites and applications. Automate builds to prerender content and deploy worldwide to every major cloud provider—including staging, rollbacks, and even A/B testing."
          subheadText="A global platform with powerful features for managing code and assets."
          headerText={<SplitText />}
          visual={<Cloud />}
        />
      </Container>
    </ProPancake>
  )
}

ProGlobalCloud.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

ProGlobalCloud.defaultProps = {}

export default ProGlobalCloud
