
import {
    mobile,
    backend,
    creator,
    web,
    sql,
    javascript,
    python,
    html,
    solidity,
    cpp,
    css,
    reactjs,
    tailwind,
    nodejs,
    java,
    git,
    tensorflow,
    figma,
    remix,
    metamask,
    meta,
    starbucks,
    tesla,
    shopify,
    katsco,
    threejs,
    crwn,
    smgs,
    smart,
    build,
    igem,
    iet,
    siam,
    cbdc,
     clipmint,
     tappapp,

  wms,
  blockchainIcon,
  aiIcon,
  multixender,

  blockbeatz,
  watchWallet,
  genesisStore,
  jars,
  yp,
  rust,
  expressjs,
  mongodb,
  firebase,
  expo,
   


  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    // {
    //   id: "testimonials",
    //   title: "Testimonials",
    // },
    {
      id: "contact",
      title: "Contact",
    },
     
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "React + React Native ",
      icon: backend,
    },
    {
      title: "Decentralized Application Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    
    {
      name: "React/React Native",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "Expo",
      icon: expo,
    },
    {
      name: "firbase",
      icon: firebase,
    }
    

    
  ];
  
  const experiences = [
    {
      title: "Lead Developer ",
      company_name: "Katsco Group",
      icon: katsco,
      iconBg: "#5E72E4",
      date: "August 2025 - Present",
      points: [
        "Managed the work of junior developers, making sure tasks are executed properly and codes are fully tested and debugged before shipping to production.",
        "collaborated with team to build podcast site and admin dashboard showing real time data for podcast while inspecting the build a web3 based ai from junior developer .",
        ],
    },
  
    {
      title: "Junior Frontend Developer",
      company_name: "3yp Ride",
      icon: yp,
      iconBg: "#1E1E1E",
      date: "Nov 2024 - Jan 2025",
      points: [
        "Designed a responsive landing page that improved lead conversion and simplified user onboarding.",
        "Collaborted with senior developer to create a highly sophisticated admin dashboard using ReactJS and TailwindCSS.  The dashboard features real-time data visualization, user management, and responsive design, enhancing the overall user experience and operational efficiency.",
      ],
    },
   
  ];
  
  
  const projects = [
    {
      name: "Ex Tap App",
      description:
      "This is fun crypto tap game that users play to earn the ex Token. The project is built as a telegram mini app it own telegram bot the project has different features like leaderboard and ai image generator",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tappapp,
      source_code_link: "https://github.com/Micoforreal/tap-game-mini-app",
    },
    {
      name: "Watch Wallet",
      description:
      "Watch Wallet is a Telegram mini-app that empowers users to set stop-loss orders directly inside Telegram, helping to prevent liquidations by automatically selling assets when prices fall below predefined thresholds, offering seamless risk management ",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "gray-text-gradient",
        },
      ],
      image: watchWallet,
      source_code_link: "https://github.com/Micoforreal/watchWallet",
    },
    
    {
      name: "Genesis Store",
      description:
      "A sleek high-performance e-commerce frontend built on Vercel that showcases product listings, intuitive cart functionality, and a smooth checkout flow. It’s a polished portfolio project demonstrating headless architecture and modern web commerce design.",
      tags: [
         {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        
      ],
      image: genesisStore,
      source_code_link: "https://github.com/Micoforreal/genesis_store_fe",
    },
    {
      name: "MultiXender",
      description:
      "A platform that let you send token to multiple address in one click, built on Near blockchain multixender is built to save you time when trying pay employees, friend or family",      tags: [
        {
          name: "React",
          color: "yellow-text-gradient",
        },
       
      {
          name: "nearapijs",
          color: "orange-text-gradient",
        },
      ],
      image: multixender,
      source_code_link: "https://github.com/Micoforreal/multixender_full",
    },
    {
      name: "Clip Mint",
      description:
      "ClipMint is a fast, lightweight video editor that lets creators trim, enhance, and customize clips directly in the browser, then instantly mint the finished video on-chain. It blends creative editing with blockchain ownership in a seamless, user-friendly workflow.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        
        
      ],
      image: clipmint,
      source_code_link: "https://github.com/Micoforreal/clipMint",
    },
  ];
  
  
  export { services, technologies, experiences, projects };