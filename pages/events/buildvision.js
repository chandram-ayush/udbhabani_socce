import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from '@mui/material';
import React from 'react';


import Contact from "../../components/Contact";
import Image from "next/image";
export default function BuildvisionPage() {
  const theme = useTheme();

  const btnStyle = {
    border: "solid #1E3A8A 2px",
    borderRadius: "10px",
    padding: "5px 20px",
    color: "#BFDBFE",
    ":hover": {
      backgroundColor: "#00A7E7",
      color: "white",
    },
  };

  const styles = {
    ".Robo .img img": {
      width: "400px !important",
    },
    ".VR, .EV, .Robo": {
      width: "100vw",
      minHeight: "100vh",
      overflowY: "hidden",
      display: "grid",
      [theme.breakpoints.down("md")]: {
        placeItems: "center",
      },
      gridTemplateColumns: "1fr 1fr",
      ">*": {
        [theme.breakpoints.down("md")]: {
          gridColumn: "span 2",
        },
      },
      ".img": {
        width: "300px",
        minHeight: "400px",
        img: {
          width: {
            lg: "600px",
            md: "600px",
            sm: "500px",
            xs: "500px",
          },
          filter: "drop-shadow(16px 16px 10px black)",
        },
      },
      ".content": {
        width: "550px",
        maxWidth: "90vw",
        margin: "50px 0",
        textAlign: "justify",
        h2: {
          margin: "30px 0",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      ".EV .content": {
        order: "-1",
        marginLeft: "100px !Important",
      },
    },
    ".Robo .img img": {
      width: "300px !important",
    },
  };

  return (
    <Box sx={styles} style={{ paddingTop: "50px" }}>
       <div className="grid md:grid-cols-2 md:gap-8 gap-1 md:py-20 py-10">
        <div className=" flex flex-col justify-center  lg:items-end items-center text-lg font-normal text-gray-300 mb-4 md:order-1 order-2">
          <h2 className="text-blue-400 md:text-3xl font-bold text-2xl md:text-left self-center md:ml-16  text-center md-font-extrabold mb-2">
            Robotics Seminar
          </h2>
          
          <p className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
            Calling all tech enthusiasts and future innovators! We&apos;re
            thrilled to announce an exclusive seminar and workshop by Blackbird
            Robotix, covering everything from manual robotics to UAV
            development!
            <br></br>
            
            <br></br>
            Join us for an exciting journey into the world of robotics, where
            you&apos;ll :<br></br>
            1. Learn the fundamentals of manual robotics.<br></br>
            2. Explore the realm of autonomous robotics.<br></br>
            3. Discover the thrill of combat robotics.<br></br>
            4. Dive into UAV development and unleash your creativity!<br></br>
            <br></br>
            Led by experts from Blackbird Robotix, this seminar promises to be
            an immersive experience filled with knowledge-sharing, hands-on
            learning, and endless inspiration.
            <br></br>
            <br></br>
            Whether you&apos;re a seasoned robotics enthusiast or just starting
            your journey, this is an opportunity you don&apos;t want to miss!
            <br></br>
            <br></br>
            </p>
            
            <span className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
              
              Venue:
              Conference Room, Dept. of Mechanical Engg.
            </span>
            <div className="flex justify-center text-left px-3 md:w-5/6 leading-7  md:px-0 ">
              <button
                type="button"
                className="mt-2 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/qJ4xj4E4Fx8gC8FE8")
                }
              >
                Register Now
              </button>
            </div>
          </div>
        <div className="flex items-center md:justify-start justify-center md:order-2 order-1">
          <img
            className="md:w-2/3 w-3/4  "
            src="/images/RoboticsSeminar.jpg"
            alt="Seminar"
          />
        </div>
      </div>

      <Contact />
    </Box>
  );
}
