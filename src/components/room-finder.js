import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

import { BookingFinderContext } from "../context/BookFinderContext"

const RoomFinder = ({ location }) => {
  const [toggleRoomFinder, setToggleRoomFinder] = useState(true)
  const [booking, setBooking] = useContext(BookingFinderContext)

  const findRoomSubmitted = e => {
    e.preventDefault()
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
              <DateRangeInput />
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
            <button
              className="find-room-btn"
              onClick={findRoomSubmitted}
              type="submit"
            >
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
          <DateRangeInput />
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
        <button
          className="find-room-btn"
          onClick={findRoomSubmitted}
          type="submit"
        >
          Find Room
        </button>
      </form>
    </>
  )
}

export default RoomFinder
