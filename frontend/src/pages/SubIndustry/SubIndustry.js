import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";

function SubIndustry() {
  const headers = [
    {
      title: "Sub-Industry",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Description",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Industry",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Specification",
      sorting: true,
      direction: "asc",
    },
  ];

  const generateData = () => {
    let sample = [];
    for (let i = 0; i < 10; i++) {
      sample = [
        ...sample,
        {
          subIndustry: "Lorem ipsum",
          description: "ipsum",
          industry: "ipsum",
          specification: "Lorem",
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  return (
    <>
      {" "}
      <CustomDataGrid headers={headers} rows={data} title={"Agnecies"} />{" "}
    </>
  );
}

export default SubIndustry;
