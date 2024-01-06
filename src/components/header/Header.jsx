import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Theme } from 'pretty-format';
import "./header.css"
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler"

import{Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack} from'@chakra-ui/react';
  import{BiMenu, BiMenuAltLeft} from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened]  = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <=800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <>
    
    {/*HEADER STARTS HERE-> */}
    <section className='h-wrapper'>
          <div className="flexCenter paddings innerWidth h-container">
            
            <img src={require("/Users/aryanthakur/Documents/els2/src/assets/ENGLISH LITERARY SOCIETY.png")}width={300}></img>
            <OutsideClickHandler
            onOutsideClick={()=> {
              setMenuOpened(false)
            }}
            >
            <div className='flexCenter h-menu'>
             <Link to="/home">Home</Link>
              <HashLink to="/about#aid">About</HashLink>
              <HashLink to="/publications#pid">Publication</HashLink>
              <HashLink to="/zephyr#zid">Zephyr</HashLink>
              <HashLink to={"/sreo#sid"}>SREO</HashLink>
              <button className='button'>
              <HashLink to='/contact#cid'>Contact</HashLink>
              </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
          </div>

        </section>
        
  
    </>
  );
}; 

export default Header;