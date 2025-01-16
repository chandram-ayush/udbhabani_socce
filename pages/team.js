import { Divider, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import React from 'react';
import { Box } from "@mui/system";
import { useState } from "react";
import Contact from "../components/Contact";
import ContactCard from "../components/ContactCard";

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
  const classes = {
    root: {
      justifyContent: "center",
    },
    scroller: {
      flexGrow: "0",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    margin: "50px 0",
    h1: {
      margin: "50px 0",
      fontSize: "48px",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    ".tabs": {
      width: "1000px",
      maxWidth: "95vw",
      mb: "100px",
      ".tab": {
        margin: "10px",
        fontSize: {
          lg: "16px",
          md: "16px",
          sm: "12px",
          xs: "12px",
        },
      },
      ".Mui-selected": {
        backgroundColor: "#01658d",
        border: "0px",
        borderRadius: "10px",
        color: "white",
      },
    },
  };
  const publicity_person = {
    person1: {
      name: "Rajneesh Pathak",
      phone: "rajneeshpathakskn@gmail.com",
      post: "Sponsorship Head",
      imgname: "",
      insta: "https://www.instagram.com/rj_phoenix_dion?igsh=cnllNDI0andydnR2",
      link: "https://www.linkedin.com/in/rj-chats?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Manish Kumar Bind",
      phone: "2022ceb110.manish@students.iiests.ac.in",
      post: "Sponsorship Executive",
      imgname: "IMG-20231216-WA00",
      insta: "https://www.instagram.com/bind.manishkumar?igsh=c2pnYjgwemxpbnh4",
      link: "https://www.linkedin.com/in/manish-kumar-bind -969877256",
    },
    person3: {
      name: "Sohom Chakraborty",
      phone: "2023ceb039.sohom@students.iiests.ac.in",
      post: "Sponsorship Executive",
      imgname: "Screenshot_2024-01-11-00-23-4B074 SABAVATH_AKASH RAM NAIK.jpg",
      insta: "sohom_073",
      link: "https://www.linkedin.com/in/sohom-chakraborty-173566314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
     
  };
  const finance_person = {
    person1: {
      name: "Amit Sharma",
      phone: "amitsharma@gmail.com",
      post: "Finance Head",
      imgname: "amit_sharma.jpg",
      insta: "https://www.instagram.com/amit_finance?igsh=example",
      link: "https://www.linkedin.com/in/amit-sharma",
    },
    person2: {
      name: "Kiran Verma",
      phone: "kiranverma@finance.com",
      post: "Finance Executive",
      imgname: "kiran_verma.jpg",
      insta: "https://www.instagram.com/kiran_finance",
      link: "https://www.linkedin.com/in/kiran-verma",
    },
  };
  
  const event_person = {
    person1: {
      name: "Twameka Sinha ",
      phone: "priya.events@gmail.com",
      post: "Event Management Head",
      imgname: "priya_singh.jpg",
      insta: "t.w.a.m.e.k.a",
      link: "https://www.linkedin.com/in/twameka-sinha-43b78117b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Hitesh Choumal",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "rohit_kumar.jpg",
      insta: "@hitesh_choumal",
      link: "https://www.linkedin.com/in/hitesh-choumal-aa6b63258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Aman Raj",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "rohit_kumar.jpg",
      insta: "aman.rnxj",
      link: "https://www.linkedin.com/in/amanrajjj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Shubham Verma",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "rohit_kumar.jpg",
      insta: "@shubham4v",
      link: "https://www.linkedin.com/in/shubham-v-b83aaa289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  
  const hospitality_person = {
    person1: {
      name: "Ayush Chandram",
      phone: "@gmail.com",
      post: "Hospitality Head",
      imgname: "anjali_mehra.jpg",
      insta: "https://www.instagram.com/ayushchandram?igsh=MWsweGNueG9uenZ6ZQ==",
      link: "https://www.linkedin.com/in/ayush-chandram/",
    },
    person2: {
      name: "Shreyasi Dey",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "sumit_gupta.jpg",
      insta: "https://www.instagram.com/stellarqueen_lauren?igsh=MTFtamlpMmhvM3c5bw==",
      link: "https://www.linkedin.com/in/shreyasi-dey-56404b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Debaditya Nath",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "sumit_gupta.jpg",
      insta: "silverrgun16",
      link: "https://www.linkedin.com/in/debaditya-nath-9317b1278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Tulsi Sadhukhan",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "sumit_gupta.jpg",
      insta: "_t.u.l.s.i__",
      link: "https://www.linkedin.com/in/tulsi-sadhukhan-ba3ab72a6",
    },
  };
  
  const food_person = {
    person1: {
      name: "Rahul Desai",
      phone: "rahul.food@gmail.com",
      post: "Food Committee Head",
      imgname: "rahul_desai.jpg",
      insta: "https://www.instagram.com/rahul_food",
      link: "https://www.linkedin.com/in/rahul-desai",
    },
    person2: {
      name: "Pooja Patel",
      phone: "pooja.food@gmail.com",
      post: "Food Coordinator",
      imgname: "pooja_patel.jpg",
      insta: "https://www.instagram.com/pooja_food",
      link: "https://www.linkedin.com/in/pooja-patel",
    },
  };
  
  const souvenir_person = {
    person1: {
      name: "Vikas Kumar",
      phone: "vikas.souvenir@gmail.com",
      post: "Souvenir Head",
      imgname: "vikas_kumar.jpg",
      insta: "https://www.instagram.com/vikas_souvenir",
      link: "https://www.linkedin.com/in/vikas-kumar",
    },
    person2: {
      name: "Neha Rani",
      phone: "neha.souvenir@gmail.com",
      post: "Souvenir Coordinator",
      imgname: "neha_rani.jpg",
      insta: "https://www.instagram.com/neha_souvenir",
      link: "https://www.linkedin.com/in/neha-rani",
    },
  };
  
  


  return (
    <>
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Our Team</Typography>
        <br />
        <Box className="tabs">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Finance Committee" />
            <Tab className="tab" label="Event Management Committee" />
            <Tab className="tab" label="Travel and Hospitality Committee" />
            <Tab className="tab" label="Food Committee" />
            <Tab className="tab" label="Publicity and Fundraising Committee" />
            <Tab className="tab" label="Publication of the Souvenir Committee" />
          </Tabs>
        </Box>
  
        <TabPanel value={value} index={0} className="contactCards">
          {/* Finance Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={finance_person.person1} />
            {/* Add more finance team members as needed */}
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={1} className="contactCards">
          {/* Event Management Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <ContactCard person={event_person.person3} />
            <ContactCard person={event_person.person4} />
            {/* Add more event management team members as needed */}
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={2} className="contactCards">
          {/* Travel and Hospitality Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={hospitality_person.person1} />
            <ContactCard person={hospitality_person.person2} />
            <ContactCard person={hospitality_person.person3} />
            <ContactCard person={hospitality_person.person4} />
            {/* Add more travel and hospitality team members */}
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={3} className="contactCards">
          {/* Food Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={food_person.person1} />
            <ContactCard person={food_person.person2} />
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={4} className="contactCards">
          {/* Publicity and Fundraising Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={publicity_person.person1} />
            <ContactCard person={publicity_person.person2} />
            <ContactCard person={publicity_person.person3} />
            {/* Add more publicity and fundraising team members */}
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={5} className="contactCards">
          {/* Publication of the Souvenir Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={souvenir_person.person1} />
            <ContactCard person={souvenir_person.person2} />
          </Box>
        </TabPanel>
      </Box>
      <Contact />
    </>
  );
};  