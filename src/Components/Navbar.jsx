import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  HStack,
  useBreakpointValue,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import style from '../Styles/Global.css'
import { RefContext } from "../Context/RefContext";
import { NavDrawer } from "./NavDrawer";
import { colors } from "../constants/styling";
export const Navbar = () => {
  const {cur, SetCur,aboutRef,introRef,projectRef,githubRef,skillRef,contactRef} = useContext(RefContext)


  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    // console.log(scrollPos)
    if (scrollPos < 604) {
      SetCur("home")
    }
    if (scrollPos > 605 && scrollPos < 1293) {
      SetCur("about")
    }
    if (scrollPos >= 1293 && scrollPos < 1968) {
      SetCur("skill")
    }
    if (scrollPos >= 1968 && scrollPos < 3943) {
      SetCur("project")
    }
    if (scrollPos >= 3943 && scrollPos < 4800) {
      SetCur("github")
    }
    if (lastKnownScrollPosition > 4800) {
      SetCur("contact")
    }
  }
  
  document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
    

  });
 
 
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const handleRef = (e) => {
    introRef.current.scrollIntoView() 
    SetCur("home")
  };
  const handleRef2 = (e) => {
    aboutRef.current.scrollIntoView() 
    SetCur("about");
  

  };
  const handleRef3 = (e) => {
    skillRef.current.scrollIntoView() 
    SetCur("skill")
  };
  const handleRef4 = (e) => { 
    projectRef.current.scrollIntoView()  
    SetCur("project")
  };
  const handleRef5 = (e) => {  
    githubRef.current.scrollIntoView() 
    SetCur("github")
  };
  const handleRef6 = (e) => { 
    contactRef.current.scrollIntoView()  
    SetCur("contact")
  };
  return (
    <Box className={styles.navbar}
      position='sticky'
      top={'0px'}
      backgroundColor ='tranparent'
      border={"1px"}
      borderRadius="15"
      borderColor={'#4dbdfa'}
      

      h='60px'
      zIndex={'600'}
      // w={'100%'}
      marginRight="7"
      marginLeft='7'
      marginTop='5'

      
    
    
    >
      
        {varient ? (
          <>

            <Flex
        height="60px"
        display="flex"
        align="center"
        
        justifyContent="space-around"
      >
            <Center w="20%" h="40px" bg="transparent" display={'flex'} alignItems='center' >
              <Heading fontSize={"22px"}>
                <Highlight
                  query={"M"}
                  styles={{
                    px: "0",
                    py: "1",
                    color: colors.primary,
                    fontSize: "35px",
                  }}
                >
                  Mylo
                  
                </Highlight>
              </Heading>
                 </Center>
              
              <NavDrawer/>
              </Flex>
          </>
        ) : (
          <>
            <Flex
        // spacing="24px"
        height="60px"
        // width={"90%"}
        margin="auto"
        display="flex"
        align="center"
        justifyContent="space-around"
      >
            <Center w="20%" h="40px" bg="transparent" display={'flex'} alignItems='center' >
              <Heading fontSize={"22px"}>
                <Highlight
                  query={"M"}
                  styles={{
                    px: "0",
                    py: "1",
                    color: colors.primary,
                    fontSize: "35px",
                  }}
                >
                   mylo
                </Highlight>
              </Heading>
                </Center>
              
              <Flex
                w={'800px'}
                h={"100%"}
                transition='.5s'
              alignItems="center"
                justifyContent={"space-around"}
                className='nav'
            >
              <Box id="navItem" onClick={handleRef} p='8px' borderBottom={cur==="home"?"3px solid #4dbdfa":"none"} >
                HOME
              </Box>
              <Box id="navItem" onClick={handleRef3} p='8px' borderBottom={cur==="skill"?"3px solid #4dbdfa":"none"}>
                SKILLS
              </Box>
              <Box id="navItem" onClick={handleRef4} p='8px' borderBottom={cur==="project"?"3px solid #4dbdfa":"none"} >
                PROJECTS
              </Box>
              <Box id="navItem" onClick={handleRef2} p='8px' borderBottom={cur==="about"?"3px solid #4dbdfa":"none"} >
                ABOUT
              </Box>
        
              <Box id="navItem" onClick={handleRef6} p='8px' borderBottom={cur==="contact"?"3px solid #4dbdfa":"none"} >
                CONTACT
              </Box>
              </Flex>
              </Flex>
          </>
        )}
    </Box>
  );
};
