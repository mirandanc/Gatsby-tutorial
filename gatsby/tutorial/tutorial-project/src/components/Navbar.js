import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Vupty</h1>
      <div className="nav-links"></div>
      <Link to="/">Contato</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Comprar</Link>
    </nav>
  )
}
