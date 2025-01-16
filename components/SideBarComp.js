import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SideBarComp() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const goToPage = (page) => {
    let path = "";
    switch (page) {
      case "Home":
        path = "/home";
        break;
      case "Events":
        path = "/home";
        break;
      case "Seminar":
        path = "/home";
        break;
      case "Sponsors":
        path = "/home";
        break;
      case "Team":
        path = "/home";
        break;
      default:
        path = "/";
    }
    
    if (router.asPath !== path) {
      router.push(path);
      setDrawerOpen(false);
    } else {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      role="presentation"
    >
      <List>
        {["Home", "Events", "Seminar", "Sponsors", "Team"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => goToPage(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ ml: "20px" }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              width: "500px",
              maxWidth: "80vw",
              backgroundColor: "#111827",
            },
          }}
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          className="bg-gray-800"
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
