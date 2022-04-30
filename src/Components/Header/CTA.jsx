import React from "react";
import CV from "../../assests/Ezekiel_Udiomuno_CV.pdf";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className='cta'>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        whileHover={{
          scale: 1.4,
          textShadow: "0px 0px 8px rgb(255,255,255S)",
          boxShadow: "0px 0px 8px rgb(255,255,255S)",
        }}
      >
        <Button variant='outlined' href={CV} download className='btn'>
          Download CV
        </Button>
      </motion.div>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        whileHover={{
          scale: 1.4,
          textShadow: "0px 0px 8px rgb(255,255,255S)",
          boxShadow: "0px 0px 8px rgb(255,255,255S)",
        }}
      >
        <Button
          LinkComponent={Link}
          to='/contact'
          variant='contained'
          href='#contact'
          className='btn'
        >
          Let's Talk
        </Button>
      </motion.div>
    </div>
  );
};

export default CTA;
