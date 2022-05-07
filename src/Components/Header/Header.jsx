import React from "react";
import "./header.css";
import CTA from "./CTA";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          spacing={1}
          flexDirection='row'
          style={{ marginTop: "3rem", padding: "5rem 0 0 3.5rem" }}
        >
          <Grid
            item
            className='container'
            display='grid'
            flexDirection='column'
            justifyContent='center'
            style={{ width: "fitContent" }}
          >
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ y: 1000 }}
              animate={{ y: -30, x: 50, scale: 2 }}
            >
              Welcome
            </motion.h5>
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ y: 1000 }}
              animate={{ y: -30, x: 50 }}
            >
              My name is
            </motion.h5>
            <motion.h2
              transition={{ duration: 3 }}
              initial={{ x: 1000 }}
              animate={{ x: 60, scale: 2.5 }}
            >
              Ezekiel Udiomuno
            </motion.h2>
            <motion.h5
              transition={{ duration: 3 }}
              initial={{ x: -1000 }}
              animate={{ x: 0, scale: 1.5 }}
            >
              A Front-End Web Developer
            </motion.h5>
            <CTA />
          </Grid>
          <Grid
            item
            display='flex'
            flexDirection={{
              xs: "row",
              sm: "column",
              md: "column",
              lg: "column",
            }}
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
