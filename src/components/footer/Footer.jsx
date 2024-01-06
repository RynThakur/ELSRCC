import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src={require("/Users/aryanthakur/Documents/els2/src/assets/finalLogo.jpg")} alt="logo" width={200} />
                <span className="secondaryText">
                    English Literary Society <br></br>
                    Shri Ram College Of Commerce
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>ELS</span>
                <span className='secondaryText'>SRCC</span>
                <div className="flexCenter f-menu">
                <Link to="/home">Home</Link>
              <HashLink to="/about#aid">About</HashLink>
              <HashLink to="/publications#pid">Publication</HashLink>
              <HashLink to="/zephyr#zid">Zephyr</HashLink>
              <Link to={"/sreo"}>SREO</Link>
              <button className='button'>
              <HashLink to='/contact#cid'>Contact</HashLink>
              </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer