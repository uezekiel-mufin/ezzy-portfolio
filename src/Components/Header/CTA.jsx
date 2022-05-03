import React from "react";
import CV from "../../assests/Ezekiel_Udiomuno_CV.pdf";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className='cta'>
      <motion.div>
        <Button variant='outlined' href={CV} download className='btn'>
          Download CV
        </Button>
      </motion.div>
      <motion.div>
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
