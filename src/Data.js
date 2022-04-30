import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
const Data = [
  {
    icon: <WorkHistoryIcon />,
    h5: "Experience",
    small: "3+ Years",
  },
  {
    icon: <PeopleIcon className='about__icon' />,
    h5: "Clients",
    small: "80+",
  },
  {
    icon: <FolderIcon className='about__icon' />,
    h5: "Projects",
    small: "50+",
  },
];

export default Data;
