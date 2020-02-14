import React, { useState, createContext } from "react"

export const BookingFinderContext = createContext()

const BookingFinderProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    startDate: "",
    endDate: "",
    adults: 0,
    children: 0,
  })
  return (
    <BookingFinderContext.Provider value={[booking, setBooking]}>
      {children}
    </BookingFinderContext.Provider>
  )
}

export default BookingFinderProvider
