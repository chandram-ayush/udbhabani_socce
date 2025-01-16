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
      lg: "repeat(5, 1fr)",
      sm: "repeat(5, 1fr)",
      xs: "repeat(5, 1fr)",
    },
    a: {
      fontSize: "16.8px",
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default",
      ".bor": {
        width: "70%",
        textAlign: "center",
      },
      span: {
        position: "relative",
        display: "inline-block",
        ":hover": {
          color: "#ffffff",
          transform: "scale(1.1)",
          cursor: "pointer",
        },
        ":hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
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
            href="/events"
            className={router.pathname === "/events" ? "active" : ""}
          >
            <div className="bor">
              <span>Events</span>
            </div>
          </Link>
          <Link
            href="/seminar"
            className={router.pathname === "/seminar" ? "active" : ""}
          >
            <div className="bor">
              <span>Seminar&apos;s</span>
            </div>
          </Link>
          <Link
            href="/sponsors"
            className={router.pathname === "/sponsors" ? "active" : ""}
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
        </Box>
      </Box>
    </Box>
  );
}
