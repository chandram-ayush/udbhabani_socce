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
  const sponsorship_person = {
    person1: {
      name: "Chandram",
      phone: "+91 6301028505",
      post: "Sponsorship Head",
      imgname: "",
      insta: "https://www.instj.a.y_",
      link: "httpsom/in/Jay R Abhimanyu",
    },
    person2: {
      name: "PriGh",
      phone: "+91 8777476875",
      post: "Sponsorship Head",
      imgname: "IMG-20231216-WA0025 - 2020MEB007 PTHA_GHOSH.jpg",
      insta: "https://www.inse._.pritha",
      link: "https://www.linkedin.com/inent=profile&utm_medium=android_app",
    },
    person3: {
      name: "Sabavath Akash Ram Naik",
      phone: "+91 7815812686",
      post: "Sponsorship Executive",
      imgname: "Screenshot_2024-01-11-00-23-4B074 SABAVATH_AKASH RAM NAIK.jpg",
      insta: "https://www.instah_ram__",
      link: "https://www.linkedin.com/in/sram-naik-369980214",
    },
    person4: {
      name: "Soumyay",
      phone: "+91 9800054616",
      post: "Sponsorship Executive",
      imgname: "Formal Portrait(png) - 2SOYADEEP_DEY.png",
      insta: "https://www.instagram.oumyadey",
      link: "https://www.linkedin.com/deep Dey",
    }, 
    person5: {
      name: "Janhvi S",
      phone: "+91 8318035176",
      post: "Sponsorship Executive",
      imgname: "IMG_20230331_024142 - 2021MEB062 JANH_SINGH.jpg",
      insta: "https://www.instagram.canhvi",
      link: "https://www.linkedin.com/igh-858600239",
      },   
  };
  const event_person = {
    person1: {
      name: "Mahei",
      phone: "+91 8639555844",
      post: "Event Head",
      imgname: "IMG_20230721_163334803 - 2020MEB051 MASH_BANDLAMUDI.jpg",
      insta:
        "https://www.instagram.com/mahesh.bandWNhZXhlMTJ5ZzUx",
      link: "https://www.linkedin.com/in/mahesh-bandl_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "At",
      phone: "+91 7277876396",
      post: "Event Head",
      imgname: "IMG_20231105_140755 - 2020MEB031 I_AMBAST.jpg",
      insta: "https://www.instagram.com/ambast.avi",
      link: "https://www.linkedin.com/in/avi-ambast-8a1521225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Anuh",
      phone: "+91 6291884285",
      post: "Event Head",
      imgname: "20231219_135251 - 2020MEB036 ANUV_GHOSH.jpg",
      insta: "https://www.instagram.com/anuvab_ghosh?igsh=MWdkcnAxNTN0YnNlMw==",
      link: "https://www.linkedin.com/in/anuvab-ghosh-a10a57174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Arushi Das",
      phone: "+91 8917684258",
      post: "Event Head",
      imgname: "IMG-20231218-WA0190 - 2020MEB1 ARUSHI_DAS.jpg",
      insta: "https://www.instagram.com/ar.u_shhii?igsh=ODA1NTc5OTg5Nw==",
      link: "https://www.linkedin.com/in/arushi1505?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person5: {
      name: "Bobby Uddanti",
      phone: "+91 8374757468",
      post: "Event Head",
      imgname:
        "IMG_20231207_130709486_MF_PORTRAIT - 20MEB026 UDDANTI_BHAVANI.jpg",
      insta: "https://www.instagram.com/bobby_uddanti",
      link: "https://www.linkedin.com/in/BHAVANI PRASAD UDDANTI",
    },
    person6: {
      name: "Ajay kumar khandelwal",
      phone: "+91 7792062842",
      post: "Event Management Executive",
      imgname:
        "20231025_103237 - 2021MEB048 AJAY_KUM KHANDELWAL.jpg",
      insta: "https://www.instagram.com/ajaykhandelwal_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      link: "https://www.linkedin.com/in/ajay-kumar-khandelwal-1978aa231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person7: {
      name: "Ankush Ghosh",
      phone: "+91 8145326311",
      post: "Event Management Executive",
      imgname: "IMG-20221001-WA0074 - 2021ME10 ANKUSH_GHOSH.jpg",
      insta: "https://www.instagram.com/ag0172003",
      link: "https://www.linkedin.com/in/ankush-ghosh-43b02a255",
    },
    person8: {
      name: "Shreya Jaiswal",
      phone: "+91 6394615691",
      post: "Event Management Executive",
      imgname: "IMG_20240110_232251 - 2021M057 SHREYA_JAISWAL.jpg",
      insta: "https://www.instagram.com/shreyajais__173",
      link: "https://www.linkedin.com/in/shreya-jaiswal-523927253",
    },
    person9: {
      name: "Piyush Pathak",
      phone: "+91 7282809390",
      post: "Event Management Executive",
      imgname: "WhatsApp Image 2024-01-10 at1.52.51 PM - 2021MEB050 PIYUSH_PATHAK.jpeg",
      insta: "https://www.instagram.com/piyushpathak2k3",
      link: "https://www.linkedin.com/in/piyush-pathak-882489241/",
    },
    person10: {
      name: "Ayush Chodape",
      phone: "+91 7218111604",
      post: "Event Management Executive",
      imgname: "1704915527372 - 2021ME086 ZODAPE_AYUSH PRADIP.jpg",
      insta: "https://www.instagram.com/ayushzodape",
      link: "https://www.linkedin.com/in/Ayush Zodape",
    },
    person11: {
      name: "Soham Banerjee",
      phone: "+91 8101264621",
      post: "Event Management Executive",
      imgname: "Photo - 2021MEB069 SOHAM_BANEJEE.png",
      insta: "https://www.instagram.com/banerjeesoham111",
      link: "https://www.linkedin.com/in/soham-banerjee-867a82255",
    },
    person12: {
      name: "Shubham Jaiswal",
      phone: "+91 6387392302",
      post: "Event Management Executive",
      imgname: "IMG_20240112_232721 - 21MEB096 SHUBHAM_JAISWAL.jpg",
      insta: "https://www.instagram.com/shubham__1213",
      link: "https://www.linkedin.com/in/shubham-jaiswal-a6a30b171/",
    },
    person13: {
      name: "Wali Ahad Mallick",
      phone: "+91 7480984908",
      post: "Event Management Executive",
      imgname: "IMG_20240118_005230 - 2021MEB04MD_WALI AHAD MALLICK.jpg",
      insta: "https://www.instagram.com/wali_malik578?igsh=MXg4NjlxYXVjZTgzeg==",
      link: "https://www.linkedin.com/in/wali-ahad-mallick-027632222",
    },
    person14: {
      name: "Siddamalla Harshavardhan",
      phone: "+91 7702497870",
      post: "Event Management Executive",
      imgname: "WhatsApp Image 2024-01-25 at 13..42_a03655cf.jpg",
      insta: "https://www.instagram.com/harshavardhansiddhamalla?igsh=NGZjcnJxNmprOTV2",
      link: "https://www.linkedin.com/in/harshavardhan-siddamalla-118995229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },

  };
  const design_person = {
    person1: {
      name: "Pooal",
      phone: "+91 8436376729",
      post: "Design & Content Head",
      imgname: "IMG-20231214-WA0113 - 2020MEB0 POORVA_MONDAL.jpg",
      insta: "https://instagram.com/poorvamondal",
      link: "https://www.linkedin.com/in/poorva-mondal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Joyr",
      phone: "+91 6296985537",
      post: "Design & Content Head",
      imgname:
        "47576616_494793307709043_505289639515352_n - 2020MEB047 JOYBRATA_DHAR.jpg",
      insta: "https://www.instagram.com/joy_in_the_h0use/",
      link: "https://www.linkedin.com/in/joybrata-dhar-a193091b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BiMg8CC1vQAO6PtzJwyVt%2BA%3D%3D",
    },
    person3: {
      name: "Parth Pravin Shende",
      phone: "+91 8483973876",
      post: "Design & Content Head",
      imgname: "20230308094301_IMG_9935 - 2020ME56 SHENDE_PARTH.JPG",
      insta: "https://www.instagram.com/parth.shende_25",
      link: "https://www.linkedin.com/in/parth-shende-0b023b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Piyal Bhowmick",
      phone: "+91 8910276639",
      post: "Design & Content Executive",
      imgname: "IMG-20240110-WA0021 - 2021MEB02PIYAL_BHOWMICK.jpg",
      insta: "https://www.instagram.com/piyalb_13",
      link: "https://www.linkedin.com/in/piyal-bhowmick-555563199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person5: {
      name: "Sayan Mondal",
      phone: "+91 8670297716",
      post: "Design & Content Executive",
      imgname: "IMG_20240111_185857 - 2021MEB7 SAYAN_MONDAL.jpg",
      insta: "https://www.instagram.com/s.o.l.o.n.i.s.t/",
      link: "https://www.linkedin.com/in/sayan-mondal-5016511a0/",
    },
    person6: {
      name: "Muskan Choudhary",
      phone: "+91 8961572900",
      post: "Design & Content Executive",
      imgname: "WhatsApp Image 2024-01-31 at 197.44_c0cc8314.jpg",
      insta: "https://www.instagram.com/_muskan0103_/",
      link: "https://www.linkedin.com/in/muskan-choudhary-429559246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  };
  const publicity_person = {
    person1: {
      name: "DEAY",
      phone: "+91 6350619979",
      post: "Publicity Head",
      imgname: "20240104_173816 - 2020MEB03DEENDYAL_UPADHAYAY.jpg",
      insta: "https://www.instagram.com/_dee_xv",
      link: "https://www.linkedin.com/in/deendayal-upadhyay",
    },
    person2: {
      name: "Sag",
      phone: "+91 9382187029",
      post: "Publicity Head",
      imgname: "20240106_132845 - 2020MEB009 SGMU_TAMANG.jpg",
      insta: "https://www.instagram.com/_sa_n_g_",
      link: "https://www.linkedin.com/in/sangmu-tamang-374469220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Vipul Yadav",
      phone: "+91 8630273065",
      post: "Publicity Head",
      imgname: "IMG_0069 - 2020MEB082 VIPUL_YAV.jpeg",
      insta: "https://www.instagram.com/Vipulyadav_vy",
      link: "https://www.linkedin.com/in/Vipulyadav_vy",
    },
    person4: {
      name: "Rohit Pal",
      phone: "+91 8319629245",
      post: "Publicity",
      imgname: "IMG_20231216_115627 - 2021M097 ROHIT_PAL.jpg",
      insta: "https://www.instagram.com/rohitpal_18?igsh=MXhlNWd6N2pzZGZ6",
      link: "https://www.linkedin.com/in/rohit-_via&utm_content=profile&utm_medium=android_app",
    },
    person5: {
      name: "Shivang Agrahari",
      phone: "+91 6387631464",
      post: "Publicity",
      imgname: "IMG_20240117_AGRAHARI.jpg",
      insta: "https://www.iari02/",
      link: "https://wwwri02",
    },
    person6: {
      name: "Ajay kumar khandelwal",
      phone: "+91 7792062842",
      post: "Event Management Executive",
      imgname:
        "20231025_103237 - 2021MEB048 ALWAL.jpg",
      insta: "https://www.instagraonZDNlZDc0MzIxNw==",
      link: "https://www.linkedin.cre&=profile&utm_medium=android_app",
    },
  };
  const finance_person = {
    person1: {
      name: "Arn",
      phone: "+91 7061991256",
      post: "Finance Head",
      imgname: "Arnav - 2020MEB103 ARNV_ANAND.png",
      insta: "https://wwcom/_arnav03",
      link: "https://wwwrnav3",
    },
    person2: {
      name: "Sayul",
      phone: "+91 7439910063",
      post: "Finance Head",
      imgname:
        "WhatsApp Image 2023-02-15 at 1 SAYANTAN_PAUL.jpeg",
      insta: "https://www.instagranace",
      link: "https://www.l it up",
    },
  };
  const iam_person = {
    person1: {
      name: "Snar",
      phone: "+91 7093081024",
      post: "Head - Industry Academia Meet",
      imgname: "Snapchat-14 TIPPANA_SAI.jpg",
      insta: "https://www.insays.snehal_",
      link: "https://www.link Snehal Kumar",
    },
    person2: {
      name: "J",
      phone: "+91 8318035176",
      post: "Industry Academia Meet Executive",
      imgname: "IMG_20230331_0241INGH.jpg",
      insta: "https://www.instagramnhvi",
      link: "https://www.linke600239",
      },
  };
  const coordinator_person = {
    person1: {
      name: "ahf",
      phone: "+91 93692864",
      post: "Coordinar",
      imgname:
        "WhatsApp Image 2023-12AI.jpeg",
      insta: "https://wivyanshh.b",
      link: "https://www.lin97720b215/",
    },
    person2: {
      name: "lksjfl",
      phone: "+91 78084413",
      post: "Coordinar",
      imgname:
        "WhatsApp Image 2024-01-10 at 16.5.17_3f25e7f3.jpg",
      insta: "Use from last time",
      link: "Use from last time",
    },
    person3: {
      name: "Ama",
      phone: "+91 7357769918",
      post: "Joint Coordinator",
      imgname:
        "WhatsApp Image 2024-01-06 at 12.9A_SINGH.jpg",
      insta: "https://www.iningh.29",
      link: "https://wwwya Singh",
    },
    person4: {
      name: "Ivs",
      phone: "+91 7463884470",
      post: "Joint Coordinator",
      imgname:
        "WhatsApp Image 2023-08-2HOMAS.jpeg",
      insta: "https://www.invan_jax/",
      link: "https://www.l9b239/",
    },
  };
  const tl_person = {
    person1: {
      name: "Prk",
      phone: "+91 7074437263",
      post: "Travel & Logistics Head",
      imgname: "IM",
      insta:
        "https://www.instagram.com/s2cnY3d2Yxcw==",
      link: "https://www.linkedin.com/in/prutm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Hima",
      phone: "+91 9674577342",
      post: "Travel & Logistics Head",
      imgname: "RD1-1067 - 2020MEBHIVAM.jpg",
      insta: "https://www.instagramhimansh",
      link: "https://www.linkem",
    },
  };
  const webD_person = {
    person1: {
      name: "Durd",
      phone: "+91 7661044831",
      post: "Technical Head",
      imgname: "vpx2yg - 2",
      insta: "http",
      link: "h",
    },
    person2: {
      name: "Utsdu",
      phone: "+91 8100460390",
      post: "Technical Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person3: {
      name: "DEENYAY",
      phone: "+91 6350619979",
      post: "Technical Consultant",
      imgname: "",
      insta: "",
      link: "",
    },
    person4: {
      name: "Kraha",
      phone: "+91 9564727611",
      post: "Technical Executive",
      imgname: "20230422_1",
      insta: "https",
      link: "",
      },
  };
  const videoPhoto_person = {
    person2: {
      name: "Janyu",
      phone: "+91 6301028505",
      post: "Videography Head",
      imgname: "IMG-2023",
      insta: "https:",
      link: "h",
    },
    person1: {
      name: "DEEYAY",
      phone: "+91 6350619979",
      post: "Photography and Videography Head",
      imgname: "20240",
      insta: "",
      link: "",
    },
    person3: {
      name: "Parth Pravin Shende",
      phone: "+91 8483973876",
      post: "Photography Head",
      imgname: "2023030",
      insta: "",
      link: "",
    },
    person4: {
      name: "Saao",
      phone: "+91 8367663100",
      post: "Videography and Photography Executive",
      imgname: "1000127139-01_2 (1g.jpg",
      insta: "",
      link: "",
    },
  };

  return (
    <>
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Our Team</Typography>
        <br></br>
        <Box className="tabs  ">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Coordinators" />
            <Tab className="tab" label="Finance Team" />
            <Tab className="tab" label="Event Management Team" />
            <Tab className="tab" label="Technical Team" />
            <Tab className="tab" label="Content and Design Team" />
            <Tab className="tab" label="Publicity Team" />
            <Tab className="tab" label="Sponsorship Team" />
            <Tab className="tab" label="Food and Logistics Team" />
            <Tab className="tab" label="Industry Academia Meet" />
            <Tab className="tab" label="Videography and Photography Team" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="contactCards">
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={coordinator_person.person1} />
            {/* <ContactCard person={coordinator_person.person2} /> */}
          </Box>

          {/* <ContactCard person={coordinator_person.person3} />
          <ContactCard person={coordinator_person.person4} /> */}
        </TabPanel>
        <TabPanel value={value} index={6} className="contactCards">
          {/*Sponsorship Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={sponsorship_person.person1} />
            {/* <ContactCard person={sponsorship_person.person2} /> */}
          </Box>
            {/* <ContactCard person={sponsorship_person.person5} />
            <ContactCard person={sponsorship_person.person3} />
            <ContactCard person={sponsorship_person.person4} /> */}
          <br style={{ width: "100%" }}></br>
          {/* <ContactCard person={sponsorship_person.person4} />
          <ContactCard person={sponsorship_person.person5} /> */}
        </TabPanel>
        <TabPanel value={value} index={2} className="contactCards">
          {/*Event Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={event_person.person2} />
            {/* <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person3} />
            <ContactCard person={event_person.person4} />
            <ContactCard person={event_person.person5} /> */}
          </Box>
          {/* <ContactCard person={event_person.person6} />
          <ContactCard person={event_person.person7} />
          <ContactCard person={event_person.person8} />
          <ContactCard person={event_person.person9} />
          <ContactCard person={event_person.person10} />
          <ContactCard person={event_person.person11} />
          <ContactCard person={event_person.person12} />
          <ContactCard person={event_person.person13} />
          <ContactCard person={event_person.person14} /> */}
        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">
          {/*Technical Team*/}

          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={webD_person.person1} />
            {/* <ContactCard person={webD_person.person3} /> */}
          </Box>
          {/* <ContactCard person={webD_person.person2} />
          <ContactCard person={webD_person.person4} /> */}
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">
          {/*Design*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            {/* <ContactCard person={design_person.person1} />
            <ContactCard person={design_person.person2} />
            <ContactCard person={design_person.person3} /> */}
          </Box>
            {/* <ContactCard person={design_person.person6} />
            <ContactCard person={design_person.person4} />
            <ContactCard person={design_person.person5} /> */}
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">
          {/*Publicity */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={publicity_person.person1} />
            {/* <ContactCard person={publicity_person.person2} />
            <ContactCard person={publicity_person.person3} /> */}
          </Box>
          {/* <ContactCard person={publicity_person.person6} />
          <ContactCard person={publicity_person.person4} />
          <ContactCard person={publicity_person.person5} />           */}
          
        </TabPanel>

        <TabPanel value={value} index={1} className="contactCards">
          {/*Finance*/}
          <ContactCard person={finance_person.person1} />
          {/* <ContactCard person={finance_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">
          {/*Food*/}
          <ContactCard person={tl_person.person1} />
          <ContactCard person={tl_person.person2} />
        </TabPanel>

        <TabPanel value={value} index={8} className="contactCards">
          {/*IAM*/}          
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={iam_person.person1} />
          </Box>
          <ContactCard person={iam_person.person2} />
        </TabPanel>

        <TabPanel value={value} index={9} className="contactCards">
          {/*Video & Photo*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={videoPhoto_person.person1} />
            {/* <ContactCard person={videoPhoto_person.person2} />
            <ContactCard person={videoPhoto_person.person3} /> */}
          </Box>
          {/* <ContactCard person={videoPhoto_person.person4} /> */}

        </TabPanel>
      </Box>
      <Contact />
    </>
  );
}