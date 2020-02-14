import React, { useState, useContext, useEffect } from "react"
import { enGB } from "date-fns/locale"
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates"
import "react-nice-dates/build/style.css"

import { BookingFinderContext } from "../context/BookFinderContext"

const DateRangeInput = () => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [booking, setBooking] = useContext(BookingFinderContext)

  useEffect(() => {
    if (startDate && endDate !== undefined) {
      setBooking({ ...booking, startDate, endDate })
    } else return
  }, [startDate, endDate])
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
          <input
            className={"input" + (focus === START_DATE ? " -focused" : "")}
            {...startDateInputProps}
            placeholder="Check-in"
          />
          <span className="date-range_arrow" />
          <input
            className={"input" + (focus === END_DATE ? " -focused" : "")}
            {...endDateInputProps}
            placeholder="Check-out"
          />
        </div>
      )}
    </DateRangePicker>
  )
}

export default DateRangeInput
