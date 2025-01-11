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
    handleResize();

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
            Welcome to Udhabhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department, this technical fest is a celebration of creativity, ingenuity, and cutting-edge advancements in the realm of civil infrastructure. Udhabhabani, derived from the Sanskrit words &quot;Udhabha&quot; meaning construction and &quot;Bani&quot; meaning creation, encapsulates the essence of our event - a platform where budding engineers come together to showcase their prowess in building the future. With a rich tapestry of competitions, workshops, seminars, and exhibitions, Udhabhabani promises to be an immersive experience for participants and attendees alike.
            <br />
            So, no matter where you come from, we will make sure you add a feather to your cap on the way back.
          </Typography>
        </Box>
        <Image src="/images/iiestlogon.png" height="300" width="400" alt="SOCCE" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
            IIEST Shibpur (erstwhile BE college) was established in the year 1856. The Institute located at the bank of the Ganges, bestowed upon with a lush green and cheerful aura, is ranked 35th in NIRF rankings. An institute as old as time holds a rich and diverse history and was one of the pioneer institutes for engineering in India. Apart from diversities in its history, the institute has a versatile academic curriculum spanning from undergraduate to postgraduate courses equipped with academia determined to become engineers, scientists, entrepreneurs, and above all assets to society, supported by esteemed faculties in turning all the aspirations into realities, thus making a diverse network of alumni throughout the eras. This vast academic curriculum is rejuvenated by a bundle of co-curricular and extra-curricular activities provided by the various societies of the institute spanning from action-packed sports societies to strings of words airing in the literary societies and the fresh moves of reflexobeta, bounded together by the melodies of euphony. The spirit of science, tech, and culture is charged up by events and fests organized by the departments of the institute, and neither the department of civil engineering nor its academia fall short in boosting the same. The Department of Civil Engineering, the first step of this institute in this journey of immemorial steps, puts deliberate steps to make the journey filled with fun and learning and so is complemented by the Udbhabani, a Technical fest organized by the Society of Civil Engineers.
          </Typography>
        </Box>
        <Image src="/images/soccelogo1.png" height="350" width="590" alt="SOCCE" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
            Within the historic walls of IIEST Shibpur, the Department of Civil Engineering, founded in May 1856 alongside the institute, stands as a beacon of innovation. As the oldest branch within the institution, it boasts a rich legacy rooted in societal impact and academic excellence. From pioneering research in sustainable infrastructure to resilient urban planning, students and faculty push boundaries to address contemporary challenges. Fueling this drive is the Society of Civil Engineers (SOCCE), orchestrating the annual UDBAHBANI event—a testament to student camaraderie and talent. Being the oldest division of IIEST Shibpur, offering both undergraduate and graduate degrees, it conducts research in various fields including transportation, water resources, environmental, geotechnical, and structural engineering. The department has a reputation for academic brilliance and societal significance.
          </Typography>
        </Box>
      </Box>

      
      <Contact />
    </Box>
  );
}
