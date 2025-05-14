import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";
import jiomartImg from "./Images/jiomart.png";


const projectData = [
  {
    title: "MultiXender",
    description: "A platform that let you send token to multiple address in one click",
    features: [
      "Connect Wallet",
      "Fetch user Account balance",
      "Sign and Send Trasaction with Smart Contract",
    ],
    techStack: "Tailwind CSS | Reactjs | React-Hook-Form | Rust",
    areaOfResponsibility:
      "My role in the project involves constructing responsive UI based on Figma designs, seamlessly integrating APIs across all pages. I consistently implement platform modifications in alignment with evolving business requirements.",
    date: "Nov 1 - Dec 24: 2024",
    image: "multixender.png",
    liveLink: "https://multixenderfullstack.vercel.app/",
  },
  {
    title: "Ex Tap App",
    description: "This is fun crypto tap game that users play to earn the ex Token",
    features: [
      "Leaderboard",
      "refferal system",
      "challenges and reward",
    ],
    techStack: "React | Tailwind CSS | Expressjs | Mongodb",
    areaOfResponsibility:
      "Building the backend with express and connecting it to the frontend of the app , handling users state and automatically authenticating telegram users with the api",
    date: "Jan 1 2025 - Feb 1 2025",
    image: "tapapp.png",
    liveLink: "https://t.me/ex1tonbot/EXPTE",
  },
  {
    title: "Genesis Store",
    description: "This is an ecommerce app that let you buy and sell products",
    features: [
      "Search",
      "Product Filter",
      "Cart",
    ],
    techStack: "React | Tailwind CSS | Expressjs | Postgresql",
    areaOfResponsibility:
      "build backend with express and connecting it to the reactjs frontend of the app , handling users state and automatically authenticating",
    date: "Oct 01 2024 - Nov 3 2024",
    image: "genesis_store.png",
    liveLink: "https://genesis-store-fe.vercel.app/",
  },
];

export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              duration: 0.3,
            }}
            className={"sectionHeading"}
            data-outline="Projects"
          >
            Projects
          </motion.h2>
          <div className={styles.containerThree}>

            {projectData.map((project, index) => (

              <motion.div
              key={index}
              className={styles.item}
              initial={{ x: 70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              >

              <div className={styles.left}>
                <div className={styles.img}>
                  <img src={project.image} alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>{project.title}</h2>

                <p className={styles.projectDesc}>
                {project.description}
                  <h3>Features</h3>
                  <ul style={{ marginLeft: "30px", marginBottom: "10px" }}>
                    { project.features && project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))} 
                  </ul>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i> Tech Stack :</i>
                    </b>{" "}
                    {project.techStack}{" "}
                  </h2>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i> Area of Responsibility :</i>
                    </b>{" "}
                    {project.areaOfResponsibility}
                  </h2>
                  <h2>
                    <b>
                      <i>Date: </i>
                    </b>{" "}
                    {project.date}{" "}
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className={styles.primaryBtn}
                    >
                    Live Link
                  </a>
                </div>
              </div>
            </motion.div>
                  ))}
            {/* ========================================================================================================================================= */}
            {/* <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="tapapp.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Ex Tap App</h2>

                <p className={styles.projectDesc}>
                  This is fun crypto tap game that users play to earn the ex
                  Token
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px", marginBottom: "10px" }}>
                    <li>Leaderboard </li>
                    <li>refferal system</li>
                    <li> challenges and reward</li>
                  </ul>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i>Tech Stack :</i>
                    </b>{" "}
                    React | Tailwind CSS | Expressjs | Mongodb
                  </h2>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i>Area of Responsibility :</i>
                    </b>{" "}
                    Building the backend with express and connecting it to the
                    frontend of the app , handling users state and automatically
                    authenticating telegram users with the api
                  </h2>
                  <h2>
                    <b>
                      <i>Date: </i>
                    </b>{" "}
                    Jan 30 2025 - present{" "}
                  </h2>
                </p>

                <div className={styles.buttons}>
                  <a
                    href="https://t.me/ex1tonbot/EXPTE"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Live Link{" "}
                  </a>
                </div>
              </div>
            </motion.div> */}
            {/* ========================================================================================================================================= */}
{/* 
            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="genesis_store.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Genesis Store</h2>

                <p className={styles.projectDesc}>
                  This is an ecommerce app that let you buy and sell products
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px", marginBottom: "10px" }}>
                    <li>Search</li>
                    <li>Product Filter</li>
                    <li>Cart</li>
                  </ul>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i>Tech Stack :</i>
                    </b>{" "}
                    React | Tailwind CSS | Expressjs | Postgresql
                  </h2>
                  <h2 style={{ marginBottom: "10px" }}>
                    <b>
                      <i>Area of Responsibility :</i>
                    </b>{" "}
                    build backend with express and connecting it to the reactjs frontend of the app
                    , handling users state and automatically authenticating
                  </h2>
                  <h2>
                    <b>
                      <i>Date: </i>
                    </b>{" "}
                    Oct 01 2024 - Nov 3 2024{" "}
                  </h2>
                </p>

                <div className={styles.buttons}>
                  <a
                    href="https://genesis-store-fe.vercel.app/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Live Link{" "}
                  </a>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
