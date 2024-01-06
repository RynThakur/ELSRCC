import React from 'react'
import './Zephyr.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Zephyr = () => {
  return (
    <section className="z-wrapper">
        <div id="zid" className="paddings innerWidth z-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>ZEPHYR</span>
                <span className='secondaryText'>have a glimpse of Zephyr</span> 
                <button className="button">
                    <HashLink to='/zephyrM#zid'>ZEPHYR 2023</HashLink>
                </button>  
            </div>
        </div>
    </section>
  )
}

export default Zephyr