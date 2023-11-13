import  React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai'

function Navbar() {
  const   [click, setClick]= useState(false);

     const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (

    <>
    <div className='nav_container'>
     <Link to="/">
        <div className='logo' onClick ={closeMobileMenu}>
          <h1 className='navbar-logo'>Jupiter</h1>
        {/* <img width='100' height='20'  src='/Images/Invest in logo.jpg' alt='invest in logo'></img> */}
      </div>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
      <AiIcons.AiOutlineBars/>
      </div>
      <div className='list_container' >
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to='' className='list_links'><li>Home</li></Link>
          <Link to=''className='list_links' ><li>About</li></Link>
          <Link to=''className='list_links'><li>Contact us</li></Link>
        </ul>
      </div>

    </div>
    </>
  )
}

export default Navbar