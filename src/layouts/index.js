import React from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import "../styles/layout.scss"

const Layout = props => {
  return (
    <>
      <Navbar contactPagePath={props.contactPagePath} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
