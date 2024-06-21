import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-main'>
        <div className='navbar-list'>
            <ul>
                <li>Home</li>
                <li>Kundli</li>
                <li>Matchmaking</li>
                <li>Horoscope</li>
                <li>Live</li>
                <li>Panchang</li>
                <li>Calendar</li>
                <li>Resource <i class="bi bi-caret-down-fill"></i></li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar