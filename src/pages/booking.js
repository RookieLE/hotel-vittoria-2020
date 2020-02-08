import React from "react"

import Layout from "../components/layout"
import RoomFinder from "../components/room-finder"
import RoomCard from "../components/room-card"

const BookingPage = () => (
  <>
    <Layout>
      <RoomFinder />
      <RoomCard />
    </Layout>
  </>
)

export default BookingPage
