import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import Image from "next/image";
import BackgroundParticles from "../components/BgParticles2";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from 'react';

export default function IAMPage() {
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ">*": {
      zIndex: "3",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    h2: {
      mt: "20px",
      mb: "15px",
    },
    ".content": {
      zIndex: "3",
      maxWidth: "1000px",
      mt: "30px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".benefits": {
      maxWidth: "1000px",
      mt: "30px",
      ml: "10px",
      mr: "10px",
      div: {
        margin: "60px 0",
      },
    },
    ".pattern": {
      display: "flex",
      maxWidth: "90vw",
    },
    ".patternR": {
      maxWidth: "90vw",
      display: "flex",
      flexDirection: "row-reverse",
      flexGrow: "1",
    },
    ".pattern, .patternR": {
      alignItems: "center",
      justifyContent: "center",
    },
    ".patimg, .pattext": {
      width: "600px",
      height: "auto",
      maxWidth: "80vw",
      maxHeight: "600px",
      margin: "50px",
    },
    ".pattext": {
      textAlign: "justify",
    },
    ".pattext h3": {
      margin: "30px 0",
      fontSize: "32px",
      fontWeight: "600px",
    },
    [theme.breakpoints.down("md")]: {
      ".patimg, .pattext": {
        margin: "0",
      },
    },
    ".bulletArrow li": {
      textIndent: "0",
      paddingLeft: "40px",
    },
    ".bulletBox": {
      position: "relative",
    },
  };
  const person = {
    person1: {},
    person2: {},
  };
  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
      <CarouselComp />
      <div className="pt-8 mt-4 px-4 mx-auto max-w-screen-xl text-center  z-10 relative">
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Rowdies" }}
        >
          INDUSTRY ACADEMIA MEET
        </h1>
        <p className=" text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48 ">
          11th February, 2024 - 9AM to 6PM
        </p>
      </div>
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
        <div className="py-6 px-4 mx-auto max-w-screen-xl">
          <div
            data-aos="zoom-in-up"
            className="   rounded-lg md:p-8 md:p-12 mb-8"
          >
            <p className="text-lg font-normal text-gray-200  ">
              The industrial meet in IMPETUS is to foster a productive dialogue
              between industry and academia, provide exposure to students and
              academics about current and future industrial trends, and equip
              them with the skills to be future-proof and industry-ready. It
              seeks to establish interactive communication between industry
              leaders, academicians, and students, bridging the gap between the
              company and institute and offering a comprehensive understanding
              of their needs. The expert-led discussion panels and interactive
              sessions will enhance the learning experience for participants.
              This event aims to create a common ground for the collaboration of
              industry and academia, prioritize knowledge sharing, and
              facilitate thought-provoking discussions on best practices,
              employability, and talent identification in campus recruitment.
            </p>
          </div>
          <div></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="zoom-in-right"
              className=" bg-gray-800 border   border-gray-700 rounded-lg p-3 md:p-6"
            >
              <a
                href="#"
                className="bg-green-100 text-green-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  bg-gray-700  text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Aim
              </a>
              <p className="text-lg font-normal  text-gray-300 mb-4">
                IMPETUS aims to create strong interactive communication between
                leading officials from multiple indus- tries, academicians and
                prospective students. The meet will cushion the process of
                campus engagement be- tween the companies and the insti- tute
                and provide a holistic perspective to their respective needs. It
                induces innovative practices, insights, scenar- ios. the
                interactive nature of the ses- sions and expert-led discussion
                panels will transcend the participants to an enhanced learning
                experience
              </p>
            </div>
            <div
              data-aos="zoom-in-left"
              className=" border border-gray-700 rounded-lg p-3 bg-gray-800"
            >
              <a
                href="#"
                className="text-purple-400 bg-purple-100 text-md font-medium text-center inline-flex items-center px-2.5 py-0.5 rounded-md  bg-gray-700  text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  ariahidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Takeaways for the corporate
              </a>
              <div
                className="p-3 mb-2 text-sm  md:px-10  rounded-lg bg-gray-700  text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Resolving technical issues through projects and consultancy
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10  rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Presentation of viable solutions through sound studies and
                research publications by the top-notch aca- demicians of the
                institute
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10 rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Understand the insights and rate the institute
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10 rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Understand the insights and rate the institute Innovative and
                time-effective strategies to ease the hiring process Active
                interaction of the industries with the scholars of the institute
                and to brainstorm issues and challenges faced by the respective
                members
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
          <div className="flex justify-center flex-col items-center gap-y-2">
            <h1 className="md:text-3xl text-white font-bold">
              Benefits for the Institute
            </h1>

            <div>
              <h2 id="accordion-arrow-icon-heading-2">
                <button className="flex rounded-t-lg items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 focus:ring-4 focus:ring-gray-800 border-gray-700 text-gray-400  hover:bg-gray-800 gap-3">
                  <span>
                    A chance to meet and interact with elite officials,
                    technical and HR heads from multiple sectors
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-200 focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Learn the basic fundamentals and the newest trends in campus
                    hiring
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-800 border-gray-700 text-gray-400  hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    To showcase the technical prowess of the institute and their
                    success stories to the recruiters
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex  justify-between w-full p-5 font-medium border focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    An effort to change the landscape of campus recruitment in
                    the pool of campus talent and remodel training and
                    skill-building exercises to sculpt out the industry - ready
                    young engineers to persuade recruiters
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Way to enable students to choose the most relevant job
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center rounded-b-lg justify-between w-full p-5 font-medium rtl:text-right  border  focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Develop a better employment ecosystem which is a win-win for
                    the students, institute and corporate.
                  </span>
                </button>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              className="patimg md:ml-32  ml-0"
              src="/images/Networking.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
          <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left text-center md-font-extrabold mb-2">
              Industry-Academia Interaction
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              Active interaction between the industries and scholars of the
              institute and brainstorming prevalent issues and challenges -
              paving the way for future collaboration.It facilitates
              interactions between academia and industrialists by providing a
              forum for dialogue, identifying common interests, and exploring
              potential collaborative opportunities.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <div className=" flex flex-col justify-center  lg:items-end items-center text-lg font-normal text-gray-300 mb-4 md:order-1 order-2">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left self-center  text-center md-font-extrabold mb-2">
              Strategy Planning
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              Innovative and time-effective strategies to ease the hiring
              process. It can provide a platform for knowledge exchange,
              collaboration, and networking, which can inform and shape
              strategic planning. Insights gained from academia can inform
              industry decision-making and help drive innovation.
            </p>
          </div>
          <div className="flex items-center justify-start md:order-2 order-1">
            <Image
              className="patimg md:ml-20 ml-0"
              src="/images/Solution.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              className="patimg"
              src="/images/Networking.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
          <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left text-center md-font-extrabold mb-2">
              Building Industry to Industry Connection
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              An opportunity to interact with prominent delegates from other
              industries and research institutes during IMPETUS 2023.It can help
              build connections with industries by providing opportunities for
              networking, knowledge exchange, and collaboration, leading to
              potential partnerships and business opportunities..
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </section>
  );
}
