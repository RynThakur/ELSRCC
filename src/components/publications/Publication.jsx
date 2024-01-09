import React, { useState } from 'react'
import './publication.css'
import { HashLink } from 'react-router-hash-link';
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
import data from '/Users/aryanthakur/Documents/els2/src/util/accordion.jsx'

const Publication = () => {
  return (
    <section className="p-wrapper">
        <div id ="pid"className="paddings innerWidth flexCenter p-container">
            {/*left side*/}
            <div className="p-left">
                <div className="image-container">
                    <img src={require("/Users/aryanthakur/Documents/els2/src/assets/ptsrcc.jpeg")}></img>
                </div>
            </div>
            {/**right-side */}
            <div className="flexColStart p-right">
                <span className='orangeText'>Publications</span><span className='primaryText'>ELS-SRCC</span><span className='secondaryText'>At ELS, we understand that literature transcends conventional boundaries, <br/>and our passion for storytelling knows no limits</span>
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
                <button className="button">
                <HashLink to='/publicationM#rid'>Read here!</HashLink>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Publication;