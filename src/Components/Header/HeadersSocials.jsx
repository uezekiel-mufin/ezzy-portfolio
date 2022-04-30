import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import "./header.css";
const HeadersSocials = () => {
  return (
    <motion.div
      transition={{ duration: 3 }}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: 1100,
        y: -50,
        rotate: -90,
        width: "max-content",
        position: "right",
      }}
      className='header__socials'
    >
      <a href='https://linkedin.com'>
        <LinkedInIcon />
      </a>
      <a href='https://github.com'>
        <GitHubIcon />
      </a>
      <a href='https://twitter.com'>
        <TwitterIcon />
      </a>
    </motion.div>
  );
};

export default HeadersSocials;
