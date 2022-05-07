import React, { useEffect, useState } from "react";
import Me3 from "../../../src/assests/me3.jpg";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
// import PeopleIcon from "@mui/icons-material/People";
// import FolderIcon from "@mui/icons-material/Folder";
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import "./about.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about' className='about__section'>
      <motion.h5
        transition={{ duration: 1.5 }}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.7 }}
      >
        Get to know
      </motion.h5>
      <motion.h2
        transition={{ duration: 1.5 }}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.7 }}
      >
        About Me
      </motion.h2>

      <div className='container about__container'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={6}>
            <motion.div
              transition={{ duration: 2.5 }}
              initial={{ x: 1000 }}
              animate={{ x: 0, rotate: 720 }}
              className='about__me'
            >
              <motion.div className='about__me-image'>
                <img src={Me3} alt='About Me' />
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <div className='about__content'>
              <motion.div className='about__cards'>
                <Grid container spacing={2}>
                  {Data.map((data, index) => (
                    <Grid item xs={6} sm={4} lg={4} key={index}>
                      <motion.div
                        transition={{ duration: 1.5 }}
                        initial={{ y: 1000 }}
                        animate={{ y: 0, rotate: 360 }}
                        className='about__card'
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className='about__icon'>{data.icon}</div>
                        <h5>{data.h5}</h5>
                        <small>{data.small}</small>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
                <motion.p
                  transition={{ duration: 1.5 }}
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  I am a self taught developer, that derives joy in giving the
                  customer a beautiful interface and an awesome experience
                  whenever they visit my work. I am motivated to contribute my
                  own quota to the tech industry and hopefully leave a mark in
                  the sands of time.
                </motion.p>
                <motion.div
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                  initial={{ y: -1000 }}
                  animate={{ y: 0 }}
                >
                  <Link to='/contact'>
                    <Button
                      className='btn btn-primary'
                      href='#contact'
                      variant='contained'
                      // onClick={()=>}
                      // to='/contact'
                    >
                      Let's Talk
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default About;
