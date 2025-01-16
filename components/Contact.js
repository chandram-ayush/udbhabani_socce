import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import Link from "next/link";
import React from 'react';


const styles = {
  width: "90vw",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(8,1fr)",
      sm: "repeat(4,1fr)",
      xs: "repeat(2,1fr)",
    },
    flexDirection: "row",
    gap: "0 40px",
    a: {
      fontSize: "20px",
      textDecoration: "none",
      color: "white",
      fontWeight: "400",
      margin: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    },
    pl: "20px",
  },
  ".icons": {
    fontSize: "100px",
    height: "100px",
    overflowY: "hidden",
    "button svg": {
      filter: "opacity(0.6)",
      margin: "15px",
      margin: {
        xs: "5px",
      },
      ":hover": {
        filter: "opacity(1)",
      },
      fontSize: "30px",
    },
  },
  ".terms p": {
    mt: "5px",
    mb: "40px",
  },
};

const CStyle = {
  display: "block",
  width: "100%",
  margin: "0 auto",
  fontSize: "16px",
  color: "#ccc",
  textAlign: "center",
};

export default function Contact() {
  return (
    <Box
      className="center1"
      sx={{
        background: "linear-gradient(transparent,#ffffff1a)",
        width: "100%",
      }}
    >
      <hr
        style={{
          width: "70%",
          height: "1px",
          borderTop: "solid 1px #555",
          margin: "40px 0",
        }}
      ></hr>
      <Box sx={styles} className="center1">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ marginBottom: "25px" }}>
            Indian Institute of Engineering Science and Technology, Shibpur
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "block",
              width: { lg: "60%", sm: "70%", xs: "80%" },
              margin: "0 auto",
              fontSize: "16px",
              color: "#ccc",
            }}
          >
            Welcome to Udhabhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            marginTop: "30px",
            flexDirection: { sm: "row", xs: "column" },
            marginBottom: { lg: "0", sm: "20px", xs: "0" },
            gap:"10px",
          }}
        >
          <Box>
            <Typography variant="p" sx={CStyle}>
              Dheeraj Gaur (Secretary)
            </Typography>
            <Typography variant="p" sx={CStyle}>
              +91 9828430754
            </Typography>
            {/*<Typography variant="p" sx={CStyle}>
              abc (Coordiantor)
            </Typography>
            <Typography variant="p" sx={CStyle}>
              +91 93694664
            </Typography>*/}
          </Box>
          <Box className=" center2">
            <IconButton
              onClick={(event) =>
                (window.location.href = "https://www.facebook.com/SOCCEIIESTS?mibextid=ZbWKwL")
              }
            >
              <FacebookIcon className="transform transition duration-100 hover:scale-110 ease-in-out" />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/company/socce-iiest-shibpur/")
              }
            >
              <LinkedInIcon className="transform transition duration-100 hover:scale-110 ease-in-out" />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.instagram.com/socce.iiests?igsh=MXJoZDR0emo5ZmhsMQ==")
              }
            >
              <InstagramIcon className="transform transition duration-100 hover:scale-110 ease-in-out" />
            </IconButton>
            {/*<IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.youtube.com/@smeiiests7235")
              }
            >
              <YouTubeIcon className="transform transition duration-100 hover:scale-110 ease-in-out" />
            </IconButton>*/}
          </Box>
        </Box>

        <Box className="terms center1 ">
          <Link
            href="/home"
            className="border-b border-gray-500 cursor-pointer "
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Meet the team
          </Link>

          <em style={{ margin: "10px 0 20px 0", textAlign: "center" }}>
            Copyright © 2024 - All rights reserved by Udhabhabani
          </em>
        </Box>
      </Box>
    </Box>
  );
}
