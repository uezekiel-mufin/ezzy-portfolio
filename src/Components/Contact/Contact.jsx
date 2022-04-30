import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import data from "./data";
import "./contact.css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const { handleSubmit, register } = useForm();

  const regForm = (data, e) => {
    e.preventDefault();
    e.target.reset();
    console.log(data);
  };
  console.log(data);
  return (
    <section id='contact'>
      <motion.h5
        transition={{ duration: 3 }}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
      >
        Get in Touch
      </motion.h5>
      <motion.h2
        transition={{ duration: 3 }}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.2, color: "white" }}
      >
        Contact Me
      </motion.h2>
      <div className='primary__container'>
        <Grid
          container
          // direction='column'
          className='grid__container'
        >
          <Grid item xs={12}>
            {data.map((d, index) => (
              <motion.div
                transition={{ duration: 3 }}
                initial={{ y: 1000 }}
                animate={{ y: 0, rotate: 360 }}
                className='contact__media'
              >
                <Grid
                  xs={12}
                  item
                  key={index}
                  style={{
                    display: "block",
                    width: "fit-content",
                    margin: "auto",
                  }}
                >
                  <div>{d.icon}</div>
                  <div>{d.name}</div>
                  <div>{d.address}</div>
                  <Button href={d.link}>Send a message</Button>
                </Grid>
              </motion.div>
            ))}
          </Grid>
        </Grid>
        <motion.div
          transition={{ duration: 3 }}
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
        >
          <form
            className='form'
            onSubmit={handleSubmit(regForm)}
            style={{ background: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className='textField'>
              <TextField
                fullWidth
                variant='standard'
                type='password'
                label='fullName'
                name='fullName'
                id='fullName'
                // color='primary'
                {...register("firstName")}
              />
            </div>
            <div className='textField'>
              <TextField
                fullWidth
                variant='standard'
                label='Email'
                name='Email'
                id='Email'
                className='input'
                color='primary'
                {...register("Email")}
              />
            </div>
            <div className='textField'>
              <TextField
                variant='standard'
                fullWidth
                label='Your Message'
                multiline
                minRows={5}
                name='message'
                id='message'
                className='input message'
                color='primary'
                {...register("message")}
              />
            </div>
            <Button variant='contained' className='btn' type='submit'>
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
