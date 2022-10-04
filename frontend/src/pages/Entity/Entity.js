import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";

function Entity() {
  const headers = [
    {
      title: "Entity Name",
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
    {
      title: "Parent Company",
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
          parentCompany: "Loreum",
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  return (
    <>
      <CustomDataGrid headers={headers} rows={data} title={"Entity"} />{" "}
    </>
  );
}

export default Entity;
