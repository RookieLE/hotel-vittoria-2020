import React, { useState } from "react"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

const RoomFinder = () => {
  return (
    <>
      <form className="form-room-finder" action="">
        <div className="col date">
          <h5>Date</h5>
          <DateRangeInput />
        </div>
        <div className="col adults">
          <h5>Adults</h5>
          <p>0</p>
        </div>
        <div className="col children">
          <h5>Children</h5>
          <p>0</p>
        </div>
        <button type="submit">Check Availability</button>
      </form>
      <div className="bg-form"></div>
    </>
  )
}

export default RoomFinder
