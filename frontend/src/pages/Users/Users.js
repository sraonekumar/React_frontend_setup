import { Add } from "@mui/icons-material";
import React from "react";
import CustomButton from "../../Components/CustomButton";
import CustomDataGrid from "../../Components/CustomDataGrid";
import CustomSwitch from "../../Components/CustomSwitch";

function Users() {
  const headers = [
    {
      title: "F Name",
      sorting: true,
      direction: "asc",
    },
    {
      title: "L Name",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Email",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Role",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Company",
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
          fname: "Loreal ipsum",
          lname: "ipsum",
          email: "spoce@gmail.com",
          role: "ipsum",
          company: "ipsum",
          status: switchComp(i),
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  return (
    <>
      <CustomButton msg={"Add"} icon={{ item: <Add /> }} />
      <CustomDataGrid headers={headers} rows={data} title={"Categories"} />{" "}
    </>
  );
}

export default Users;
