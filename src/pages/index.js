import React from "react"
import "../styles/index.scss"

import Layout from "../components/layout"
import RoomFinder from "../components/room-finder"

import BedRoom from "../images/hotel/bed-room-header.png"
import Pool from "../images/hotel/swimming-pool.png"
import Garden from "../images/hotel/garden.png"

const IndexPage = () => (
  <>
    <Layout>
      <header className="header-index">
        <h2>A cozy and welcoming place in the heart of Toscolano Maderno.</h2>
        <div className="img-container-1">
          <img src={BedRoom} alt="cozy bed room with lamp" />
        </div>
        <div className="img-container-2">
          <img src={Pool} alt="hotel swimming pool and garden" />
        </div>
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

      <img
        className="image-section-welcome"
        src={Pool}
        alt="hotel swimming pool and garden"
      />

      <div className="bg-image"></div>
      <div className="bg-image-small"></div>

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
      <img
        className="image-section-garden"
        src={Garden}
        alt="beautiful garden in the hotel"
      />
      <div className="bg-image"></div>
      <div className="bg-image-small"></div>
    </Layout>
  </>
)

export default IndexPage
