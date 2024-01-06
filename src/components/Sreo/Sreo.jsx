import React from 'react'
import './Sreo.css'

const Sreo = () => {
  return (
    <section className="sero-wrapper">
        <div className="sreo-container paddings innerWidth">
            <div className='paddings innerWidth flexColStart heading'>
                <span id ="sid" className='orangeText'>SREO</span>
                <span className='primaryText'>Shri Ram English Olympiad</span>
            </div>
            <div className="main-image paddings innerwidth flexColStart">
                <img src={require('/Users/aryanthakur/Documents/els2/src/assets/sreopost.png')}/>
            </div>
            <div className="paddings innerWidth flexCenter tagline">
                <span className='orangeText'>Registration Starts in February 2024</span>
            </div>
        </div>
    </section>
  )
}

export default Sreo