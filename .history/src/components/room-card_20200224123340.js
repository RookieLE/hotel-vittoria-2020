import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/room-card.scss"

import LakeBedRoom from "../images/hotel/bed-room-lake.png"

import TvIcon from "../images/icons/tv.png"
import FridgeIcon from "../images/icons/fridge.png"
import CoolingIcon from "../images/icons/cooling.png"
import ParkingIcon from "../images/icons/parking.png"
import WifiIcon from "../images/icons/wifi.png"

const RoomCard = ({ price, img, type, breakfast, night }) => {
  const [toggleIncluded, setToggleIncluded] = useState(false)
  const [toggleInfo, setToggleInfo] = useState(false)
  return (
    <section className="room-card-container">
      <div className="title">
        <h3>{type}</h3>
      </div>
      <div className="img-tv">
        <img src={img} alt="hotel room with bed king size" />
      </div>
      <div
        className="what-included-btn"
        onClick={() => setToggleIncluded(!toggleIncluded)}
      >
        <h4>What is included ?</h4>
      </div>
      {toggleIncluded ? (
        <div className="what-include">
          <ul>
            <li>
              <img src={TvIcon} alt="tv icon" /> Smart TV
            </li>
            <li>
              <img src={FridgeIcon} alt="mini fridge icon" /> Mini Fridge
            </li>
            <li>
              <img src={CoolingIcon} alt="cooling icon" /> Cooling
            </li>
            <li>
              <img src={ParkingIcon} alt="parking icon" /> Parking
            </li>
            <li>
              <img src={WifiIcon} alt="wifi icon" /> High Speed Wi-Fi
            </li>
          </ul>
        </div>
      ) : null}
      <div className="what-include big-width">
        <p>The room price also includes: </p>
        <ul>
          <li>
            <img src={TvIcon} alt="tv icon" /> Smart TV
          </li>
          <li>
            <img src={FridgeIcon} alt="mini fridge icon" /> Mini Fridge
          </li>
          <li>
            <img src={CoolingIcon} alt="cooling icon" /> Cooling
          </li>
          <li>
            <img src={ParkingIcon} alt="parking icon" /> Parking
          </li>
          <li>
            <img src={WifiIcon} alt="wifi icon" /> High Speed Wi-Fi
          </li>
        </ul>
      </div>
      <div className="info-btn" onClick={() => setToggleInfo(!toggleInfo)}>
        <h4>Info</h4>
      </div>
      {toggleInfo ? (
        <div className="info">
          <p>
            The <strong>check-in</strong> is is available from 02.00 pm and the
            <strong>check-out</strong> limit is 10.00 am.
          </p>
          <p>
            <strong>Breakfast</strong> is served between 08:00 and 10:00. You
            will find a rich smorgasbord, salty and sweet, whit delicious
            homemade cakes.
          </p>
        </div>
      ) : null}
      <div className="info big-width">
        <p>
          The <strong>check-in</strong> is is available from 02.00 pm and the
          <strong>check-out</strong> limit is 10.00 am.
        </p>
        <p>
          <strong>Breakfast</strong> is served between 08:00 and 10:00. You will
          find a rich smorgasbord, salty and sweet, whit delicious homemade
          cakes.
        </p>
      </div>
      <div className="city-tax">
        <p>At the final price it will added € 1,50 daily of city tax.</p>
        <div className="breakfast">
          {breakfast ? (
            <div className="is-included">
              <p>
                <mark>Breakfast is included.</mark>
              </p>
            </div>
          ) : (
            <div className="is-not-inclueded">
              <p>
                <mark>
                  Breakfast is not included, you can have it for € 10 per day.
                </mark>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="price">
        <p>
          <span className="price-num">€ {price}</span> / night
        </p>
        <p>
          <span className="total">€ {night * price}</span> for{" "}
          <span className="n-night">{night}</span> night
        </p>
      </div>
      <Link to="/contact" className="book-btn">
        Book Room
      </Link>
    </section>
  )
}

export default RoomCard
