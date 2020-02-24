import React from "react"
import "../styles/spinner.scss"

const Loading = isMobile => {
  return <div className={isMobile ? "loader isMobile" : "loader"}></div>
}

export default Loading
