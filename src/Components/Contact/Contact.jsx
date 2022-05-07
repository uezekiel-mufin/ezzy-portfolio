import { Button, Grid, Input, InputLabel } from "@mui/material";
import React, { useState, useRef } from "react";
import data from "./data";
import "./contact.css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onSubmit",
    criteriaMode: "firstError",
  });
  const [userData, setUserData] = useState({});

  const regForm = (data, e) => {
    e.preventDefault();
    reset();
    setUserData(data);
  };
  console.log(data);
  console.log(userData);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ezzy",
      "template_lf4fnom",
      form.current,
      "vngt2iIdOB55EqdDp"
    );
    e.target.reset();
  };
  return (
    <motion.section animate={{ scale: 1 }} id='contact'>
      <motion.h5
        transition={{ duration: 3 }}
        initial={{ x: -1000 }}
        animate={{ x: 0, scale: 2, marginBottom: "0.5rem" }}
      >
        Get in Touch
      </motion.h5>
      <motion.h2
        transition={{ duration: 3 }}
        initial={{ x: 1000 }}
        animate={{ x: 0, scale: 2 }}
        whileHover={{ scale: 3, color: "#fff" }}
      >
        Contact Me
      </motion.h2>
      <Grid
        container
        display='flex'
        justifyContent='center'
        padding={{ xs: "2rem", md: "3rem" }}
        className='container'
        // flexDirection={{ xs: "column", md: "row" }}
      >
        <motion.div
          transition={{ duration: 3 }}
          initial={{ y: 1000 }}
          animate={{ y: 0, rotate: 360 }}
          className='contact__media'
        >
          {data.map((d, index) => (
            <Grid
              xs={12}
              md={12}
              display='grid'
              alignContent='center'
              key={index}
              style={{
                // width: "200vw",
                padding: "1rem",
                display: "column",

                marginBottom: "2rem",
                background: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className='details'>{d.icon}</div>
              <div className='details'>{d.name}</div>
              <div className='details'>
                <a href={d.link} target='_blank' rel='noreferrer'>
                  Send a message
                </a>
              </div>
            </Grid>
          ))}
        </motion.div>

        <Grid item xs={12} md={6}>
          <motion.div
            transition={{ duration: 3 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
          >
            <form
              ref={form}
              className='form'
              onSubmit={(handleSubmit(regForm), sendEmail)}
            >
              <div className='textField'>
                <InputLabel htmlFor='fullName' sx={{ color: "#fff" }}>
                  First Name
                </InputLabel>
                <Input
                  sx={{
                    color: "#afafde",
                    marginBottom: "1rem",
                    border: "1px solid #5a5a8c ",
                    padding: "0.7rem",
                  }}
                  size='normal'
                  fullWidth
                  color='secondary'
                  variant='standard'
                  label='fullName'
                  name='fullName'
                  id='fullName'
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: 2,
                  })}
                />
                {errors.fullName && (
                  <p className='error'>{errors.fullName?.message}</p>
                )}
              </div>

              <div className='textField'>
                <InputLabel htmlFor='Email' sx={{ color: "#fff" }}>
                  Email
                </InputLabel>
                <Input
                  sx={{
                    color: "#afafde",
                    marginBottom: "1rem",
                    border: "1px solid #5a5a8c ",
                    padding: "0.7rem",
                  }}
                  size='normal'
                  fullWidth
                  variant='filled'
                  label='Email'
                  name='Email'
                  id='Email'
                  className='input'
                  color='primary'
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "incorrect email",
                    },
                  })}
                />
                {errors.Email && (
                  <p className='error'>{errors.Email?.message}</p>
                )}
              </div>

              <div className='textField'>
                <InputLabel htmlFor='messages' sx={{ color: "#fff" }}>
                  Message
                </InputLabel>
                <Input
                  sx={{
                    color: "#afafde",
                    marginBottom: "1rem",
                    border: "1px solid #5a5a8c ",
                    padding: "0.7rem",
                  }}
                  size='normal'
                  variant='filled'
                  fullWidth
                  label='Your Message'
                  multiline
                  minRows={5}
                  name='message'
                  id='messages'
                  className='input message'
                  color='primary'
                  {...register("message", {
                    required: "Please input your message",
                  })}
                />
                {errors.messages && (
                  <p className='error'>{errors.messages?.message}</p>
                )}
              </div>
              <Button variant='contained' className='btn' type='submit'>
                Submit
              </Button>
            </form>
          </motion.div>
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default Contact;
