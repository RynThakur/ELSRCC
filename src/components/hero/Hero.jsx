import React from 'react'
import "./hero.css"
import { RiMailLine } from 'react-icons/ri';
import CountUp from 'react-countup';
import  {motion} from 'framer-motion'
import MailInput from './Mailinput';
const Hero = () => {
  return (
    <>
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className='flexColStart hero-left'>
              <div className="hero-title">
                <div className="circle"/>
                <motion.h1
                initial={{y: "2rem", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{
                  duration:2,
                  type:"ease-in"
                }}>
                  We live <br></br>literature,<br></br> do you?
                </motion.h1>
              </div>
              <div className="flexColStart hero-des">
                <span className='secondaryText'>
The English Literary Society, SRCC is a warm space for all the literary lovers.
                </span><span className='secondaryText'> We offer an ambience conducive for delving into myriad thoughts in the form of words.</span>
              </div>
              <MailInput/>
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={0} end={100}duration={4}/>
                    <span>+</span>
                    </span>
                  <span className='secondaryText'>MEMBERS</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={0} end={90}duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>YEARS</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={0} end={250}duration={4}/>
                    <span>+</span>
                  </span>
                    <span className='secondaryText'>EVENTS</span>
                </div>
              </div>
            </div>
            <div className=' hero-right'>
                <div className='video-container'>
                    <video 
                    src={require("/Users/aryanthakur/Documents/els2/src/assets/elsorientation-copy.mp4")}
                    autoPlay 
                    loop
                    muted
                    
                    
                    
                     ></video>
                </div>
            </div>
        </div>
    </section>
    <section className="c-wrapper">
    <div className='paddings inner Width flexCenter c-container'>
      <h1>Past sponsors</h1>
        <img src={require('/Users/aryanthakur/Documents/els2/src/assets/RedFM_logo.svg.png')}></img>
        <img src={require('/Users/aryanthakur/Documents/els2/src/assets/cropped-logo-6.png')}></img>
        <img src={require('/Users/aryanthakur/Documents/els2/src/assets/bereallogo-1024x538-removebg-preview.png')}width={200}></img>
        <img src={require('/Users/aryanthakur/Documents/els2/src/assets/cd21575e-49f5-4b14-9688-919f66e1a781_logo_1000x400_trim.png')}></img>

    </div>



</section>
</>
  )
}

export default Hero;