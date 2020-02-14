import React from "react"

import BookingFinderProvider from "../context/BookFinderContext"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import "../styles/layout.scss"

const Layout = props => {
  return (
    <BookingFinderProvider>
      <Navbar contactPagePath={props.contactPagePath} />
      {props.children}
      <Footer />
    </BookingFinderProvider>
  )
}

export default Layout
