import { Button, Grid, Input, InputLabel, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import data from "./data";
import "./contact.css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [noPassword, setNoPassword] = useState(true);
  const [value, setValue] = useState("");
  console.log(value);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    handleSubmit,
    register,
    getValues,
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
              // style={{ background: "rgba(0, 0, 0, 0.3)" }}
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

              {/* <div className='textField'>
              <InputLabel htmlFor='lastName' sx={{ color: "#fff" }}>
                Last Name
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
                variant='filled'
                label='lastName'
                name='lastName'
                id='lastName'
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: 2,
                })}
              />
              {errors.lastName && (
                <p className='error'>{errors.lastName?.message}</p>
              )}
            </div> */}
              {/* <div className='textField'>
              <InputLabel htmlFor='phone' sx={{ color: "#fff" }}>
                Phone
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
                type='number'
                color='secondary'
                variant='filled'
                label='phone'
                name='phone'
                id='phone'
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: 11,
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && <p className='error'>{errors.phone?.message}</p>}
            </div> */}
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
              {/* <div className='textField'>
              <InputLabel htmlFor='password' sx={{ color: "#fff" }}>
                Password
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
                type={noPassword ? "password" : "text"}
                color='secondary'
                variant='filled'
                // value={value}
                label='password'
                name='password'
                id='password'
                onChange={(e) => setValue(e.target.value)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setNoPassword((prev) => !prev)}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      sx={{ color: "#fff" }}
                    >
                      {noPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "password must not be less than 8 characters",
                  },
                  // pattern: {
                  //   value: ,
                  //   message:
                  //     "password must contain Uppercase, lowercase,number",
                  // },
                })}
              />
              {errors.password && (
                <p className='error'>{errors.password?.message}</p>
              )}
            </div>
            <div className='textField'>
              <InputLabel htmlFor='confirmPassword' sx={{ color: "#fff" }}>
                Confirm Password
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
                type={noPassword ? "password" : "text"}
                color='secondary'
                variant='filled'
                label='confirmPassword'
                name='confirmPassword'
                id='confirmPassword'
                // value={value}
                onChange={(e) => setValue(e.target.value)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setNoPassword((prev) => !prev)}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      sx={{ color: "#fff" }}
                    >
                      {noPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("confirmPassword", {
                  required: "input a password",
                  validate: {
                    checkPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Password do not match";
                    },
                  },
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className='error'>{errors.confirmPassword?.message}</p>
            )} */}
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
