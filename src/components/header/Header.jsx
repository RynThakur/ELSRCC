import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <>
      {/*HEADER STARTS HERE-> */}
      <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
        <div className="logo-container">
          <img src={require("/Users/aryanthakur/Documents/els2/src/assets/logof.png")} width={300} alt="ELS Logo" />
          </div>
          <OutsideClickHandler onOutsideClick={() => onClose()}>
            <div className='flexCenter h-menu'>
              <Link to="/home">Home</Link>
              <HashLink to="/about#aid">About</HashLink>
              <HashLink to="/zephyr#zid">Zephyr</HashLink>
              <HashLink to="/publications#pid">Publication</HashLink>
              <HashLink to={"/sreo#sid"}>SREO</HashLink>
              <button className='button'>
                <HashLink to='/contact#cid'>Contact</HashLink>
              </button>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={onOpen}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <VStack spacing="2rem">
                <Link to="/home" onClick={onClose}>
                  Home
                </Link>
                <HashLink to="/about#aid" onClick={onClose}>
                  About
                </HashLink>
                <HashLink to="/publications#pid" onClick={onClose}>
                  Publication
                </HashLink>
                <HashLink to="/zephyr#zid" onClick={onClose}>
                  Zephyr
                </HashLink>
                <HashLink to={"/sreo#sid"} onClick={onClose}>
                  SREO
                </HashLink>
                <HashLink to='/contact#cid' onClick={onClose}>
                  Contact
                </HashLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
