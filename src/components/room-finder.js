import React, { useState } from "react"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

import ArrowIcon from "../images/icons/arrow.png"

const RoomFinder = () => {
  const [toggleRoomFinder, setToggleRoomFinder] = useState(false)
  return (
    <>
      {toggleRoomFinder ? (
        <section className="form-container">
          <div className="col close-form-finder">
            <button onClick={() => setToggleRoomFinder(!toggleRoomFinder)}>
              Close
            </button>
          </div>
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
            <button type="submit">Find Room</button>
          </form>
        </section>
      ) : (
        <section
          className="room-finder-btn"
          onClick={() => setToggleRoomFinder(!toggleRoomFinder)}
        >
          {/*  <img src={ArrowIcon} alt="" /> */}
          <button>Find a Room</button>
        </section>
      )}
      <form className="form-room-finder-desktop" action="">
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
        <button type="submit">Find Room</button>
      </form>
    </>
  )
}

export default RoomFinder
