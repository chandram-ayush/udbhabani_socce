import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function NavbarComp() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        {[
          { name: "Home", path: "/home" },
          { name: "Events", path: "/events" },
          { name: "Seminars", path: "/seminar" },
          { name: "Sponsors", path: "/sponsors" },
          { name: "Meet Our Team", path: "/team" },
        ].map((link) => (
          <Link key={link.path} href={link.path} legacyBehavior>
            <div className={router.pathname === link.path ? styles.active : ""}>
              <div className={styles.bor}>
                <span>{link.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
  