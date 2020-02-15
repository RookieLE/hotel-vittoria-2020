import React, { useState, useEffect } from "react"

import { ROOMS } from "../database/rooms"

import Layout from "../layouts"
import RoomFinder from "../components/room-finder"
import RoomCard from "../components/room-card"

import BedRoom from "../images/hotel/bed-room-header.png"
import Pool from "../images/hotel/swimming-pool.png"
import Garden from "../images/hotel/garden.png"
import GardenSecondary from "../images/hotel/garden-secondary.png"
import LakeRoomPicture from "../images/hotel/bed-room-lake.jpg"
import LakeRoomPicture2 from "../images/hotel/bed-room-lake.png"

const BookingPage = () => {
  const [booking, setBooking] = useState({
    startDate: "",
    endDate: "",
    adults: 0,
    children: 0,
  })
  const [toggleFind, setToggleFind] = useState(" ")
  const [filteredRooms, setFilteredRooms] = useState([])

  useEffect(() => {
    /*  console.log("START: ", Date.parse(booking.startDate))
    console.log("END: ", Date.parse(booking.endDate)) */
  }, [booking])

  useEffect(() => {
    findRoom()
  }, [toggleFind])

  const findRoom = () => {
    const startHighSeason = 1593554400000
    const endHighSeason = 1600120800000
    const totalPerson = booking.adults + booking.children

    const roomFilteredForTotal = ROOMS.filter(room => room.for === totalPerson)
    setFilteredRooms(roomFilteredForTotal)
  }

  const checkIfInputAreFilled = callback => {
    const { startDate, endDate, adults, children } = booking
    if (startDate && endDate === "" && adults <= 0) return
    else {
      callback()
    }
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
      <Layout>
        <header className="header-index">
          <div className="header-text">
            <h1>
              Keep an eye on our last minute <mark>discounts.</mark>
            </h1>
          </div>
          <img
            display={{ objectFit: "cover" }}
            src={LakeRoomPicture}
            alt="cozy bed room with lamp"
            className="img-mobile-header"
          />
          <img
            src={LakeRoomPicture2}
            alt="cozy bed room with lamp"
            className="img-desktop-header"
          />
        </header>
        <RoomFinder
          booking={booking}
          setBooking={setBooking}
          toggleFind={toggleFind}
          setToggleFind={setToggleFind}
          setFilteredRooms={setFilteredRooms}
        />
        {filteredRooms !== [] ? (
          filteredRooms.map(room => (
            <RoomCard
              price={room.priceHighSeason}
              img={room.imageUrl}
              type={room.type}
              key={room.id}
            />
          ))
        ) : (
          <div>Insert data inside the finder</div>
        )}
      </Layout>
    </>
  )
}

export default BookingPage
