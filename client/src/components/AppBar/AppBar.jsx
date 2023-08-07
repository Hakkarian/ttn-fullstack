import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
      <header>
          <Link to="">Home</Link>
          <Link to="/other">Other</Link>
      </header>
  )
}

export default AppBar