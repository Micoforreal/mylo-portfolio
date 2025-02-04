import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../Styles/Home.module.css";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import gif from './Images/introGif.gif'
import { colors } from "../constants/styling";
import mylo from "./Images/faviconWithoutBG.png"

export const Intro = () => {
  const { introRef } = useContext(RefContext);
  const varient = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
      
    }
  )
  return (
    <Center ref={introRef} >
      <Flex
        // w={"95%"}
        h="90vh"
        margin="auto"
        justifyContent={"space-around"}
        alignItems="center"
        spacing={5}
        borderRadius={"8px"}
        color="#fff"
        
      >
        {varient ? (
          <>
          <Container>
            
            <motion.p 
                initial={{  opacity: 0 }}
                  whileInView={{  opacity: 1 }}
                  viewport={{ once: false, amount: 1 }}
                  transition={{
                    duration: .8,
                  }}>

         <Box margin="auto" mt='10'  width={'70%'} >

          <Image
          borderRadius='50'
          src={
            mylo
          }
          alt="img2"
          />
            </Box>
          </motion.p>
            <Box width={'100%'} >
            <Box my='7' style={{display:'flex',flexDirection:'column' , alignItems:'center' }}>
          <Heading  lineHeight="tall" textAlign="start">
            <Heading  fontFamily="monospace" color={colors.primary} mb={'15px'} size="sm" fontSize="25px">
             
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "Hey 👋",
                    "Wanna an create app?"
                    
                  ],
                  
                }}
                />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"Mylo"}
              
              styles={{ px: "2", py: "1", color: colors.primary }}
              >
           You can call me Mylo
                </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: colors.primary }}
              >
               
               A Full Stack Sofware
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: colors.primary }}
              >
              Developer
            </Highlight>
          </Heading>
              </Box>  
        </Box>
              </Container>
        </>

      ):(
      <>
              <Box w={"42%"}>
              <Heading lineHeight="tall" textAlign="start">
            <Heading fontFamily="monospace" color='#4dbdfa' mb={'15px'} size="sm" fontSize="35px">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "Hey 👋 ",
                    "Wanna an create app?"
               
                  ],
                  
                }}
              />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"mylo"}
              styles={{ px: "2", py: "1", color: colors.primary }}
            >
              You can call me Mylo 
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: colors.primary }}
            >
              A Full Stack Software 
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: colors.primary }}
            >
              Developer
            </Highlight>
          </Heading>
        </Box>



        <Box w={"40%"}>

 <motion.span
          
              initial={{ x: 70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
            >
        <Image
          borderRadius='50'
          src={
            mylo
          }
          alt="img2"
          />
               
          </motion.span>
        </Box>
      </>
        )}
        
      </Flex>
    </Center>
  );
};


