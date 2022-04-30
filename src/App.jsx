import React, { useState, useEffect } from "react";
import "./index.css";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#fff",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1f1f3b",
      darker: "#2c2c6c",
    },
  },
});
// import { makeStyles } from "@mui/material";
// import { ThemeProvider } from "@mui/private-theming";

// const theme = makeStyles({
//   root: {
//     pallette: "primary",
//   },
// });
const App = () => {
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes location={location}>
          <Route path='/' element={<Header />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
        <Nav />
      </ThemeProvider>
    </>
  );
};

export default App;
