import { Typography, useTheme } from "@mui/material";
import CarouselComp from "../components/CarouselComp";
import Contact from "../components/Contact";
import Image from "next/image";
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
      <div className="pt-8 mt-4 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Rowdies" }}
        >
          INDUSTRY ACADEMIA MEET
        </h1>
        <p className="text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          1st February, 2025
        </p>
      </div>
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
        <div className="py-6 px-4 mx-auto max-w-screen-xl">
          <div data-aos="zoom-in-up" className="rounded-lg md:p-8 md:p-12 mb-8">
            <p className="text-lg font-normal text-gray-200">
              The Industrial Meet at Udbhabani 4.0 aspires to create a unique symposium uniting academia and industry. In the realm of Civil Engineering, academic progress and industrial innovation are deeply intertwined. Achieving diversified and sustainable solutions to modern challenges requires a collaborative approach between the two.

              Udbhabani 4.0 seeks to bridge this crucial gap, bringing together industrial leaders, professors, researchers, and civil engineering enthusiasts on a shared platform. This event will serve as a haven for nurturing brilliant engineering minds, fostering dialogue, and paving the way for impactful collaborations that shape the future of Civil Engineering.
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between px-2 md:px-4">
        <div className="flex-1">
          <div className="pt-8 mt-4 px-2 md:px-4 mx-auto max-w-screen-xl text-center z-10 relative">
            <h1
              className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl"
              style={{ fontFamily: "Rowdies" }}
            >
              Workshop
            </h1>
            <p className="text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
              29th January - 1st February, 2025
            </p>
          </div>
          <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
            <div className="py-6 px-2 md:px-4 mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 pr-0 md:pr-4">
                <div data-aos="zoom-in-up" className="rounded-lg md:p-8 md:p-12 mb-8">
                  <p className="text-lg font-normal text-gray-200">
                    Stadd-Pro:
                    Welcome to the STADD Pro Workshop!
                    Dive into the world of structural analysis
                    and design with STAD Pro. Learn practical
                    techniques, optimize designs, and tackle
                    real-world engineering challenges with
                    confidence.
                    Lets unlock the potential of STADD Pro to
                    drive engineering excellence!
                  </p>
                </div>
              </div>
              <div className="flex-1 pl-0 md:pl-4">
                <Image
                  src="/images/stadd.jpeg"
                  alt="Stadd-Pro Workshop"
                  width={500}
                  height={500}
                  style={{
                    filter: "drop-shadow(16px 16px 10px black)",
                  }}
                />
              </div>
            </div>
          </section>
          <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
            <div className="py-6 px-2 md:px-4 mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 pr-0 md:pr-4">
                <div data-aos="zoom-in-up" className="rounded-lg md:p-8 md:p-12 mb-8">
                  <p className="text-lg font-normal text-gray-200">
                    Ansys:
                    Welcome to the ANSYS workshop,
                    where innovation meets precision in
                    engineering simulation. Discover
                    powerful tools, master advanced
                    techniques, and learn how ANSYS
                    transforms ideas into reality. Lets
                    unlock the potential of simulation to
                    tackle real-world challenges and drive
                    engineering excellence.
                  </p>
                </div>
              </div>
              <div className="flex-1 pl-0 md:pl-4">
                <Image
                  src="/images/ansysp.jpeg"
                  alt="Ansys Workshop"
                  width={500}
                  height={500}
                  style={{
                    filter: "drop-shadow(16px 16px 10px black)",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Contact />
    </section>
  );
}
