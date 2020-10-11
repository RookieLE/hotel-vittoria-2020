import React, { useState } from "react"
import { Link } from "gatsby"

import HambIconWhite from "../images/icons/hamb.svg"
import CloseIcon from "../images/icons/close-btn.png"
import CallIcon from "../images/icons/call.png"

const Navbar = contactPagePath => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
      <div
        className={
          contactPagePath.contactPagePath === "/contact"
            ? "nav-mobile-contact"
            : "nav-mobile"
        }
      >
        <nav>
          <Link className="logo" to="/">
            <h1>Hotel Vittoria</h1>
          </Link>
          <a href="tel:0365641320" className="call-action">
            <img src={CallIcon} alt="phone icon" />
          </a>
          <div className="hamb" onClick={() => setToggleNav(!toggleNav)}>
            <img src={HambIconWhite} alt="menu icon" />
          </div>
        </nav>
        {toggleNav ? (
          <ul className="nav-links">
            <li className="close-btn" onClick={() => setToggleNav(!toggleNav)}>
              {/* <img src={CloseIcon} alt="close icon" /> */}X
            </li>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/room">
              <li>Rooms</li>
            </Link>
            <Link to="/contact">
              {" "}
              <li>Contact</li>
            </Link>
            <Link className="booking-btn" to="/booking">
              {" "}
              <li>Book a room</li>
            </Link>
          </ul>
        ) : null}
      </div>

      <nav
        className={
          contactPagePath.contactPagePath === "/contact"
            ? "nav-desktop-contact"
            : "nav-desktop"
        }
      >
        <ul className="nav-links">
          <Link className="logo" to="/">
            <h1>Hotel Vittoria</h1>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/room">
            <li>Rooms</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
          <Link className="booking-btn" to="/booking">
            {" "}
            <li>Book a room</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
