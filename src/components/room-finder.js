import React, { useState, useContext } from "react"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

import { BookingFinderContext } from "../context/BookFinderContext"

const RoomFinder = ({ location }) => {
  const [toggleRoomFinder, setToggleRoomFinder] = useState(true)
  const [toggleModal, setToggleModal] = useState(false)
  const [booking, setBooking] = useContext(BookingFinderContext)

  const findRoomSubmitted = e => {
    e.preventDefault()
    setToggleModal(!toggleModal)
  }

  const transformDate = input => {
    let date = new Date(input)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dt = date.getDate()

    if (dt < 10) {
      dt = "0" + dt
    }
    if (month < 10) {
      month = "0" + month
    }

    return `${dt}/${month}/${year}`
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

      {toggleModal ? (
        <div className="modal">
          <h1>I'm working on with the booking.com api...</h1>
          <p>Meanwhile this is the data form:</p>
          <p>Check in: {transformDate(booking.startDate)}</p>
          <p>Check out: {transformDate(booking.endDate)}</p>
          <p>Adults: {booking.adults}</p>
          <p>Children: {booking.children}</p>
          <button onClick={() => setToggleModal(!toggleModal)}>Close</button>
        </div>
      ) : null}
    </>
  )
}

export default RoomFinder
