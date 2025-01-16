import React from 'react';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import Image from "next/image";
import Countdown from "../components/Countdown";
const styles = {
  height: "95vh",
  width: "100vw",
  position: "relative",
  zIndex: "20",
  h1: {
    fontSize: {
      xs: "50px",
      md: "80px",
      lg: "120px",
    },
    overflowY: "hidden",
  },
  h4: {
    position: "relative",
    m: "10px 0",
    textAlign: "center",
    fontSize: {
      lg: "24px",
      md: "24px",
      sm: "18px",
      xs: "18px",
    },
    maxWidth: "80vw",
  },
  h5: {
    position: "relative",
    m: "20px 0",
    textAlign: "center",
    fontSize: {
      lg: "22px",
      md: "18px",
      sm: "11px",
      xs: "11px",
    },
    maxWidth: "80vw",
  },
  ".noMarginB": {
    marginBottom: "10px",
  },
  ".noMarginT": {
    marginTop: "0",
  },
  ".Heading": {
    zIndex: "10",
  },
};

export default function VideoText({ hideIt }) {
  const scrollRef = useRef(null);

  return (
    <Box
      ref={scrollRef}
      sx={styles}
      className="center1"
      style={{ marginTop: "5vh", marginBottom: "0vh" }}
    >
      <Box
        className="date"
        style={{
          display: "flex",
          top: "40px",
          position: "relative",
          justifyContent: "space-between",
          width: "550px",
        }}
      >
        <Typography variant="h5">IIEST Shibpur&apos;s</Typography>
        <Typography variant="h5">29 January - 1 February 2025</Typography>
      </Box>
      <Box className="aboutUdbhabani center1">
              <Image src="/images/udhlogo.png" height="1750" width="750" alt="Socce" />
              <Box className="content" style={{ textAlign: "justify" }}>
              Annual Techfest of Department of Civil Engineering
              </Box>
      </Box>
      
      <Countdown />
    </Box>
  );
}
