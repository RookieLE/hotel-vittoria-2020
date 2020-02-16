import React from "react"
import "../styles/contact.scss"
import Layout from "../layouts"

import FbIcon from "../images/icons/facebook.png"
import MapIcon from "../images/icons/google-maps.png"

const ContactPage = props => {
  return (
    <>
      <Layout contactPagePath={props.location.pathname}>
        <form action="" className="contact-form">
          <div className="row">
            <h3>Contact Us</h3>
          </div>
          <div className="row">
            <input type="text" placeholder="Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="row">
            <textarea
              name="request"
              id="request"
              cols="30"
              rows="10"
              placeholder="What can we do for you?"
            ></textarea>
          </div>
          <div className="row">
            <button type="submit">Send</button>
          </div>
        </form>
        <section className="contact-page-header socials">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/LaVittoriadiMaderno/"
          >
            <img src={FbIcon} alt="facebook icon" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Hotel+Vittoria/@45.6382209,10.6006442,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0xdfe1e097a1faebc6!5m1!1s2018-04-16!8m2!3d45.638064!4d10.602875?hl=it"
          >
            <img
              src={MapIcon}
              alt="google maps icon"
              style={{ width: "55px", height: "55px" }}
            />
          </a>
        </section>
      </Layout>
    </>
  )
}

export default ContactPage
