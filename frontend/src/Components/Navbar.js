import { Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ menu = [] }) {
  const styles = {
    boxOuterWrapper: {
      background: "black",
      color: "white",
    },
    buttonWarpper: {
      color: "white",
      textDecoration: "none",
    },
  };
  return (
    <Box style={styles.boxOuterWrapper}>
      <Toolbar>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {[
            { page: "/users", title: "Users" },
            { page: "/about", title: "About" },
            { page: "/content", title: "Content" },
            { page: "/stats", title: "Statistics" },
            { page: "/tables", title: "Tables" },
            { page: "/graphs", title: "Graphs" },
            { page: "/information", title: "Information" },
          ].map((item) => (
            <Button key={item.title}>
              <Link style={styles.buttonWarpper} to={item.page}>
                {item.title}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Navbar;
