import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

//navbar is common between all the pages
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
      {/* in navbar if we click on the logo we want to go back on the homepage that's why we use the Link tag */}
      {/* The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href. */}
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className='logo'></img>
        </Link>
        {/* we are not seperating ul and li as components since there are just two li's */}
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
