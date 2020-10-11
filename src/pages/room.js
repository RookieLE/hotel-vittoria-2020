import React, { useState } from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Img from "gatsby-image"

import Layout from "../layouts"
import { ROOMS_TYPE } from "../data/rooms-type"
import "../styles/room.scss"

const RoomPage = ({ data }) => {
  const [toggleDetails, setToggleDetails] = useState(null)

  return (
    <Layout>
      <section className="room-page-header">
        <Img
          fluid={data.headerImg.childImageSharp.fluid}
          style={{ position: "initial", objectFit: "cover", opacity: "0.5" }}
          alt="beautiful lake view from hotel bedroom"
        />
        <div className="header-text">
          <h2>An elegant touch</h2>
          <p>Three different types of Rooms with a new minimal style.</p>
        </div>
        <div className="actions">
          <button onClick={() => scrollTo("#lake")}>
            <h3>Lake</h3>
          </button>
          <button onClick={() => scrollTo("#inside")}>
            <h3>Inside</h3>
          </button>
          <button onClick={() => scrollTo("#garden")}>
            <h3>Garden</h3>
          </button>
        </div>
      </section>

      {ROOMS_TYPE.map(room => {
        const roomName = room.name

        return (
          <section className="room-section" id={`${room.id}`}>
            <Img
              fluid={data[roomName].childImageSharp.fluid}
              style={{
                position: "initial",
                objectFit: "cover",
                opacity: "0.5",
              }}
              alt="hotel bedroom so cool"
            />
            <div
              className={`room-content ${
                toggleDetails === roomName ? `room-content-details` : null
              }`}
            >
              <div className="title">
                <h3>{room.title}</h3>
              </div>

              {toggleDetails === roomName ? (
                <div className="details">
                  <p>{room.text}</p>
                  <div className="book-btn-container">
                    <a href="/booking">Book a room</a>
                  </div>

                  <button onClick={() => setToggleDetails(null)}>close</button>
                </div>
              ) : null}

              {toggleDetails === roomName ? null : (
                <div className="details-btn">
                  <button onClick={() => setToggleDetails(roomName)}>
                    See details
                  </button>
                </div>
              )}
            </div>
          </section>
        )
      })}
    </Layout>
  )
}

export default RoomPage

export const pageQuery = graphql`
  query {
    headerImg: file(relativePath: { eq: "lake-view-window.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lakeView: file(relativePath: { eq: "bed-room-lake.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gardenView: file(relativePath: { eq: "garden-room-vertical.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    insideView: file(relativePath: { eq: "intern-room-vertical.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
