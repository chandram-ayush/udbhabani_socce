import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const styles = {
  width: "100%",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    a: {
      fontSize: "16.8px",
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "10px 0",
      transition: "transform 0.3s ease",
      ":hover": {
        transform: "scale(1.1)",
      },
      ":hover::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        zIndex: -1,
      },
    },
  },
  "a.active": {
    borderBottom: "2px solid cyan",
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
          <Link href="/home" className={router.pathname === "/home" ? "active" : ""}>
            <span>Home</span>
          </Link>
          <Link href="/events" className={router.pathname === "/events" ? "active" : ""}>
            <span>Events</span>
          </Link>
          <Link href="/seminar" className={router.pathname === "/seminar" ? "active" : ""}>
            <span>Seminar&apos;s</span>
          </Link>
          <Link href="/sponsors" className={router.pathname === "/sponsors" ? "active" : ""}>
            <span>Sponsors</span>
          </Link>
          <Link href="/home" className={router.pathname === "/home" ? "active" : ""}>
            <span>Meet Our Team</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
