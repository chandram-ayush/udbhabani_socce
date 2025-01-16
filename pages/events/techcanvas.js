import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from '@mui/material';
import React from 'react';


import Contact from "../../components/Contact";
import Image from "next/image";
export default function TechcanvasPage() {
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
            Tech-Canvas
          </h2>
          
          <p className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
          “TECH-CANVAS” event is set to be a visual treat. Participants will design and showcase posters focused on specified domains within civil engineering, blending creativity with technical expertise. This event encourages students to present complex engineering concepts in a clear, visually compelling way. It's an exciting opportunity to engage with the latest trends, innovations, and research in civil engineering. With each poster telling a unique story, this event promises to inspire, educate, and spark meaningful discussions among future engineers.
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
                  (window.location.href = "https://forms.gle/qJ4E8")
                }
              >
                Register Now
              </button>
            </div>
          </div>
        <div className="flex items-center md:justify-start justify-center md:order-2 order-1">
          <img
            className="md:w-2/3 w-3/4  "
            src="/images/comingsoon.png"
            alt="Seminar"
          />
        </div>
      </div>

      <Contact />
    </Box>
  );
}
