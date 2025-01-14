import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from 'react';


export default function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [dead, setDead] = useState(false);
  const [end, setEnd] = useState(false);
  const router = useRouter();

  const deadline = "January, 30, 2025";
  const end_deadline = "February, 2, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    const endtime = Date.parse(end_deadline) - Date.now();
    if (time <= 0 && endtime >= 0) setDead(true);
    else if (endtime < 0) setEnd(true);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90vw",
    overflow: "hidden",
    div: {
      width: "100px",
      height: "100px",
      margin: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(5px)",
    },
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-20px)" },
      "100%": { transform: "translateY(0px)" },
    },
    bubbleButton: {
      display: "inline-block",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      backgroundColor: "#007bff", // Blue background
      color: "#fff", // White text
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      outline: "none",
      textAlign: "center",
      lineHeight: "200px", // Centering text vertically
      position: "relative",
      animation: "float 4s ease-in-out infinite",
      boxShadow: "0 10px 50px rgba(255, 0, 0, 0.2)",
      transition: "transform 0.3s ease",
      ":hover": {
        transform: "scale(1.1)",
      },
    },
  };

  if (dead)
    return (
      <Box>
        <Typography
          sx={{ margin: "50px", zIndex: "2", position: "relative" }}
          variant="h2"
        >
          IS LIVE NOW!
        </Typography>
      </Box>
    );
  else if (end)
    return (
      <Box>
        <Typography
          sx={{ margin: "50px", zIndex: "2", position: "relative" }}
          variant="h2"
        >
          HAS ENDED
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ margin: "2% 0" }} className="center1">
      <Box sx={styles}>
        <Box>
          <Typography variant="h2">{("0" + days).slice(-2)}</Typography>
          <Typography variant="p">days</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + hours).slice(-2)} </Typography>
          <Typography variant="p">hours</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + mins).slice(-2)} </Typography>
          <Typography variant="p">min</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + seconds).slice(-2)}</Typography>
          <Typography variant="p">sec</Typography>
        </Box>
      </Box>
      {/*<Typography
        sx={{ margin: "10px 0 20px", fontSize: "24px !important", zIndex: "2" }}
        variant="h2"
      >
        TO START
      </Typography>
      <Button
        sx={styles.bubbleButton}
        onClick={() => router.push("/home")}
      >
      <Image src="/images/udhlogo.png" height="100" width="100" alt="Socce" />
      </Button>*/}
    </Box>
  );
}
