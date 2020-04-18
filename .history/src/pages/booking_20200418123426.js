import React, { useState, useEffect } from "react"

import "../styles/booking.scss"

import scrollTo from "gatsby-plugin-smoothscroll"

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
  const [onSubmitFind, setOnSubmitFind] = useState("DEFAULT")
  const [filteredRooms, setFilteredRooms] = useState([])
  const [season, setSeason] = useState("LOW")
  const [totalNight, setTotalNight] = useState(0)

  useEffect(() => {
    /* if (onSubmitFind === true && filteredRooms !== false) {
      setBooking({ startDate: "", endDate: "", adults: 0, children: 0 })
    } */
    if (onSubmitFind === "FINDING") {
      findRoom()
    } else if (onSubmitFind === "COMPLETED") {
      setBooking({ startDate: "", endDate: "", adults: 0, children: 0 })
      setSeason("LOW")
    }
  }, [onSubmitFind])

  const handleScrollEffect = () => {
    scrollTo("#scrollTo")
  }

  const findRoom = () => {
    const startHighSeason = 1593554400000
    const endHighSeason = 1600120800000
    const startBookDate = Date.parse(booking.startDate)
    const endBookDate = Date.parse(booking.endDate)
    setTotalNight((endBookDate - startBookDate) / 86400000)
    const totalPerson = booking.adults + booking.children
    const roomFilteredForTotal = ROOMS.filter(room => room.for === totalPerson)
    if (startBookDate >= startHighSeason && endBookDate <= endHighSeason) {
      setSeason("HIGH")
    } else {
      setSeason("LOW")
    }
    if (roomFilteredForTotal.length === 0) {
      return setOnSubmitFind("NOT_FINDED")
    }
    setFilteredRooms(roomFilteredForTotal)
    setOnSubmitFind("COMPLETED")
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

  const filteredRoomsUI = filteredRooms.map(room => {
    return (
      <RoomCard
        price={season === "HIGH" ? room.priceHighSeason : room.priceLowSeason}
        img={room.imageUrl}
        type={room.type}
        breakfast={room.breakfast}
        night={totalNight}
        key={room.id}
      />
    )
  })

  const logic = () => {
    if (onSubmitFind === "COMPLETED") {
      return filteredRoomsUI
    }
    if (onSubmitFind === "DEFAULT") {
      return (
        <section className="room-card-placeholder" id="scrollTo">
          <h1>You need to find a room before.</h1>
        </section>
      )
    }
    if (onSubmitFind === "FINDING") {
      return (
        <section className="room-card-placeholder" id="scrollTo">
          <h1>Wait...I'm finding a room for you</h1>
        </section>
      )
    }
    if (onSubmitFind === "NOT_FINDED") {
      return (
        <section className="room-card-placeholder warning" id="scrollTo">
          <h1>
            Sorry, <br /> the room selected is not available.
          </h1>
        </section>
      )
    }
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
         {/*  <img
            display={{ objectFit: "cover" }}
            src={LakeRoomPicture}
            alt="cozy bed room with lamp"
            className="img-mobile-header"
          />
          <img
            src={LakeRoomPicture2}
            alt="cozy bed room with lamp"
            className="img-desktop-header"
          /> */}
        </header>
        <RoomFinder
          booking={booking}
          setBooking={setBooking}
          onSubmitFind={onSubmitFind}
          setOnSubmitFind={setOnSubmitFind}
          setFilteredRooms={setFilteredRooms}
          handleScrollEffect={handleScrollEffect}
        />
        <div id="scrollTo"></div>
        {logic()}
      </Layout>
    </>
  )
}

export default BookingPage
