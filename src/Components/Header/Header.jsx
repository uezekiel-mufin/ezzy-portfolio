import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me2 from "../../assests/Me2.jpg";
import HeadersSocials from "./HeadersSocials";
import { motion } from "framer-motion";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  ShareIcon,
  FavoriteIcon,
  Link,
  Typography,
  Paper,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

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
        <motion.div
          // transition={{ duration: 3 }}
          // initial={{ x: 0 }}
          // animate={{ x: -200 }}
          // exit={{ x: "1000vw" }}
          className='container header__container'
        >
          <motion.h3
            transition={{ duration: 2 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
          >
            Hello Welcome,
          </motion.h3>
          <motion.h5
            transition={{ duration: 2 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
          >
            I am
          </motion.h5>
          <motion.h1
            transition={{ duration: 1.5 }}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
          >
            Ezekiel Udiomuno
          </motion.h1>
          <motion.h5
            transition={{ duration: 1.5 }}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
          >
            A Front-End Web Developer
          </motion.h5>
          <HeadersSocials />
          <CTA />
        </motion.div>
      </ThemeProvider>
    </>
  );
};

export default Header;
