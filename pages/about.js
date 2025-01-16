import React from 'react';
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../components/ContactCard";
import CarouselComp1 from "../components/Carouselcomp1.js";
import Contact from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageListComp from "../components/ImageListComp";
import Divider2 from "../components/Divider2";

export default function AboutPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const theme = useTheme();
  const videoId = "H5w5-VRoaSo";

  const styles = {
    width: "100vw",
    ".videos": {
      width: "100vw",
      ".overlay": {
        position: "absolute",
        backgroundColor: "black",
        opacity: "0.5",
        zIndex: "1",
        width: "100vw",
        height: "100vh",
      },
      "#trailer": {
        width: "100%",
        height: "auto",
        objectFit: "contain",
        [theme.breakpoints.down("md")]: {
          height: "40vh",
        },
      },
      filter: "brightness(80%)",
    },
    ".videoContainer": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        padding: "20px",
      },
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    ".content": {
      maxWidth: "1000px",
      padding: "20px",
      p: {
        margin: "30px",
      },
      ".date": {
        textAlign: "center",
        margin: "30px 0",
        fontSize: "32px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "24px",
          margin: "5px auto",
        },
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".aboutUdbhabani, .aboutDept": {
      margin: "50px 0",
      [theme.breakpoints.down("md")]: {
        marginTop: "20px",
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play().catch((e) => console.log(e));
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    if (window.innerWidth > 900) {
      videoRef.current?.play().catch((e) => console.log(e));
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={styles} className="center1">
      <Box className="videoContainer">
        <Box className="videos">
          <video ref={videoRef} muted={true} playsInline id="trailer" autoPlay loop>
            <source src="images/teaser2.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box style={{ width: "100%", maxWidth: "800px", aspectRatio: "16/9", margin: "0 auto" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            frameBorder="0"
            allowFullScreen
            title="My YouTube Video"
          />
        </Box>
      </Box>
      <Box>
        {/*<Typography variant="h2" style={{ fontFamily: "Rowdies", margin: "30px", textAlign: "center" }}>
          SOME MOMENTS OF PREVIOUS EDITIONS OF Udhbhabani
        </Typography>*/}
        <CarouselComp1 />
      </Box>
      <Box className="aboutUdbhabani center1">
        <Image src="/images/udhlogo.png" height="1750" width="750" alt="Socce" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
          The Society of Civil Engineers (SOCCE) proudly organizes UDBHABANI, the annual
 technical fest of the Department of Civil Engineering, IIEST Shibpur. Returning in 2025 for
 its fourth edition, UDBHABANI—literally meaning "innovation"—aims to unleash the
 sharp intellect and creative potential of budding civil engineers. The fest provides a
 dynamic platform for students across the country to gather, exchange ideas, and
 showcase their technical expertise in various domains of Civil Engineering. The theme for
 4th edition is सजन - The Manifestation.
            <br />
            <br/>
            Vision: 
            To establish UDBHABANI as the largest and most impactful technical fest in the eastern region of India,
             serving as a hub for technical events, competitions and interactions, uniting all stakeholders of civil engineering,
               thus fostering advancements in civil engineering with enthusiasm.
            <br/>
            <br/>
            Objective:
            To organize a multifaceted technical festival of the department, that includes activities and events aiming to prepare students for real-world challenges,
             foster innovation, and provide an engaging and enriching experience beyond academics.
            <br/>
            <br/>
            Mision:
            To create a dynamic platform that integrates technical expertise, practical application,
             competitions and events through collaborative efforts of students and faculty,
             celebrating the  legacy and growth of the prestigious department
          </Typography>
        </Box>
        <Image src="/images/iiestlogon.png" height="300" width="400" alt="SOCCE" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
          The Indian Institute of Engineering Science and Technology, Shibpur (IIESTS),
 stands as India's second-oldest engineering institution, with a legacy dating back
 to its establishment on November 24, 1856. Formerly known as Bengal
 Engineering College, it was granted Deemed University status in 1992 and evolved
 into a full-fledged university in 2004 under the name Bengal Engineering and
 Science University. Recognizing its remarkable contributions to education and
 research, the Indian government designated it as an Institute of National
 Importance, renaming it IIEST, Shibpur in 2014.
 In the 2024 NIRF Rankings, IIEST is proudly listed among the top 50 institutions in
 India and holds a prestigious 401–450 position in the QS Asia Rankings 2023.
 Renowned for its robust global alumni network, the institute has made significant
 contributions across research, engineering, and science, cementing its reputation
 as a pioneer in shaping India’s scientific and technological future.
          </Typography>
        </Box>
        <Image src="/images/soccelogo1.png" height="350" width="590" alt="SOCCE" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
          Within the historic walls of IIEST Shibpur, the Department of Civil Engineering,
 established in May 1856 alongside the institute, stands as a beacon of innovation.
 As the oldest branch of the institution, it boasts a rich heritage rooted in social
 impact and academic excellence. Since its inception, the department has
 consistently contributed to nation-building, sustainable development, and
 pioneering research.  The department celebrates its dynamic spirit by organizing
 UDBHABANI, an annual event showcasing the camaraderie and talent of the  
students.
          </Typography>
        </Box>
      </Box>

      
      <Contact />
    </Box>
  );
}
