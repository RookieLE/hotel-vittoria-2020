import React, { useState } from "react"
import "../styles/room.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../layouts"

import LakeRoomPicture from "../images/hotel/bed-room-lake.jpg"
import GardenRoomPicture from "../images/hotel/garden-room-vertical.jpg"
import InsideRoomPicture from "../images/hotel/intern-room-vertical.jpg"

import scrollTo from "gatsby-plugin-smoothscroll"

const RoomPage = ({data}) => {
  const [toggleDetails, setToggleDetails] = useState(false)
  const [toggleDetails2, setToggleDetails2] = useState(false)
  const [toggleDetails3, setToggleDetails3] = useState(false)

  return (
    <>
      <Layout>
        <section className="room-page-header">
          <Img
            fluid={data.headerImg.childImageSharp.fluid}
             style={{position: "initial", objectFit: "cover", opacity: '0.5'}}
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

        <section className="room-section" id="lake">
          <img src={LakeRoomPicture} alt="hotel bedroom so cool" />
          <div className="title">
            <h3>Lake view</h3>
          </div>
          {toggleDetails ? null : (
            <div className="details-btn">
              <button onClick={() => setToggleDetails(true)}>
                See details
              </button>
            </div>
          )}

          {toggleDetails ? (
            <div className="details">
              <p>
                They have a direct access to the shared terrace where you can
                sit and enjoy the view during the day and your meals.
              </p>
              <div className="book-btn-container">
                <a href="/booking">Book a room</a>
              </div>

              <button onClick={() => setToggleDetails(false)}>close</button>
            </div>
          ) : null}
        </section>
        <section className="room-section" id="garden">
          <img src={GardenRoomPicture} alt="hotel bedroom so cool" />
          <div className="title">
            <h3>Garden view</h3>
          </div>
          {toggleDetails2 ? null : (
            <div className="details-btn">
              <button onClick={() => setToggleDetails2(true)}>
                See details
              </button>
            </div>
          )}

          {toggleDetails2 ? (
            <div className="details">
              <p>
                They have a direct access to the garden where you can have lunch
                or dinner while enjoying the peace and quiet of our park.
              </p>
              <div className="book-btn-container">
                <a href="/booking">Book a room</a>
              </div>

              <button onClick={() => setToggleDetails2(false)}>close</button>
            </div>
          ) : null}
        </section>
        <section className="room-section" id="inside">
          <img src={InsideRoomPicture} alt="hotel bedroom so cool" />
          <div className="title">
            <h3>Inside view</h3>
          </div>
          {toggleDetails3 ? null : (
            <div className="details-btn">
              <button onClick={() => setToggleDetails3(true)}>
                See details
              </button>
            </div>
          )}

          {toggleDetails3 ? (
            <div className="details">
              <p>
                In a welcoming atmosphere you could enjoy the fresh breeze
                coming from the mountains that every night blows giving a great
                feeling of freshness.
              </p>
              <div className="book-btn-container">
                <a href="/booking">Book a room</a>
              </div>

              <button onClick={() => setToggleDetails3(false)}>close</button>
            </div>
          ) : null}
        </section>
      </Layout>
    </>
  )
}

export default RoomPage


export const pageQuery = graphql`
   query {
     headerImg: file(relativePath: {eq: "lake-view-window.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
    lakeView: file(relativePath: {eq: "bed-room-lake.jpg"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
     gardenView: file(relativePath: {eq: "garden.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
     insideView: file(relativePath: {eq: "garden-secondary.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
}`