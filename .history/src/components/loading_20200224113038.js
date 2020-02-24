import React from "react"

import SpinnerIcon from "../images/icons/spinner.gif"

const Loading = () => {
  return (
    <div className="spinner">
      <img src={SpinnerIcon} alt="loading icon" />
    </div>
  )
}

export default Loading
