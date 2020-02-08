import React from "react"

const RoomCard = () => {
  return (
    <section>
      <div className="title">
        <h3>Lake</h3>
      </div>
      <div className="img-tv">
        <img src="" alt="" />
      </div>
      <div className="what-included-btn">
        <h4>What is included ?</h4>
      </div>
      <div className="what-include">
        <ul>
          <li>ICON</li>
          <li>ICON</li>
          <li>ICON</li>
          <li>ICON</li>
          <li>ICON</li>
        </ul>
      </div>
      <div className="info-btn">
        <h4>Info</h4>
      </div>
      <div className="info">
        <p>
          The check-in is is available from 02.00 pm and the check-out limit is
          10.00 am.
        </p>
        <p>
          Breakfast is served between 08:00 and 10:00. You will find a rich
          smorgasbord, salty and sweet, whit delicious homemade cakes.
        </p>
      </div>
      <div className="city-tax">
        <p>At the final price it will added € 1,50 daily of city tax</p>
      </div>
      <div className="breakfast">
        <div className="is-included">
          <p>Breakfast is included.</p>
        </div>
        <div className="is-not-inclueded">
          <p>Breakfast is not included, you can have it for € 10 per day.</p>
        </div>
      </div>
      <div className="price">
        <p>
          <span>€ 90</span> /night
        </p>
        <p>
          <span class="total">€ 450,00</span> for <span class="n-night">5</span>{" "}
          night
        </p>
      </div>
      <a href="/contact" className="book-btn">
        Book Room
      </a>
    </section>
  )
}

export default RoomCard
