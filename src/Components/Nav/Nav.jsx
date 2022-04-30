import React, { useState } from "react";
import "./nav.css";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        to='/services'
      >
        <MiscellaneousServicesIcon />
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
