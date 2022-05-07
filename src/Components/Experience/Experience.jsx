import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import FrontEnd from "./frontEnd";
import BackEnd from "./BackEnd";
import CheckIcon from "@mui/icons-material/Check";
// import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import "./experience.css";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { AnimatePresence, motion } from "framer-motion";

const Experience = () => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  console.log(entry);

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`);
  }, [isVisible]);
  return (
    <>
      <AnimatePresence>
        <motion.section exit={{ x: 1000 }} id='experience' ref={ref}>
          <motion.h5
            transition={{ duration: 3 }}
            initial={{ y: -500 }}
            animate={{ y: 0 }}
          >
            What Skills I have
          </motion.h5>
          <motion.h2
            transition={{ duration: 3 }}
            initial={{ y: 500 }}
            animate={{ y: 0, scale: 2 }}
            whileHover={{ color: "white" }}
          >
            My Experience
          </motion.h2>

          <Grid
            display='flex'
            container
            justifyContent='center'
            gap={4}
            spacing={2}
            className='container experience__container'
          >
            <Grid item xs={12} sm={6} lg={4}>
              <motion.div
                className='experience__skills'
                transition={{ duration: 2 }}
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
              >
                <Typography className='typography' variant='h3'>
                  FrontEnd
                </Typography>
                <Grid container rowSpacing={4}>
                  {FrontEnd.map((d, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      key={index}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                      }}
                    >
                      <CheckIcon className='experience__content-icons' />
                      <motion.div>
                        <motion.h4
                          transition={{ type: "spring", stiffness: 300 }}
                          whileHover={{
                            scale: 2,
                            originX: 0,
                            color: "#f8e112",
                          }}
                        >
                          {d.technology}
                        </motion.h4>
                        <motion.h6
                          transition={{ type: "spring", stiffness: 300 }}
                          whileHover={{
                            scale: 2,
                            originX: 0,
                            color: "#f8e112",
                          }}
                          className='text-light'
                        >
                          {d.level}
                        </motion.h6>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <motion.div
                className='experience__skills'
                transition={{ duration: 2 }}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
              >
                <Typography variant='h3' className='typography'>
                  BackEnd
                </Typography>
                <Grid container rowSpacing={4}>
                  {BackEnd.map((b, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                      }}
                    >
                      <CheckIcon className='experience__content-icons' />
                      <div>
                        <motion.h4
                          transition={{ type: "spring", stiffness: 300 }}
                          whileHover={{
                            scale: 2,
                            originX: 0,
                            color: "#f8e112",
                          }}
                        >
                          {b.technology}
                        </motion.h4>
                        <motion.h6
                          transition={{ type: "spring", stiffness: 300 }}
                          whileHover={{
                            scale: 2,
                            originX: 0,
                            color: "#f8e112",
                          }}
                          className='text-light'
                        >
                          {b.level}
                        </motion.h6>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default Experience;
