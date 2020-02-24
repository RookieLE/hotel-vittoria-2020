import React from "react"
import "../styles/spinner.scss"

const Loading = isMobile => (
  <div className={isMobile ? "loader loader-mobile" : "loader"}></div>
)

export default Loading
