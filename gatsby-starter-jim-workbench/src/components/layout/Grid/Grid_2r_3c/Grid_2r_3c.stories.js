/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Grid_2r_3c from "./Grid_2r_3c"
import Logo1 from "../../../../svg/assets/logo-1.svg"
import Logo2 from "../../../../svg/assets/logo-2.svg"
import Logo3 from "../../../../svg/assets/logo-3.svg"
import Logo4 from "../../../../svg/assets/logo-4.svg"
import Logo5 from "../../../../svg/assets/logo-5.svg"

export default {
  title: "Grid_2r_3c",
}

export const standard = () => (
  <Grid_2r_3c
    boxContent1={<Logo1 />}
    boxContent2={<Logo2 />}
    boxContent3={<Logo3 />}
    boxContent4={<Logo4 />}
    boxContent5={<Logo5 />}
    boxContent6={<Logo1 />}
  />
)
