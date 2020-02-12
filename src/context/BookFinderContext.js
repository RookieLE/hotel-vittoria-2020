import React from "react"

const defaultState = {
  startDate: "",
  endDate: "",
  adults: 0,
  children: 0,
}

const BookFinderContext = React.createContext(defaultState)

class BookFinderProvider extends React.Component {
  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
