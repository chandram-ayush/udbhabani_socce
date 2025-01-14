import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LearnMore from "./LearnMore";

const containerStyles = {
  height: "100vh",
  height: {
    xs: "90vh",
  },
  width: "100vw",
  padding: "50px",
  padding: {
    xs: "0",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const style = {
  ".trailer": {
    flex: "1",
    article: {
      aspectRatio: "16/9",
      width: {
        xs: "310px",
        sm: "450px",
        lg: "400px",
      },
    },
  },
  ".content": {
    flex: "1",
    h1: {
      padding: "20px 0",
      textAlign: {
        lg: "left",
        sm: "center",
        xs: "center",
      },
      fontSize: {
        lg: "48px",
        sm: "32px",
        xs: "32px",
      },
    },
    p: {
      display: "inline-block",
      lineHeight: "1.3",
      height: "auto",
      minHeight: "150px",
      maxWidth: "500px",
      textAlign: "justify",
    },
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80vw",
  gap: "30px",
  margin: "20px",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    lg: "row",
  },
};

export default function HomePageAbout() {
  return (
    <AnimatePresence>
      <Box id="about" sx={containerStyles}>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          exit={{ y: 1000 }}
          transition={{ duration: 0 }}
        >
          <Box sx={style}>
            <Box className="content">
              <Typography className="flux" variant="h1">
                UDBHABANI
              </Typography>
              <Typography variant="p">
                Welcome to Udbhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department, this technical fest is a celebration of creativity, ingenuity, and cutting-edge advancements in the realm of civil infrastructure. Udhabhabani, derived from the Sanskrit words &quot;Udhabha&quot; meaning construction and &quot;Bani&quot; meaning creation, encapsulates the essence of our event - a platform where budding engineers come together to showcase their prowess in building the future. With a rich tapestry of competitions, workshops, seminars, and exhibitions, Udhabhabani promises to be an immersive experience for participants and attendees alike.
                So, no matter where you come from, we will make sure you add a feather to your cap on the way back.
              </Typography>
              <LearnMore link={"about"} />
            </Box>
            <Box className="trailer center1">
              <LiteYouTubeEmbed id="Y9VOzNnr8aY" />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </AnimatePresence>
  );
}
