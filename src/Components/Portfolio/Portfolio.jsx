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
          animate={{ x: 0 }}
        >
          Portfolio
        </motion.h2>

        <motion.div
          transition={{
            duration: 3,
            type: "spring",
            // stiffness: 400,
            // damping: 20,
          }}
          initial={{ y: -1000 }}
          animate={{ y: -70, rotate: 360, scale: 0.9 }}
        >
          <Grid container spacing={4}>
            {data.map((d, index) => (
              <Grid
                style={{ wrap: "wrap" }}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                key={index}

                // style={{ padding: "4rem" }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    color: "#fff",
                    padding: "1.5rem",
                    borderRadius: "2rem",
                  }}
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
                    <div style={{ flexGrow: "1" }}></div>

                    <Button
                      className='btn'
                      variant='contained'
                      color='secondary'
                      onClick={() => window.open(d.liveDemo)}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </section>
    </>
  );
};

export default Portfolio;
