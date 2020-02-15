import React, { useState } from "react"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

const RoomFinder = ({
  booking,
  setBooking,
  toggleFind,
  setToggleFind,
  setFilteredRooms,
}) => {
  const [toggleRoomFinder, setToggleRoomFinder] = useState(true)

  const onSubmit = e => {
    e.preventDefault()

    if (toggleFind === "finding") {
      setToggleFind(" ", () =>
        setFilteredRooms([], () => setToggleFind("finding"))
      )
    } else {
      setToggleFind("finding")
    }
  }

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
              <DateRangeInput booking={booking} setBooking={setBooking} />
            </div>
            <div className="col adults">
              <h5>Adults</h5>
              <div className="inc-dec-container">
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, adults: booking.adults - 1 })
                  }}
                >
                  -
                </button>
                <p>{booking.adults}</p>
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, adults: booking.adults + 1 })
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col children">
              <h5>Children</h5>
              <div className="inc-dec-container">
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, children: booking.children - 1 })
                  }}
                >
                  -
                </button>
                <p>{booking.children}</p>
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, children: booking.children + 1 })
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button className="find-room-btn" onClick={onSubmit} type="submit">
              Find Room
            </button>
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
          <DateRangeInput booking={booking} setBooking={setBooking} />
        </div>
        <div className="col adults">
          <h5>Adults</h5>
          <div className="inc-dec-container">
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, adults: booking.adults - 1 })
              }}
            >
              -
            </button>
            <p>{booking.adults}</p>
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, adults: booking.adults + 1 })
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col children">
          <h5>Children</h5>
          <div className="inc-dec-container">
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, children: booking.children - 1 })
              }}
            >
              -
            </button>
            <p>{booking.children}</p>
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, children: booking.children + 1 })
              }}
            >
              +
            </button>
          </div>
        </div>
        <button className="find-room-btn" onClick={onSubmit} type="submit">
          Find Room
        </button>
      </form>
    </>
  )
}

export default RoomFinder
