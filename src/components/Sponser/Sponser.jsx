import React from 'react'
import './Sponser.css'

const Sponser = () => {
  return (
    <section className="c-wrapper">
        <div className='paddings innerWidth flexCenter c-container'>
          <h1>Past sponsors</h1>
          <div className="sponsor-logos">
            <img src={require('/Users/aryanthakur/Documents/els2/src/assets/RedFM_logo.svg.png')} alt="RedFM Logo" />
            <img src={require('/Users/aryanthakur/Documents/els2/src/assets/cropped-logo-6.png')} alt="Logo 6" />
            <img src={require('/Users/aryanthakur/Documents/els2/src/assets/bereallogo-1024x538-removebg-preview.png')} width={200} alt="Bereal Logo" />
            <img src={require('/Users/aryanthakur/Documents/els2/src/assets/cd21575e-49f5-4b14-9688-919f66e1a781_logo_1000x400_trim.png')} alt="Logo 1000x400" />
          </div>
        </div>
      </section>
  )
}

export default Sponser