import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";

function Industry() {
  const headers = [
    {
      title: "Category",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Description",
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
          category: "Lorem ipsum",
          description: "ipsum",
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

export default Industry;
