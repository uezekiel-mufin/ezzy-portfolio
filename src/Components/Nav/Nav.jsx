import React, { useState } from "react";
import "./nav.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InfoIcon from "@mui/icons-material/Info";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <Link
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        to='/'
      >
        <HomeIcon />
      </Link>
      <Link
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        to='/about'
      >
        <InfoIcon />
      </Link>
      <Link
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        to='/experience'
      >
        <WorkHistoryIcon />
      </Link>
      <Link
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        to='/contact'
      >
        <PermPhoneMsgIcon />
      </Link>
      <Link
        href='#portfolio'
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        to='/portfolio'
      >
        <FolderCopyIcon />
      </Link>
    </nav>
  );
};

export default Nav;
