import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef , useState} from "react";
import LearnMore from "./LearnMore";
import { useInViewport } from "react-in-viewport";

export default function EventDescription({ index, setCurrIdx, currIdx }) {
  const theme = useTheme();
  const ref = useRef(null);
  const headingRef = useRef(null);
  const [TopValue, setTopValue] = useState('45vh');
  const { inViewport } = useInViewport(headingRef);

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "13px",
      letterSpacing: "2px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    width: "500px",
    maxWidth: "90vw",
    textAlign: "justify",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "5vw",
      div: {
        // top: "50vh",
        top:TopValue,
        // marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
  };

  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        // setPropertyValue('relative');
        setTopValue('43vh');
        // setHeightValue('40vw');

      } else {
        // setPropertyValue('absolute');
        setTopValue('35vh');
        // setHeightValue('50%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (index === currIdx) handleScroll();
  }, [currIdx, index]);
  const heading = [
    "Debate",
    "Quiz",
    "Go Green",
    "Bridge Craft",
    "CAD Catalyst",
    "Brug It",
    "Surveryer's Quest",
    "Valorant",
    "Bgmi",
    "Fifa",
  ];
  const link = [
    "debate",
    "quiz",
    "green",
    "bridgecraft",
    "catalyst",
    "brug",
    "quest",
    "valorant",
    "bgmi",
    "fifa",
  ];

  const debate =
    'As we gather in this arena of discourse, we invite you to witness the clash of perspectives, the articulation of nuanced arguments.Let the battle of the minds commence.';
  const quiz =
    'This event organized Welcome to the world of brilliance Brace yourselves for a mind-bending journey where questions spark curiosity and answers unveil the tapestry of knowledge by ASME IIEST, aims to give you all the excitement of treasure hunt.You can look forward to having fun while solving mysteries together and hunting down simple machines in our college campus.';
  const gogreen =
  'Today, we are gathering to tackle real-world sustainability challenges head-on. Teams will brainstorm innovative and cost-effective solutions to tackle the pressing issues.';
  const bridge =
    'Get ready to showcase your engineering and creative abilities in an exciting challenge..Cooperate with your team to build bridges that can endure heavy vertical loads while also being as lightweight as they can. Are you ready to build the bridge of victory?"';
  const cadcat =
    "Whether you'rean architect, designer, or simply passionate about CAD, then provoke yourself for an amazing AutoCAD Designing Extravaganza! Come and discover the enchantment of creativity with accuracy and turn your ideas into reality.";
  const brug =
    "Test your structural analysis and design skills with industry-standard software. Compete against peers to showcase your proficiency in creating and analysing structural models.";
  const quest =
    '"Be our treasure scavenger!” Test your detective skills and unearth the hidden gems of civil Engineering. Bring your friends and embark on an unforgettable journey! Do not miss out!"';
  const valorant =
    "The Valorant gaming event is a competition that brings together talented players to showcase their skills and compete for recognition. It is an exciting opportunity for Valorant fans to experience high-level gameplay and celebrate the top talent in the game.";
  const bgmi =
    "Gear up for our upcoming esports event featuring intense battles in BGMI, Valorant, and FIFA. Whether you're a pro or new to gaming, there's something for everyone. Join us for exciting matches and the chance to showcase your skills on the digital stage. It's time to elevate your game and embrace the thrill of esports!";
    const fifa =
    "Gear up for our upcoming esports event featuring intense battles in BGMI, Valorant, and FIFA. Whether you're a pro or new to gaming, there's something for everyone. Join us for exciting matches and the chance to showcase your skills on the digital stage. It's time to elevate your game and embrace the thrill of esports!";
  const content = [
    debate,
    quiz,
    gogreen,
    bridge,
    cadcat,
    brug,
    quest,
    valorant,
    bgmi,
    fifa,
  ];

  return (
    <Box ref={ref} sx={styles}>
      <Box>
        <h1
          ref={headingRef}
          class="mb-4 text-2xl font-extrabold tracking-tight xs:text-center leading-none text-white  lg:text-4xl"
        >
          {heading[currIdx % 9]}
        </h1>

        <p className="lg:tracking-normal  relative sm:tracking-tight text-lg font-normal lg:text-xl sm:px-18 sm:text-xm text-justify rtl:text-right text-gray-300">
          {content[currIdx % 9]}
        </p>
        <LearnMore link={`/eventss/${link[currIdx % 9]}`} />
      </Box>
    </Box>
  );
}
