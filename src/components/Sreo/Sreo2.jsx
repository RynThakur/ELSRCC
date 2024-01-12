import React from 'react'
import './Sreo.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const SREO2 = () => {
  return (
    <section className="z-wrapper">
        <div id="zid" className="paddings innerWidth z-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>SREO</span>
                <span className='secondaryText'>Shri Ram English Olympiad</span> 
                <button className="button">
                    <HashLink to={"/sreo#sid"}>Register!</HashLink>
                </button>  
            </div>
        </div>
    </section>
  )
}

export default SREO2;