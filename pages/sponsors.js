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
    sponsor1: { imgname: "Gainwell.png" },
    sponsor2: { imgname: "Mahr.jpg" },
    sponsor3: { imgname: "Purahsara.png" },
    sponsor4: { imgname: "Edugraph.jpg" },
    sponsor5: { imgname: "IOCL.jpg" },
    sponsor6: { imgname: "ISHRAE.jpg" },
    sponsor7: { imgname: "ISHRAE.jpg" },
    sponsor8: { imgname: "Lalbaba.jpg" },
    sponsor9: { imgname: "IMechE.jpg" },
    sponsor10: { imgname: "BlackbirdRobotix_1.png" },
    sponsor11: { imgname: "StockEdge.jpg" },
    sponsor12: { imgname: "GEMS.jpg" },
  };
  const sponsorData = {
    sponsor1: { imgname: "Logiczap.png" },
    sponsor2: { imgname: "elearnmarkets.jpg" },
    sponsor3: { imgname: "idp.jpg" },
    sponsor4: { imgname: "iic.jpg" },
    // sponsor5: { imgname: "IMechE.jpg" },
    // sponsor6: { imgname: "Mahr.jpg" },
    sponsor7: { imgname: "moople.jpg" },
    sponsor8: { imgname: "ThinkAgainLab.jpg" },
    sponsor9: { imgname: "Alo bus.png" },
    sponsor10: { imgname: "Asawa insulation.png" },
    sponsor11: { imgname: "Dyna Temp.png" },
    sponsor12: { imgname: "Roasted.png" },
    sponsor13: { imgname: "7Spices.png" },
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
        <Typography variant="h1">Past Sponsors</Typography>
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
