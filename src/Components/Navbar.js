import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='nav_container'>
      <div className='logo'></div>
      <div className='list_container'>
        <ul className='list_style'>
          <li><a href=''>Sign in</a></li>
          <li><a href=''>Services</a></li>
          <li><a href=''>API</a></li>
          <li><a href=''>Sign up</a></li>
          <li><a href=''>Get US Number</a></li>
        </ul>
      </div>

    </div>
    </>
  )
}

export default Navbar