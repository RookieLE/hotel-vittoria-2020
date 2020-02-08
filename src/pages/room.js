import React from "react"

import Layout from "../components/layout"

const RoomPage = () => (
  <>
    <Layout>
      <header>
        <h2>An elegant touch</h2>
        <p>Three different types of Rooms with a new minimal style.</p>
        <div className="actions">
          <h3>Lake</h3>
          <h3>Inside</h3>
          <h3>Garden</h3>
        </div>
      </header>
      <section>
        <div className="title">
          <h3>Lake view</h3>
        </div>
        <div className="details-btn">
          <p>See details</p>
        </div>
        <div className="details">
          <p>
            They have a direct access to the shared terrace where you can sit
            and enjoy the view during the day and your meals.
          </p>
          <a href="/booking">Book a room</a>
          <button>close</button>
        </div>
        <div className="image-tv">
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <div className="title">
          <h3>Garden view</h3>
        </div>
        <div className="details-btn">
          <p>See details</p>
        </div>
        <div className="details">
          <p>
            They have a direct access to the garden where you can have lunch or
            dinner while enjoying the peace and quiet of our park.
          </p>
          <a href="/booking">Book a room</a>
          <button>close</button>
        </div>
        <div className="image-tv">
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <div className="title">
          <h3>Inside view</h3>
        </div>
        <div className="details-btn">
          <p>See details</p>
        </div>
        <div className="details">
          <p>
            In a welcoming atmosphere you could enjoy the fresh breeze coming
            from the mountains that every night blows giving a great feeling of
            freshness.
          </p>
          <a href="/booking">Book a room</a>
          <button>close</button>
        </div>
        <div className="image-tv">
          <img src="" alt="" />
        </div>
      </section>
    </Layout>
  </>
)

export default RoomPage
