import React from 'react';
import "./hero.css";
import { RiMailLine } from 'react-icons/ri';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import MailInput from './Mailinput';

const Hero = () => {
  return (
    <>
      <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
          <div className='flexColStart hero-left'>
            <div className="hero-title">
              <div className="circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in"
                }}>
                We live <br />literature,<br /> do you?
              </motion.h1>
            </div>
            <div className="flexColStart hero-des">
              <span className='secondaryText'>
                The English Literary Society, SRCC is a warm space for all the literary lovers.
              </span><span className='secondaryText'> We offer an ambiance conducive for delving into myriad thoughts in the form of words.</span>
            </div>
            <MailInput />
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={100} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>MEMBERS</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={90} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>YEARS</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={250} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>EVENTS</span>
              </div>
            </div>
          </div>
          <div className='hero-right'>
            <div className='video-container'>
              <video
                src={require("/Users/aryanthakur/Documents/els2/src/assets/orientation.mp4")}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
