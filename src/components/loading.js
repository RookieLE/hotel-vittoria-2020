import React from "react"
import "../styles/spinner.scss"

const Loading = ({ isMobile }) => (
  <div className={"loader" + (isMobile ? " loader-mobile" : "")}></div>
)

export default Loading
