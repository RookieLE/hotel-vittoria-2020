import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

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
