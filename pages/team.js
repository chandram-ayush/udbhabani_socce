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
      imgname: "Rajneesh.jpg",
      insta: "https://www.instagram.com/rj_phoenix_dion?igsh=cnllNDI0andydnR2",
      link: "https://www.linkedin.com/in/rj-chats?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Manish Kumar Bind",
      phone: "2022ceb110.manish@students.iiests.ac.in",
      post: "Sponsorship Executive",
      imgname: "MANISH.jpg",
      insta: "https://www.instagram.com/bind.manishkumar?igsh=c2pnYjgwemxpbnh4",
      link: "https://www.linkedin.com/in/manish-kumar-bind -969877256",
    },
    person3: {
      name: "Sohom Chakraborty",
      phone: "2023ceb039.sohom@students.iiests.ac.in",
      post: "Sponsorship Executive",
      imgname: "SOHOM.jpg",
      insta: "sohom_073",
      link: "https://www.linkedin.com/in/sohom-chakraborty-173566314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Dubakula Nithin Kumar ",
      phone: "2023ac.in",
      post: "Sponsorship Executive",
      imgname: "DUBAKULA.jpg",
      insta: "sohom_073",
      link: "https://www.linkedin.com/in/dubakula-nithin-kumar-6234a7292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
     
  };
  const finance_person = {
    person1: {
      name: "Rajdeep Barai",
      phone: "amitsharma@gmail.com",
      post: "Finance Head",
      imgname: "Rajdeep2.jpeg",
      insta: "https://www.instagram.com",
      link: "https://www.linkedin.com/in/barairajdeep01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Kaushal Gupta",
      phone: "amitsharma@gmail.com",
      post: "Finance Head",
      imgname: "kaushal.jpeg",
      insta: "https://www.instagram.com",
      link: "https://www.linkedin.com/in/kaushal-kumar-54aa5225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Aditya Raj Verma",
      phone: "kiranverma@finance.com",
      post: "Finance Executive",
      imgname: "ADITYA.jpg",
      insta: "https://www.instagram.com/i_amadityarajverma",
      link: "https://www.linkedin.com/in/iamadityarajverma",
    },
    person4: {
      name: "Ayush Gupta",
      phone: "kiranverma@finance.com",
      post: "Finance Executive",
      imgname: "Ayush.jpg",
      insta: "https://www.instagram.com/_.ayush__.15",
      link: "https://www.linkedin.com/in/ayush-gupta-746b6331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  
  const event_person = {
    person1: {
      name: "Twameka Sinha ",
      phone: "priya.events@gmail.com",
      post: "Event Management Head",
      imgname: "Twameka.jpg",
      insta: "t.w.a.m.e.k.a",
      link: "https://www.linkedin.com/in/twameka-sinha-43b78117b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Hitesh Choumal",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "Hitesh.jpg",
      insta: "@hitesh_choumal",
      link: "https://www.linkedin.com/in/hitesh-choumal-aa6b63258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Aman Raj",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "AMAN.jpg",
      insta: "aman.rnxj",
      link: "https://www.linkedin.com/in/amanrajjj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Shubham Verma",
      phone: "rohit.events@gmail.com",
      post: "Event Management Executive",
      imgname: "Shubham.jpg",
      insta: "@shubham4v",
      link: "https://www.linkedin.com/in/shubham-v-b83aaa289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  
  const hospitality_person = {
    person1: {
      name: "Ayush Chandram",
      phone: "@gmail.com",
      post: "Hospitality Head",
      imgname: "Ayush_chandram_photo1.jpeg",
      insta: "https://www.instagram.com/ayushchandram?igsh=MWsweGNueG9uenZ6ZQ==",
      link: "https://www.linkedin.com/in/ayush-chandram/",
    },
    person2: {
      name: "Shreyasi Dey",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "Shreyasi.jpg",
      insta: "https://www.instagram.com/stellarqueen_lauren?igsh=MTFtamlpMmhvM3c5bw==",
      link: "https://www.linkedin.com/in/shreyasi-dey-56404b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Debaditya Nath",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "Debaditya.jpg",
      insta: "silverrgun16",
      link: "https://www.linkedin.com/in/debaditya-nath-9317b1278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Tulsi Sadhukhan",
      phone: "sumit.hospitality@gmail.com",
      post: "Hospitality Coordinator",
      imgname: "TULSI.jpg",
      insta: "_t.u.l.s.i__",
      link: "https://www.linkedin.com/in/tulsi-sadhukhan-ba3ab72a6",
    },
  };
  
  const food_person = {
    person1: {
      name: "Awinash Gupta",
      phone: "rahul.food@gmail.com",
      post: "Food Committee Head",
      imgname: "Awinash.jpg",
      insta: "https://www.instagram.com/",
      link: "https://www.linkedin.com/in/awinash-gupta-7b79a823b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Sumaiya kulsum ",
      phone: "rahul.food@gmail.com",
      post: "Food Coordinator",
      imgname: "SUMAIYA.jpg",
      insta: "https://www.instagram.com/",
      link: "https://www.linkedin.com/in/sumaiya-kulsum-b73b30264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Abhishek Kumar",
      phone: "pooja.food@gmail.com",
      post: "Food Coordinator",
      imgname: "ABHISHEK.jpg",
      insta: "un.filtered.abhi",
      link: "https://www.linkedin.com/in/abhishek-kumar-9bbb492a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Erikilla Ashish",
      phone: "pooja.food@gmail.com",
      post: "Food Coordinator",
      imgname: "Erikilla.jpg",
      insta: "ashish_rocky_11",
      link: "https://www.linkedin.com/in/erikilla-ashish-073a34289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  
  const souvenir_person = {
    person1: {
      name: "Yashwika Sanjay",
      phone: "vikas.souvenir@gmail.com",
      post: "Souvenir Head",
      imgname: "Yashwika.jpeg",
      insta: "https://www.instagram.com/yashwika_10",
      link: "https://www.linkedin.com/in/yashwika-sanjay-141639224/",
    },
    person2: {
      name: "Yogesh Mangawa",
      phone: "neha.souvenir@gmail.com",
      post: "Souvenir Coordinator",
      imgname: "Yogesh.jpg",
      insta: "yogesh_mangawa",
      link: "https://www.linkedin.com/in/yogeshmangawa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Payal",
      phone: "neha.souvenir@gmail.com",
      post: "Souvenir Coordinator",
      imgname: "Payal.jpg",
      insta: "_ingle_93",
      link: "https://www.linkedin.com/in/PAYAL ",
    },
    person4: {
      name: "Hardik Bansal",
      phone: "neha.souvenir@gmail.com",
      post: "Souvenir Coordinator",
      imgname: "Hardik.jpg",
      insta: "_hardik_bansal.iiest",
      link: "https://www.linkedin.com/in/hardikbansalcivil",
    },
  };
  
  


  return (
    <>
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Our Team</Typography>
        <br />
        <Box className="tabs">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Event Management Committee" />
            <Tab className="tab" label="Finance Committee" />
            <Tab className="tab" label="Travel and Hospitality Committee" />
            <Tab className="tab" label="Food Committee" />
            <Tab className="tab" label="Publicity and Fundraising Committee" />
            <Tab className="tab" label="Publication of the Souvenir Committee" />
          </Tabs>
        </Box>
  
        
  
        <TabPanel value={value} index={0} className="contactCards">
          {/* Event Management Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <ContactCard person={event_person.person3} />
            <ContactCard person={event_person.person4} />
            {/* Add more event management team members as needed */}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1} className="contactCards">
          {/* Finance Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={finance_person.person1} />
            <ContactCard person={finance_person.person2} />
            <ContactCard person={finance_person.person3} />
            <ContactCard person={finance_person.person4} />
            {/* Add more finance team members as needed */}
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
            <ContactCard person={food_person.person3} />
            <ContactCard person={food_person.person4} />
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={4} className="contactCards">
          {/* Publicity and Fundraising Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={publicity_person.person1} />
            <ContactCard person={publicity_person.person2} />
            <ContactCard person={publicity_person.person3} />
            <ContactCard person={publicity_person.person4} />
            {/* Add more publicity and fundraising team members */}
          </Box>
        </TabPanel>
  
        <TabPanel value={value} index={5} className="contactCards">
          {/* Publication of the Souvenir Committee */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={souvenir_person.person1} />
            <ContactCard person={souvenir_person.person2} />
            <ContactCard person={souvenir_person.person3} />
            <ContactCard person={souvenir_person.person4} />
          </Box>
        </TabPanel>
      </Box>
      <Contact />
    </>
  );
};  