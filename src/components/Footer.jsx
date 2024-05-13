import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import '../css/style.css'
import logo from '../images/logo.svg'


function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-left'>
            <Link to='/' className='logo'>
                <img src={logo} alt='logo' />
            </Link>

            <ul className='footer-links'>
                <li className='footer-item'>
                    <Link to='/'>About</Link>
                </li>

                <li className='footer-item'>
                    <Link to='/'>Careers</Link>
                </li>

                <li className='footer-item'>
                    <Link to='/'>Events</Link>
                </li>


                <li className='footer-item'>
                    <Link to='/'>Products</Link>
                </li>

                <li className='footer-item'>
                    <Link to='/'>Support</Link>
                </li>
            </ul>
        </div>

        <div className='footer-right'>
            <div className='footer-socials'>
                <Link to=''>
                    <FaFacebookSquare className='social-icon' />
                </Link>

                <Link to=''>
                    <FaTwitter className='social-icon' />
                </Link>

                <Link to=''>
                    <FaPinterest className='social-icon' />
                </Link>

                <Link to=''>
                    <FaInstagram className='social-icon' />
                </Link>
            </div>

            <p className='copyright'>
                &copy; 2021 Loopstudios. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer