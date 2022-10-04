import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ResponsiveAppBar from "../Components/Header";
import { Avatar, Container, Paper } from "@mui/material";
import TabBar from "../Components/TabBar";
import logo from "../assets/logo.svg";
import SideNav from "../Components/SideNav";
import tabs from "../Json/tabs.json";
import SwitchComponent from "../Components/SwitchComponent";
import Loader from "../Components/Loader";

const drawerWidth = 100;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [allTabs, setAllTabs] = React.useState(tabs?.data);
  const [parentTab, setParentTab] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        color: "#000133",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ background: "#fff", color: "black", boxShadow: "none" }}
      >
        <ResponsiveAppBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          selectedTab={parentTab?.title || ""}
        />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "darkslategrey",
            borderRight: "3px solid #fbd020",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <SideNav handleDrawerClose={handleDrawerClose} />
      </Drawer>
      {isLoading && <Loader />}
      <Main open={open} sx={{ padding: "20px 0px" }}>
        <div style={{ minHeight: "45px" }}></div>
        <Typography paragraph style={{ margin: "0px" }}>
          <TabBar tabs={allTabs} setParentTab={setParentTab} />
        </Typography>
        <Box
          style={{
            flex: 1,
            height: "calc(100% - 115px)",
            background: "#eeeeee",
            color: "black",
            padding: "10px 15px",
          }}
        >
          <div style={{ height: "10px", margin: "10px 15px" }}>
            <SwitchComponent component={parentTab} />
          </div>
        </Box>
        <div
          style={{
            background: "#eeeeee",
            height: "40px",
            padding: "5px 10px",
          }}
        >
          <Typography style={{ textAlign: "center" }}></Typography>
        </div>
      </Main>
    </Box>
  );
}
