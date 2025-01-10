import { Box } from "@mui/material";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import BubbleComponent from "../components/BubbleComponent";
import Contact from "../components/Contact";
import HomePageAbout1 from "../components/HomePageAbout1";
import LoadingComp from "../components/LoadingComp";
import { useLoading } from "../components/LoadingContext";
import MerchandiseComp from "../components/MerchandiseComp";
import VideoText from "../components/VideoText";

const styles = {
  minHeight: "100vh",
  minWidth: "100vw",
};

const containerStyles = {
  background: "url(images/grid.svg) no-repeat center",
  backgroundColor: "black",
  height: "10vh",
  height: {
    xs: "0vh",
  },
  width: "100vw",
};

const aboutContent = [
  {
    name: "Udhbhabani",
    text: "Welcome to Udhabhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department, this technical fest is a celebration of creativity, ingenuity, and cutting-edge advancements in the realm of civil infrastructure.Udhabhabani, derived from the Sanskrit words Udhabha meaning construction and Bani meaning creation, encapsulates the essence of our event - a platform where budding engineers come together to showcase their prowess in building the future. With a rich tapestry of competitions, workshops, seminars, and exhibitions, Udhabhabani promises to be an immersive experience for participants and attendees alike. So, no matter where you come from, we will make sure you add a feather to your cap on the way back.",
    link: "/about",
    img: "udhabhabani.png",
  },
  
];

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const { loading } = useLoading();

  const hideIt = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when unmounted
    };
  }, []);
 

  return (
    <Box>
      <VideoText hideIt={hideIt} />
    </Box>
  );
}
