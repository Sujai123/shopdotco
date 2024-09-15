import React from "react";
import StayUpToDate from "./StayUpToDate";
import { Box } from "@mui/material";
import Credits from "./Credits";

const Footer = () => {
  return (
    <Box>
      <StayUpToDate />
      <Credits />
    </Box>
  );
};

export default Footer;
