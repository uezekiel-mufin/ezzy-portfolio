import React from "react";
import "./header.css";
import CTA from "./CTA";
// import HeadersSocials from "./HeadersSocials";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme, Grid, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    card: {
      border: "none",
      boxShadow: "none",
    },
  },
});
const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          display='flex'
          // justifyContent='center'
          spacing={1}
          flexDirection='row'
          style={{ padding: "5rem", marginTop: "3rem" }}
        >
          <Grid
            item
            className='container'
            display='grid'
            flexDirection='column'
            justifyContent='center'
            style={{ margin: "5rem 0 0 3rem" }}
            sm={6}
          >
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ x: 1000 }}
              animate={{ x: 0, y: -30 }}
            >
              Welcome
            </motion.h5>
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ x: 1000 }}
              animate={{ x: 0, y: -30 }}
            >
              My name is
            </motion.h5>
            <motion.h2
              transition={{ duration: 3 }}
              initial={{ x: 1000 }}
              animate={{ x: 0, scale: 2.5 }}
            >
              Ezekiel Udiomuno
            </motion.h2>
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ x: 1000 }}
              animate={{ x: 0, scale: 1.5 }}
            >
              A Front-End Web Developer
            </motion.h5>
            <CTA />
          </Grid>
          <Grid
            item
            display='flex'
            flexDirection={{ xs: "row", sm: "column", lg: "column" }}
            justifyContent='center'
            style={{ margin: "0 0 0 5rem" }}
            // sm={6}
          >
            <a
              href='https://linkedin.com'
              className='links'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
            <a
              href='https://github.com'
              className='links'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='https://twitter.com'
              className='links'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon />
            </a>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Header;
