import React from 'react';
import { useState } from "react";
import { Box } from "@mui/system";
import Image from "next/image";

const styles = {
  height: "400px",
  width: "400px",
  position: "relative", // Make the container relative
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#131419",
  img: {
    margin: "8px",
    borderRadius: "50%",
  },
  ".hoverContent": {
    position: "absolute", // Positioning for overlay
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay background
  },
  ".hoverContent.show": {
    opacity: 1,
  },
};

const ActivityCard = ({ person }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(true);
  const offHover = () => setHover(false);

  return (
    <Box
      style={styles}
      className="pcard shadow border bg-gray-800 border-gray-700 text-white"
      onMouseEnter={onHover}
      onMouseLeave={offHover}
    >
      <Image
        className="profile"
        src={`/images/${person.imgname}`}
        alt="event"
        height="200"
        width="300"
      />
      <Box className="title">
        <h5 className="text-xl py-1 font-medium text-gray-50">
          {person.name}
        </h5>
      </Box>
      <Box className={`hoverContent ${hover ? "show" : ""}`}>
        <a href={person.registrationLink} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="mt-2 font-medium rounded-lg text-sm px-5 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Details
          </button>
        </a>
      </Box>
      
    </Box>
  );
};

export default ActivityCard;
