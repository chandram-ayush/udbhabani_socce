import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";
import React from 'react';


export default function SponsorsPage() {
  const styles = {
    overflowY: "hidden",
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: {
        lg: "54px",
        sm: "50px",
        xs: "40px",
      },
      height: "10vh",
    },
    h3: { mt: "100px", mb: "50px", fontSize: "54px" },
  };
  const sponsor = {
    sponsor1: { imgname: "ambuja.png" },
    sponsor2: { imgname: "dalmia.jpg" },
    sponsor3: { imgname: "electrosteel.png" },
    sponsor4: { imgname: "fmfrnds.jpg" },
    sponsor5: { imgname: "graham.jpg" },
    sponsor6: { imgname: "ISHRAE.jpg" },
    sponsor7: { imgname: "ISHRAE.jpg" },
    sponsor8: { imgname: "Lalbaba.jpg" },
    sponsor9: { imgname: "IMechE.jpg" },
    sponsor10: { imgname: "BlackbirdRobotix_1.png" },
    sponsor11: { imgname: "StockEdge.jpg" },
    sponsor12: { imgname: "GEMS.jpg" },
  };
  const sponsorData = {
    sponsor1: { imgname: "ambuja.png" },
    sponsor2: { imgname: "dalmia.png" },
    sponsor3: { imgname: "itd.png" },
    sponsor4: { imgname: "fmfrnds.png" },
    sponsor5: { imgname: "jsw.png" },
    sponsor7: { imgname: "dastur.png" },
    sponsor8: { imgname: "adpt.png" },
    sponsor9: { imgname: "graham.png" },
    sponsor10: { imgname: "simoco.png" },
    sponsor11: { imgname: "simplex.png" },
    sponsor12: { imgname: "teqip.png" },
    sponsor13: { imgname: "nuvovo.png" },
    sponsor14: { imgname: "innovative.png" },
    sponsor15: { imgname: "chandra.png" },
    sponsor16: { imgname: "rainbow.png" },
  };

  return (
    <>
      {/*<Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Title Sponsor</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor1} />
        </Box>
        <Typography variant="h1">Co-Sponsor</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor2} />
          <SponsorCard
            sponsor={sponsor.sponsor3}
            styles={{ border: "solid white 2px" }}
          />
        </Box>
        <Typography variant="h1">Media Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor4} />
        </Box>
        <Typography variant="h1">Event Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor5} />
          
          <SponsorCard sponsor={sponsor.sponsor7} />
          
          <SponsorCard sponsor={sponsor.sponsor9} />
        </Box>
        <Typography variant="h1">Technology Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor10} />
        </Box>
        <Typography variant="h1">Learning Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor11} />
          <SponsorCard sponsor={sponsor.sponsor12} />
        </Box>
      </Box>*/}
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Previous Sponsors</Typography>
        <Box className="cards">
          {Object.values(sponsorData).map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </Box>
        {/* <Typography variant="h1">COMING SOON...</Typography> */}
      </Box>

      <Contact />
    </>
  );
}
