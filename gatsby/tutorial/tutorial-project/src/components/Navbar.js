import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Vupty</h1>
      <div className="nav-links"></div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  )
}
