import React from "react"
import "../styles/spinner.scss"

const Loading = () => (
  <div className={isMobile ? "loader loader-mobile" : "loader"}></div>
)

export default Loading
