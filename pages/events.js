import React from 'react';
import { Box, Typography, Tab, Tabs, useTheme } from "@mui/material";
import { useState } from "react";
import Contact from "../components/Contact";
import ExampleCarousel from "../components/ExampleCarousel";
import ActivityCard from "../components/AcitivtyCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function TeamPage() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const activity = {
    person1: {
      name: "Brainwave",
      imgname: "21.png",
      registrationLink: "/events/brainwave",
         
    },
      person2: {
        name: "Tech Canvas",
        imgname: "24.png",
        registrationLink: "/events/techcanvas",
        
      },
      person3: {
        name: "Cad Clash",
        imgname: "25.png",
        registrationLink: "/events/cadclash",
        
      },
      person4: {
        name: "Build Vision",
        imgname: "16.png",
        registrationLink: "/events/buildvision",
        
      },
      person5: {
        name: "Archlens",
        imgname:"19.png",
        registrationLink: "/events/archlens",
        
      },
      person6: {
        name: "Bridge Masters",
        imgname:"17.png",
          registrationLink: "/events/bridgemaster",
        
      },
      person7: {
        name: "Walk-in",
        imgname: "23.png",
        registrationLink: "/events/walkin",
        
      },
      person8: {
        name: "Elevate City",
        imgname: "18.png",
        registrationLink: "/events/elevatecity",
        
      },
      person9: {
        name: "Pitch Perfect",
        imgname: "20.png",
        registrationLink: "/events/pitchperfect",
        
      },
      
      
  };

  return (
    <>
    
      {/* Apply background image using an <img> tag */}
      <Box sx={{ backgroundColor: "#000000", minHeight: "100vh" }}>
        <Box sx={{ margin: "50px 0", textAlign: "center" }}>
          <div style={{ paddingTop: "100px" }}>
            <Typography variant="h1">Events</Typography>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography variant="h4" gutterBottom>

            </Typography>
            <Box style={{ width: "100%", margin: "auto" }}>
              <Tabs value={value} onChange={handleChange}>
                {/* <Tab label="Events" /> */}
              </Tabs>
              <TabPanel value={value} index={0}>
                {/* Event Team */}
                <ExampleCarousel>
                  {Object.keys(activity).map((key) => (
                    <ActivityCard key={key} person={activity[key]} />
                  ))}
                </ExampleCarousel>
              </TabPanel>
            </Box>
          </Box>
        </Box>
        </Box>
      
    </>
  );
}

