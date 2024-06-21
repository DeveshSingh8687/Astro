import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='main-header'>
            <div className='astro-img'>
                <img src='https://d1hltzobzpmnzr.cloudfront.net/static/img/instaastro-logo.svg' alt='astro-image' height="22px" width="160px" />
            </div>
            <div className='header-buttons'>
                <a>
                    <i class="bi bi-chat"></i>	&nbsp;
                    Chat with Astrologer
                </a>
                <a>
                    <i class="bi bi-telephone"></i> &nbsp;
                    Talk to Astrologer
                </a>
                <span>Sign up</span>
            </div>
        </div>
    )
}

export default Header
{/* <i class="bi bi-chat"></i>
<i class="bi bi-telephone"></i> */}