import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const data = [
  {
    title: "Dashboard",
    selected: "false",
  },
  {
    title: "User's",
    selected: "false",
  },
  {
    title: "Role",
    selected: "false",
  },
  {
    title: "Industry",
    selected: "false",
  },
  {
    title: "Sub-Industry",
    selected: "false",
  },
  {
    title: "Company",
    selected: "false",
  },
  {
    title: "Entity",
    selected: "false",
  },
  {
    title: "Plant",
    selected: "false",
  },
  {
    title: "KPI's",
    selected: "false",
  },
  {
    title: "Categories",
    selected: "false",
  },
  {
    title: "Unit",
    selected: "false",
  },
  {
    title: "Unit Group",
    selected: "false",
  },
  {
    title: "Reference Library",
    selected: "false",
  },
  {
    title: "Agencies",
    selected: "false",
  },
  {
    title: "Reports",
    selected: "false",
  },
];

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const styles = {
    tabElements: {
      color: "darkslategrey",
      fontWeight: "800",
      fontSize: "11px",
      padding: "0px 5px",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 480, md: 1250, xs: 1300 },
        backgroundColor: "#f5f5f5b0",
        boxShadow: "0px 0px 2px 0px #a1a1a157",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{ style: { background: "#fbd020" } }}
      >
        {data?.map((item) => {
          return <Tab label={item?.title} sx={styles?.tabElements} />;
        })}
      </Tabs>
    </Box>
  );
}
