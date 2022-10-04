import React from "react";
import CustomDataGrid from "../../Components/CustomDataGrid";
import CustomSwitch from "../../Components/CustomSwitch";

function Categories() {
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
      title: "ESG Area",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Status (Active / In-active)",
      sorting: true,
      direction: "asc",
    },
  ];

  const handleChange = (data) => console.log(data);
  const switchComp = (id) => {
    return <CustomSwitch id={id} handleChange={handleChange} />;
  };
  const generateData = () => {
    let sample = [];
    for (let i = 0; i < 10; i++) {
      sample = [
        ...sample,
        {
          category: "Loreal ipsum",
          description: "ipsum",
          ESGArea: "spoceEmail.com",
          status: switchComp(i),
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  return (
    <>
      {" "}
      <CustomDataGrid headers={headers} rows={data} title={"Categories"} />{" "}
    </>
  );
}

export default Categories;
