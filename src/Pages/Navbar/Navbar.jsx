import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div id='home'>
      <nav className="navbar bg-body-tertiary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-dark heading" href="/">Weathify</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar