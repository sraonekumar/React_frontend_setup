import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";

function Agencies() {
  const headers = [
    {
      title: "Agnecy Name",
      sorting: true,
      direction: "asc",
    },
    {
      title: "SPOC Name",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Spoc Email",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Standered",
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
    for (let i = 0; i < 10; i++) {
      sample = [
        ...sample,
        {
          name: "Loreal ipsum",
          spocName: "ipsum",
          spocEmail: "spoceEmail.com",
          standered: "ABC",
          country: "U.S.A",
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

export default Agencies;
