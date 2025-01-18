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
            Build Vision
          </h2>
          
          <p className="text-left px-3 md:w-5/6 leading-7 md:px-0 ">
            &ldquo;BUILD VISION&rdquo; event is an exciting two-round challenge that combines both competition and learning. Participants will be tasked with designing and analyzing given structural models using STADD Pro, a powerful tool for structural analysis and design. The competition tests your skills in creating optimized, efficient designs while ensuring structural integrity. Alongside the competition, a comprehensive workshop will be conducted, helping participants master STADD Pro&rsquo;s features and techniques. This unique blend of learning and hands-on application provides students with valuable insights into real-world engineering challenges, sharpening both their design and analytical skills.
          </p>

            
            <span className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
              
            Venue:
            Dept. of Civil Engg.
            </span>
            <div className="flex justify-center text-left px-3 md:w-5/6 leading-7  md:px-0 ">
              <button
                type="button"
                className="mt-2 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/qC8FE8")
                }
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="flex items-center md:justify-start justify-center md:order-2 order-1">
          <Image
            className="md:w-2/3 w-3/4"
            src="/images/comingsoon.png"
            alt="Seminar"
            width={600} // You can adjust this according to your desired size
            height={400} // Adjust this according to your layout
            style={{
              filter: "drop-shadow(16px 16px 10px black)", // Applying the filter from your CSS
            }}
          />
        </div>
      </div>

      <Contact />
    </Box>
  );
}
