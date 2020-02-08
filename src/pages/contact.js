import React from "react"

import Layout from "../components/layout"

const ContactPage = () => (
  <>
    <Layout>
      <div className="socials">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <form action="">
        <div className="row">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <input type="text" placeHolder="Name" />
        </div>
        <div className="row">
          <input type="email" placeHolder="E-mail" />
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
    </Layout>
  </>
)

export default ContactPage
