import React, { useState } from "react"
import { Link } from "gatsby"

import HambIconWhite from "../images/icons/hamb.svg"
import CloseIcon from "../images/icons/close-btn.png"
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
      <nav>
        <Link className="logo" to="/">
          <h1>Hotel Vittoria</h1>
        </Link>
        <div className="hamb" onClick={() => setToggleNav(!toggleNav)}>
          <img src={HambIconWhite} alt="menu icon" />
        </div>
      </nav>
      {toggleNav ? (
        <ul className="nav-links">
          <li className="close-btn" onClick={() => setToggleNav(!toggleNav)}>
            <img src={CloseIcon} alt="close icon" />
          </li>
          <li className="stars">&#8902;&#8902;&#8902;</li>
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
    </>
  )
}

export default Navbar
