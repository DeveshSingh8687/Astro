import React from 'react'
import './Home.css'
import Mobile from '../Asset/Mobile.png'

function Home() {
  return (
    <div className='home-main'>
      <div className='home-content'>
        <img src={Mobile} width="400px" />
        <div>
          <span>Talk to India's </span> <br />
          <h1>Best Astrologer at &#8377; 1 </h1> <br />
          <span>And get &#8377; 100 talk time </span>
        </div>
      </div>
      <div className='bottom-button'>
        <a>
          <i class="bi bi-chat-fill"></i>	&nbsp;
          Chat with Astrologer
        </a>
        <a>
          <i class="bi bi-telephone-fill"></i> &nbsp;
          Talk to Astrologer
        </a>
      </div>
    </div>
  )
}

export default Home