import React from "react"
import "../styles/index.scss"

import Layout from "../components/layout"
import RoomFinder from "../components/room-finder"

import BedRoom from "../images/hotel/bed-room-header.png"
import Pool from "../images/hotel/swimming-pool.png"
import Garden from "../images/hotel/garden.png"
import GardenSecondary from "../images/hotel/garden-secondary.png"
import LakeRoomPicture from "../images/hotel/bed-room-lake.jpg"

const IndexPage = () => (
  <>
    <Layout>
      <header className="header-index">
        <h2>A cozy and welcoming place in the heart of Toscolano Maderno.</h2>
        <img
          src={LakeRoomPicture}
          alt="cozy bed room with lamp"
          className="img-mobile-header"
        />
        <img
          src={BedRoom}
          alt="cozy bed room with lamp"
          className="img-desktop-header"
        />
      </header>
      <RoomFinder />
      <section className="section-index">
        <div className="title">
          <p>Welcome to the</p>
          <h3>Best Hotel in Toscolano Maderno</h3>
          <p>from 1954</p>
        </div>
        <div className="text">
          <p>
            The Hotel Vittoria is located in the heart of Maderno village. Our
            facility is comfortable and quiet: it is situated in a residential
            area surrounded by olive trees, it disposes of large and bright
            spaces in a warm and welcoming atmosphere. Our priority is to meet
            all of your needs with careful attention and a special care for
            details.
          </p>
        </div>
      </section>

      <div className="image-section">
        <img src={Pool} alt="hotel swimming pool and garden" />
      </div>

      <section className="section-index">
        <div className="title">
          <p>Our services</p>
          <h3>Garden, Swimming Pool, Parking</h3>
          <p>and much more</p>
        </div>
        <div className="text">
          <p>
            The hotel disposes of a private swimming pool for our guests, also
            suitable for children. In the garden you can find everything you
            need to enjoy your vacation. Furthermore the parking is inside the
            facility.
          </p>
        </div>
        <div className="book-action">
          <a href="/booking">Book a room</a>
        </div>
      </section>
      <div className="image-section">
        <img src={Garden} alt="beautiful garden in the hotel" />
        <div className="secondary-image-section">
          <img src={GardenSecondary} alt="beautiful garden in the hotel" />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
