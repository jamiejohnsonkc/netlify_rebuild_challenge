/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import GridResp1c_2c from "../../../layout/Grid/GridResp1c_2c"
import Pancake from "../../../layout/Pancake/Pancake"
import ContactSalesForm from "../../proLayout/forms/ContactSalesForm"
import ContactPageDialogue from "../ContactPageDialogue"

const ContactPageContent = (props) => (
  <Pancake>
    <Container variant="containerNarrow">
      <GridResp1c_2c
        contentCol1={<ContactPageDialogue />}
        contentCol2={<ContactSalesForm />}
      />
    </Container>
  </Pancake>
)

ContactPageContent.propTypes = {}

ContactPageContent.defaultProps = {}

export default ContactPageContent
