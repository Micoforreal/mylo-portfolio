import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
import { TfiDirectionAlt } from "react-icons/tfi";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";


export const Contact = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const { contactRef } = useContext(RefContext);
  return (
    <Box pt="50px" pb={"100px"} ref={contactRef}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="Contact"
      >
        Contact
      </motion.h2>
      <Box
        display="flex"
        gap="20px"
        flexWrap={"wrap"}
        justifyContent="center"
        w="80%"
        margin={"auto"}
      >
        <a
          href="https://www.instagram.com/justonemylo/"
          target={"_blank"}
        >
          <Box
            w={"220px"}
            as={motion.div}
            initial={
              variant ? { x: -100, opacity: 0 } : { x: -200, opacity: 0 }
            }
            whileInView={{ x: 0,opacity:1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            // viewport={{ once: false, amount: 0.6 }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="rgba(80, 202, 246, 0.84) 0px 2px 6px"
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#4dbdfa"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"38px"}
            >
              <AiFillInstagram />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Instagram</h2>
              <p style={{ color: "#999999" }}>@justonemylo</p>
            </Box>
          </Box>
        </a>

       
        <a href="https://x.com/justonemylo" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: -100, opacity: 0 } : { x: 200 }}
            whileInView={{ x: 0,opacity:1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            // viewport={{ once: false, amount: 0.6 }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="rgba(80, 202, 246, 0.84) 0px 2px 6px"
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#4dbdfa"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"30px"}
            >
              <BsTwitter />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Twitter</h2>
              <p style={{ color: "#999999" }}>@justonemylo</p>
            </Box>
          </Box>
        </a>

        <a href="mailto:mjjames006@gmail.com" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: 100 } : { x: 200 }}
            whileInView={{ x: 0,opacity:1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            // viewport={{ once: false, amount: 0.6 }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="rgba(80, 202, 246, 0.84) 0px 2px 6px"
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#4dbdfa"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"35px"}
            >
              <AiOutlineMail />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Email</h2>
              <p style={{ color: "#999999" }}>mjjames006@gmail.com
              </p>
            </Box>
          </Box>
        </a>




        <a href="https://t.me/justonemylo" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: 100 } : { x: 200 }}
            whileInView={{ x: 0,opacity:1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            // viewport={{ once: false, amount: 0.6 }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="rgba(80, 202, 246, 0.84) 0px 2px 6px"
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#4dbdfa"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"35px"}
            >
              <BsTelegram/>
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Telegram</h2>
              <p style={{ color: "#999999" }}>@justonemylo
              </p>
            </Box>
          </Box>
        </a>
      </Box>
    </Box>
  );
};
