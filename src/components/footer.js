import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="stars">&#8902;&#8902;&#8902;</div>
      <div className="slogan">
        <h4>For single For family. For couple. Pets welcome.</h4>
        <h4>
          <span>In two words,</span> for everyone
        </h4>
      </div>
      <div className="border"></div>
      <div className="address">
        <h4>Italia</h4>
        <h4>Toscolano Maderno</h4>
        <h4>(BS) 25088</h4>
        <h4>Via Benamati 114</h4>
        <h4>TEL. 0365 641320</h4>
        <h4>info@vittoriahotel.eu</h4>
        <h4>P.iva 01558810980</h4>
      </div>
      <div className="links">
        <a href="#">Cookies</a>
        <a href="#">Legal</a>
        <a href="#">Privacy and Policy</a>
      </div>
      <div className="copyright">
        <h5>© COPYRIGHT HOTEL VITTORIA {currentYear} - ALL RIGHTS RESERVED.</h5>
        <p>
          Made and design by{" "}
          <a target="_BLANK" href="https://leonardotononi.com">
            Leonardo Tononi
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
