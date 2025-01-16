import { Box } from "@mui/system";
import Link from "next/link";
import React from 'react';

import { useRouter } from "next/router";

const styles = {
  width: "100%",
  maxWidth: "1200px",

  ".nav": {
    display: "grid",
    width: "100%",
    gridTemplateColumns: {
      lg: "repeat(4,1fr) 1.5fr",
      sm: "repeat(4,1fr) 1.5fr",
      xs: "repeat(4,1fr) 1.5fr",
    },
    flexDirection: "row",
    a: {
      fontSize: "16.8px",
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "500",
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      cursor: "default",
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      ".bor": {
        width: "70%",
        textAlign: "center",
      },
      span: {
        position: "relative",
        display: " inline-block",
        transition: " color 0.3s ease",
        ":hover": {
          color: "#ffffff",
          transform: "scale(1.1)",
          cursor: "pointer",
          transition: "all 0.4s ease",
        },
        ":hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          transition: "width 0.4s",
        },
      },
    },
  },
  "a.active": {
    ".bor": {
      borderBottom: "2px solid cyan",
    },
  },
};

export default function NavbarComp() {
  const router = useRouter();
  return (
    <Box
      className="center1"
      sx={{ backgroundColor: "none", width: "78%", maxWidth: "900px" }}
    >
      <Box sx={styles} className="center1">
        <Box className="nav">
          <Link
            href="/home"
            className={router.pathname === "/home" ? "active" : ""}
          >
            <div className="bor">
              <span>Home</span>
            </div>
          </Link>
          <Link
            href="/home"
            className={router.pathname === "/home" ? "active" : ""}
          >
            <div className="bor">
              <span>Events</span>
            </div>
          </Link>
          <Link
            href="/home"
            className={router.pathname === "/home" ? "active" : ""}
          >
            <div className="bor">
              <span>Seminar&apos;s</span>
            </div>
          </Link>
          <Link
            href="/home"
            className={router.pathname === "/home" ? "active" : ""}
          >
            <div className="bor">
              <span>Sponsors</span>
            </div>
          </Link>
          <Link
            href="/home"
            className={router.pathname === "/home" ? "active" : ""}
          >
            <div className="bor">
              <span>Meet Our Team</span>
            </div>
          </Link>
          {/* <Link
            href="/industryacademiameet"
            style={{ textAlign: "center" }}
            className={
              router.pathname === "/industryacademiameet" ? "active" : ""
            }
          >
            <div className="bor" style={{ width: "100%" }}>
              <span>Industry Academia Meet</span>
            </div>
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
}
