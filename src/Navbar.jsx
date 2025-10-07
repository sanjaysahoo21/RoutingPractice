import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='contact'>
            <Link to='/Contact'>Contact</Link>
        </div>
        <div className='about'>
            <Link to='/About'>About</Link>
        </div>
        <div className='shop'>
            <Link to='/Shop'>Shop</Link>
        </div>
    </div>
  )
}

export default Navbar;
