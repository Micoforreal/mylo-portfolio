import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  ScaleFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import styles from "../Styles/About.module.css";
import shivrajImg from './Images/faviconWithoutBG.png'
//  myimg from '~/public/faviconWithoutBG.png'


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import {motion} from 'framer-motion'
import shiv from './Images/shivraj.png'

export const About = () => {
  const { aboutRef } = useContext(RefContext);
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <Box ref={aboutRef} mt={'90px'} pt='90px' pb={'90px'} >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: .8,
        }}
        
        ref={aboutRef} className={styles.sectionHeading} data-outline="About">
        About me
      </motion.h2>
      
        {varient ? (
          <>
          <Box
        // margin="auto"
            display={'flex'}
        alignItems={"center"}
            justifyContent='space-around'
            flexDirection={'column'}
            mt={"-90px"}
            // border='1px solid white'
            // overflow={""}
      >
             <Box
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  h={"150px"}
                borderRadius='50%'
                  width={'150px'}
                  objectFit={'cover'}
                  // src="https://raw.githubusercontent.com/shivraj32644/Porfolio/main/public/favicon.png" alt="man" />
                  src={shivrajImg} alt="man" />
                

            </Box>
            <Box color={"white"} mt='20px' display={'flex'} flexDirection='column' >
              {/* <p style={{ color: "#999999", width: "80%", marginLeft: "30px", textAlign:'justify' }}>
              An enthusiastic Full Stack Web Developer with a strong set of technical as
              well as non-technical skills and a dedication towards creating useful and
              interactive mobile and web applications using MERN stack. 
              </p> */}
              <p style={{ color: "#999999", width: "80%", marginLeft: "30px", textAlign:'justify' }}>
              Hi, I'm Michael James (also known as Mylo). I design and build apps that help people and businesses solve real problems. From mobile apps to websites, I focus on creating products that look great, work smoothly, and meet specific needs.

I work with modern tools like React Native and React.js to create user-friendly interfaces, while using Express, Django, MongoDB, and PostgreSQL to handle the behind-the-scenes functionality that makes everything run seamlessly.

My goal is to turn ideas into powerful, easy-to-use apps that make a difference. Let's connect and bring your vision to life!



              </p>
              <a href="https://drive.google.com/file/d/1lAttLQ8_W4kJsezF6pR-h1lPBltgaIcR/view" target={"_blank"}>
              <Button mt={"30px"} ml="15px" bg="#4dbdfa" color={"black"}>
                Download Resume
                </Button>
                </a>
              </Box>
              </Box>
          </>
        ) : (
          <>
          <Flex
        margin="auto"
        alignItems={"center"}
        justifyContent='space-around'
        mt={"-100px"}
      >
              <Box
                w="36%"
                // border={'1px solid white'}
                // height={'400px'}
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  // h={"380px"}
                  borderRadius='10px'
                  // width={'380px'}
                  bg={'#4bb5ee15'}
                  width={'60%'}
                  height='50%'

                  objectFit={'scale-down'}
                  // p={'20px'}
                  // objectFit={'contain'}
                  // src="https://raw.githubusercontent.com/shivraj32644/Porfolio/main/public/favicon.png" alt="myimg" />
                  // src={ window.location.origin+"/favicon.png" } alt="myimg" />
                  src={ shivrajImg} alt="myimg" />
                  {/* // src={ process.env.PUBLIC_URL+"/favicon.png" } alt="myimg" /> */}
                  {/* // src={ "%PUBLIC_URL%/faviconWithoutBG.png" } alt="myimg" /> */}
                {/* process.env.PUBLIC_URL+"/favicon.png" */}

            </Box>

            <Box color={"white"} w={"664px"}>
                <motion.p
                  initial={{  opacity: 0 }}
                  whileInView={{  opacity: 1 }}
                  viewport={{ once: false, amount: 1 }}
                  transition={{
                    duration: .8,
                  }}
                  style={{ color: "#999999", width: "80%", marginLeft: "15px" }}>
              
              Hi, I'm Michael James (also known as Mylo). I design and build apps that help people and businesses solve real problems. From mobile apps to websites, I focus on creating products that look great, work smoothly, and meet specific needs.

I work with modern tools like React Native and React.js to create user-friendly interfaces, while using Express, Django, MongoDB, and PostgreSQL to handle the behind-the-scenes functionality that makes everything run seamlessly.

My goal is to turn ideas into powerful, easy-to-use apps that make a difference. Let's connect and bring your vision to life!

              
                 </motion.p>
                <a href="https://drive.google.com/file/d/1lAttLQ8_W4kJsezF6pR-h1lPBltgaIcR/view" target={'_blank'}>
              <Button mt={"20px"} ml="15px" bg="#4dbdfa" color={"black"}>
                Download Resume
                  </Button>
                  </a>
              </Box>
              </Flex>
          </>
        )}
      
    </Box>
  );
};
