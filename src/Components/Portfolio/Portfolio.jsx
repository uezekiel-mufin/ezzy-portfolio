import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import data from "./data";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  console.log(data);

  return (
    <>
      <section className='grid___container'>
        <motion.h5
          transition={{ duration: 1.5 }}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
        >
          My Recent Work
        </motion.h5>
        <motion.h2
          transition={{ duration: 3 }}
          initial={{ x: 1000 }}
          animate={{ x: 0, scale: 2 }}
        >
          Portfolio
        </motion.h2>

        <Grid container spacing={0.5} display='flex' justifyContent='center'>
          {data.map((d, index) => (
            <Grid
              display='flex'
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                color: "#fff",
                padding: "2rem",
                borderRadius: "2rem",
                margin: "2rem",
                width: "max-content",
              }}

              // style={{ padding: "4rem" }}
            >
              <motion.div
                transition={{
                  duration: 3,
                  type: "spring",
                }}
                initial={{ y: -1000 }}
                animate={{ y: -20, rotate: 360 }}
              >
                <CardMedia
                  component='img'
                  src={d.image}
                  alt={d.name}
                  className='img'
                />
                <CardContent>
                  <Typography variant='body2' className='typography'>
                    {d.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className='btn'
                    variant='outlined'
                    onClick={() => window.open(d.gitHub)}
                  >
                    Github
                  </Button>
                  <Button
                    className='btn'
                    variant='contained'
                    color='secondary'
                    onClick={() => window.open(d.liveDemo)}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Portfolio;
