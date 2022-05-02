import { Grid, Typography } from "@mui/material";
import React from "react";
import web from "./web";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./services.css";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section id='services' className='services'>
      <motion.h5
        transition={{ duration: 3 }}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
      >
        What I Offer
      </motion.h5>
      <motion.h2
        transition={{ duration: 3 }}
        initial={{ y: 500 }}
        animate={{ y: 0, scale: 1.5 }}
      >
        Services
      </motion.h2>

      <Grid display='flex' container justifyContent='center' spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <motion.div
            transition={{ duration: 1.5 }}
            initial={{ x: 1000 }}
            animate={{ x: 0, rotate: 360 }}
          >
            <Grid container className='services__list'>
              <Typography variant='h6' className='typography' gutterBottom>
                UI/UX Design
              </Typography>
              {web.map((w, index) => (
                <List key={index} disablePadding>
                  <ListItem className='list'>
                    <ListItemIcon>
                      <ArrowRightIcon className='icon' />
                    </ListItemIcon>
                    <ListItemText primary={w} />
                  </ListItem>
                </List>
              ))}
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <motion.div
            transition={{ duration: 1.5 }}
            initial={{ y: 1000 }}
            animate={{ y: 0, rotate: 360 }}
          >
            <Grid container className='services__list'>
              <Typography variant='h6' className='typography' gutterBottom>
                Web Dev
              </Typography>
              {web.map((w, index) => (
                <List key={index} disablePadding>
                  <ListItem className='list'>
                    <ListItemIcon>
                      <ArrowRightIcon className='icon' />
                    </ListItemIcon>
                    <ListItemText primary={w} />
                  </ListItem>
                </List>
              ))}
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <motion.div
            transition={{ duration: 1.5 }}
            initial={{ x: -1000 }}
            animate={{ x: 0, rotate: 360 }}
          >
            <Grid container className='services__list'>
              <Typography variant='h6' className='typography' gutterBottom>
                Content Creation
              </Typography>
              {web.map((w, index) => (
                <List key={index} disablePadding>
                  <ListItem className='list'>
                    <ListItemIcon>
                      <ArrowRightIcon className='icon' />
                    </ListItemIcon>
                    <ListItemText primary={w} />
                  </ListItem>
                </List>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Services;
