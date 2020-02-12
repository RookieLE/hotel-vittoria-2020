import React from "react"

import Layout from "../components/layout"
import RoomFinder from "../components/room-finder"
import RoomCard from "../components/room-card"

import BedRoom from "../images/hotel/bed-room-header.png"
import Pool from "../images/hotel/swimming-pool.png"
import Garden from "../images/hotel/garden.png"
import GardenSecondary from "../images/hotel/garden-secondary.png"
import LakeRoomPicture from "../images/hotel/bed-room-lake.jpg"
import LakeRoomPicture2 from "../images/hotel/bed-room-lake.png"

const BookingPage = () => (
  <>
    <Layout>
      <header className="header-index">
        <h2>Find a room and keep an eye on our last minute discounts.</h2>
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
      <RoomFinder />
      <RoomCard />
    </Layout>
  </>
)

export default BookingPage
