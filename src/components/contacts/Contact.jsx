import React from 'react';
import './contact.css';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div id="cid" className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Get in Touch</span><span className='primaryText'>Contact ELS</span>
          <div className="flexColStart ContactModes">
            {/* first-row */}
            <div className="fleColStart row">
              <div className="flexColCenter mode">
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <FaEnvelope size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Mail ELS!</span>
                    <span className='secondaryText'> Contact@elssrcc.in</span>
                  </div>
                </div>
                <a href="mailto:Contact@elssrcc.in" className=' flexCenter button'>
                  Write a mail
                </a>
              </div>

              {/* Second-row */}
              <div className="flexColCenter mode">
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <FaEnvelope size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Trecento</span>
                    <span className='secondaryText'> trecento@elssrcc.in</span>
                  </div>
                </div>
                <a href="mailto:trecento@elssrcc.in" className=' flexCenter button'>
                  Write a mail
                </a>
              </div>
            </div>

            <div className="fleColStart row">
              <div className="flexColCenter mode">
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>LinkedIn</span>
                    <span className='secondaryText'>ELS-SRCC</span>
                  </div>
                </div>
                <a href="https://www.linkedin.com/company/the-english-literary-society/mycompany/" target="_blank" rel="noopener noreferrer" className='flexCenter button'>
                  Let's connect!
                </a>
              </div>

              {/* Second-row */}
              <div className="flexColCenter mode">
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <FaInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Instagram</span>
                    <span className='secondaryText'> trecento@elssrcc.in</span>
                  </div>
                </div>
                <a href="https://www.instagram.com/els.srcc?igsh=MWd1enhxbzkzODRuMA==" target="_blank" rel="noopener noreferrer" className='flexCenter button'>
                  Add us!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-wrapper">
            <img src={require('/Users/aryanthakur/Documents/els2/src/assets/ab1.JPG')} alt="Contact ELS" className="contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

