import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../layouts"

import BedRoom from "../images/hotel/bed-room-header.png"
import Pool from "../images/hotel/swimming-pool.png"
import Garden from "../images/hotel/garden.png"
import GardenSecondary from "../images/hotel/garden-secondary.png"
import LakeRoomPicture from "../images/hotel/bed-room-lake.jpg"

const IndexPage = ({ data }) => {
  
  console.log(data)

  return (
    <>
      <Layout>
        <header className="header-index">
          <div className="header-text">
            <h1>
              A fantastic stay <br />
              for you
            </h1>
            <h2>
              We are a happy family that has been working here for generations.
            </h2>
            <div className="book-action">
              <Link to="/booking">Book a room</Link>
            </div>
          </div>         
          <Img
            fluid={data.headerImg.childImageSharp.fluid}
            style={{position: "initial", objectFit: "cover", opacity: '0.5'}}
            className="img-mobile-header"
          /> 
        </header>{" "}
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
          <Img fluid={data.hotelPollImg.childImageSharp.fluid} alt="hotel swimming pool and garden" />
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
            <Link to="/booking">Book a room</Link>
          </div>
        </section>
        <div className="image-section">
          <Img fluid={data.gardenImg.childImageSharp.fluid} alt="beautiful garden in the hotel" />
          <div className="secondary-image-section">
            <Img fluid={data.gardenSecondaryImg.childImageSharp.fluid} alt="beautiful garden in the hotel" />
          </div>
        </div>
      </Layout>
    </>
  )
}
export default IndexPage


export const pageQuery = graphql`
   query {
     headerImg: file(relativePath: {eq: "bed-room-header.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
    hotelPollImg: file(relativePath: {eq: "swimming-pool.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
     gardenImg: file(relativePath: {eq: "garden.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
     gardenSecondaryImg: file(relativePath: {eq: "garden-secondary.png"}) {
       id
       childImageSharp {
         fluid(quality: 100) {
           ...GatsbyImageSharpFluid
         }
       }
    }
}`