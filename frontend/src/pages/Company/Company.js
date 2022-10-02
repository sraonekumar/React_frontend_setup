import { Box } from "@mui/material";
import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";
import { Add } from "@mui/icons-material";
import CustomButton from "../../Components/CustomButton";

function Company() {
  const headers = [
    {
      title: "Company Name",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Industry",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Sub-Industry",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Company ISIN",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Client Admin",
      sorting: true,
      direction: "asc",
    },
    {
      title: "EY-Admin",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Address",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Country",
      sorting: true,
      direction: "asc",
    },
  ];

  const generateData = () => {
    let sample = [];
    for (let i = 0; i < 8; i++) {
      sample = [
        ...sample,
        {
          companyName: "Loreal ipsum",
          industry: "ipsum",
          subIndustry: "ipsum",
          companyISIN: "123456",
          clientAdmin: "NameEmail@gmail.com",
          eyAdmin: "NameEmail@gmail.com",
          address: "Abc apartment",
          country: "india",
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  return (
    <Box>
      <CustomButton msg={"Add"} icon={{ item: <Add /> }} />
      <CustomDataGrid headers={headers} rows={data} title={"Agnecies"} />{" "}
    </Box>
  );
}

export default Company;
