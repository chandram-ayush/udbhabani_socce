import { Box, Typography, Tab, Tabs } from "@mui/material";
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const activity = {
    person1: {
      name: "Convo Clash",
      imgname: "20.png",
      registrationLink: "/events/debate",
         
    },
      person2: {
        name: "Bridge Craft",
        imgname: "17.png",
        registrationLink: "/events/bridgecraft",
        
      },
      person3: {
        name: "Go Green",
        imgname: "18.png",
        registrationLink: "/events/civinar",
        
      },
      person4: {
        name: "CAD Catalyst",
        imgname: "16.png",
        registrationLink: "/events/catalyst",
        
      },
      person5: {
        name: "Brug IT",
        imgname:"19.png",
        registrationLink: "/events/brug",
        
      },
      person6: {
        name: "Inforace",
        imgname:"21.png",
          registrationLink: "/events/quiz",
        
      },
      person7: {
        name: "Surveryor's Quest",
        imgname: "23.png",
        registrationLink: "/events/quest",
        
      },
      person8: {
        name: "Bgmi",
        imgname: "22.png",
        registrationLink: "/events/bgmi",
        
      },
      person9: {
        name: "Valorant",
        imgname: "22.png",
        registrationLink: "/events/valorant",
        
      },
      person10: {
        name: "Fifa",
        imgname: "22.png",
        registrationLink: "https://forms.gle/qJ4xj4E4FgC8FE8",
        
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
      <Contact />
    </>
  );
}

