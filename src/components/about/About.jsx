import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './About.css';
import { sliderSettings } from '../../util/Common';

import img1 from '/Users/aryanthakur/Documents/els2/src/assets/ab1.JPG';
import img2 from '/Users/aryanthakur/Documents/els2/src/assets/ab2.jpg';
import img3 from '/Users/aryanthakur/Documents/els2/src/assets/ab3.jpg';
import img4 from '/Users/aryanthakur/Documents/els2/src/assets/ab4.jpg';
import img5 from '/Users/aryanthakur/Documents/els2/src/assets/ab5.jpg';
import img6 from '/Users/aryanthakur/Documents/els2/src/assets/ab6.JPG';
import img7 from '/Users/aryanthakur/Documents/els2/src/assets/ab7.JPG';
const images = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7
];

const About = () => {
  return (
    
    
    <section className="a-wrapper">
        <div id ="aid"className="paddings innerWidth a-container">
            <div className="a-head flexColStart">
                <span className='orangeText'>About</span><span className='primaryText'>ELS-SRCC</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart a-card">
                                <img src={image} alt='about' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className=" paddings innerWidth content">
            <p>Established in 1930, the English Literary Society is one of the oldest societies of Shri Ram College of Commerce and has since then carried forward its charisma of promoting individuality, creativity and affection for literature by exploring and diverging into its various forms. The footprints of the past have led to its current formation, and the individuals of today will lead to its future destination</p>

<p>Our society presents a dual platform - one of expressing creativity in its raw form, and one of analysing it and researching on the paradigms of language and literature. We exhibit our passion and talent through numerous events and engagement through social media - from blogs to podcasts - we have it all.
So, as you step into the realm of the English Literary Society, we encourage you to unleash your creativity, explore the wonders of language and embrace the joy of storytelling. 
</p>
        </div>
    </section>
  );
};

export default About;

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter a-button">
            <button onClick={()=>swiper.slidePrev()}>
                &lt;</button><button onClick={()=>swiper.slideNext()}>
                    &gt;
                </button>
        </div>
    )
}
