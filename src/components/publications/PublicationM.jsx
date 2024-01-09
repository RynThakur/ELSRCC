import React from 'react'
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './pm.css'
import{
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import { flattenTokens } from '@chakra-ui/react';
import data from '/Users/aryanthakur/Documents/els2/src/util/Rarck'
//pdfs

import pdf1 from "/Users/aryanthakur/Documents/els2/src/assets/T1.pdf"
import pdf2 from "/Users/aryanthakur/Documents/els2/src/assets/T2.pdf"
import pdf3 from "/Users/aryanthakur/Documents/els2/src/assets/T3.pdf"
import pdf4 from "/Users/aryanthakur/Documents/els2/src/assets/T4.pdf"
import pdf5 from "/Users/aryanthakur/Documents/els2/src/assets/T5.pdf"
import pdf6 from "/Users/aryanthakur/Documents/els2/src/assets/T6.pdf"
import pdf7 from "/Users/aryanthakur/Documents/els2/src/assets/T7.pdf"
import pdf8 from "/Users/aryanthakur/Documents/els2/src/assets/T8.pdf"
import pdf9 from "/Users/aryanthakur/Documents/els2/src/assets/T9.pdf"
import PdfComponent from './Pdfc';

const Postcard = ({ subheading, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className={`postcard ${isDescriptionVisible ? 'open' : ''}`} onClick={toggleDescription}>
      <div className="postcard-heading">
        <div className="subheading">
          {subheading}
        </div>
        <div className="dropdown-icon">
          <FaAngleDown />
        </div>
      </div>
      {isDescriptionVisible && (
        <div className="postcard-description-container">
          <div className="postcard-description">{description}</div>
        </div>
      )}
    </div>
  );
};

const PublicationM = () => {
  return (
    <section className="pm-wrapper">
        <div className="paddings innerWidth flexColStart pmcontainer">
            <div className="paddings innerWidth flexColStart readersArc">
                <div className="paddings innerWidth flexColStart heading">
                    <span id="rid" className='hText'>Reader's Arc</span>
                </div>
                <div className=' innerWidth flexColStart intro'>
                    <p className='secondaryText paddings '>At ELS, we understand that literature transcends conventional boundaries, and our passion for storytelling knows no limits. That is why we present you Reader’s Ark -  a treasure trove of captivating blogs that cover an array of fascinating topics. From exploring the vibrant arrival of spring to delving into a thought-provoking movie review on The Matrix, Reader’s Ark is a delightful haven for those seeking short and exciting reads.
                    </p>
                </div>
                <Accordion
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item, i)=>{
                            return(
                                <AccordionItem className="accordionItem"key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                           
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="hText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div> 
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
            <div className="paddings innerWidth flexColStart trecento">
              <div className="paddings flexColStart heading">
                <span className='hText'>Trecento</span>
              </div>
              <div className=' innerWidth flexColStart intro'>
                    <p className='secondaryText'>Trecento - literally meaning 'Three Hundred' - is a name that reflects our commitment to reaching new heights and embarking on challenging journeys. With over 2000 readers, trecento consists of engaging literary articles, insightful book reviews, author interviews and captivating poetry. It has established itself as a trusted and knowledgeable resource for literary enthusiasts.Our cherished newsletter 'Trecento’ showcases a diverse collection of poems, stories and articles that capture the essence of human emotions and experiences with each edition. It is a platform where budding writers find their voice, sharing their unique perspectives and inspiring narratives, a testament to the beauty of words and the brilliance of our literary community.
                    </p>
                </div>
                <div className="flexColStart pdfs">
            <div className="pdf-list ">
              <PdfComponent pdfTitle="Trecento 16th - Freedom" pdfPath={pdf1} />
              <PdfComponent pdfTitle="Trecento 17th - The Earth & Dreams" pdfPath={pdf2} />
              <PdfComponent pdfTitle="Trecento 19th - The moments and memories of pain and happiness" pdfPath={pdf3} />
              <PdfComponent pdfTitle="Trecento 21st - Journaling
 " pdfPath={pdf4} />
              <PdfComponent pdfTitle="Trecento 22nd - The stories of courage 
 " pdfPath={pdf5} />
              <PdfComponent pdfTitle="Trecento 23rd - Indian Mythology" pdfPath={pdf6} />
              <PdfComponent pdfTitle="Trecento 24th - New Begginings" pdfPath={pdf7} />
              <PdfComponent pdfTitle="Trecento 25th - War & Life " pdfPath={pdf8} />
              <PdfComponent pdfTitle="Trecento 26th - Symphony of minds" pdfPath={pdf9} />
            </div>
                </div>
            </div>
            <div className="paddings innerWidth bubbles">
            <section className="z-wrapper">
        <div id="zid" className="paddings innerWidth z-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>BubbELS</span>
                <span className='secondaryText'>ELS Bubble is a captivating venture by the English Literary Society that takes us on an enchanting voyage through a kaleidoscope of themes and emotions. With boundless creativity and passion for literature, our members curate theme-based posts that delve deep into the heart of various subjects.</span> 
                <button className="button">
                    <a href='https://www.instagram.com/p/Cz3ShAQRZDw/?utm_source=ig_web_copy_link'>BubbELS</a>
                </button>  
            </div>
        </div>
    </section>
              
            </div>
            <div className="paddings innerWidth scribbels">
            <section className="z-wrapper">
        <div id="zid" className="paddings innerWidth z-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>ScribbELS</span>
                <span className='secondaryText'>In the vibrant month of April, the talented members of the English Literary Society took centre stage on our official page, embracing the freedom to exhibit their creativity with no limits. Thus, Scribbles was born, an enchanting platform where our brilliant poets and writers poured their hearts out on topics of self-love and toxic relationships. Each piece eloquently captures the essence of these emotions, leaving readers inspired and moved.</span> 
                <button className="button">
                    <a href='https://www.instagram.com/p/C0wNgGqR29f/?utm_source=ig_web_copy_link'>ScribbELS</a>
                </button>  
            </div>
        </div>
    </section>
              
            </div>
        </div>
        
    </section>
  )
};

export default PublicationM;