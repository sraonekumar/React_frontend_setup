import { Add } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import CustomRadioGroups from "../../common/components/ui/CustomRadioGroup";
import CustomButton from "../../Components/CustomButton";
import CustomDataGrid from "../../Components/CustomDataGrid";
import KPIsForms from "./KPIsForms";

function KPIs() {
  const [formVisible, setFormVisible] = useState(false);
  const headers = [
    {
      title: "Area",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Category",
      sorting: true,
      direction: "asc",
    },
    {
      title: "KPI's",
      sorting: true,
      direction: "asc",
    },
    {
      title: "KPI's Description",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Status (Active/In-Active)",
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
          area: "Loreal ipsum",
          catgory: "ipsum",
          kpis: "spoceEmail.com",
          kpisDescription: "spoceEmail.comABC",
          status: "U.S.A",
        },
      ];
    }
    return sample;
  };
  const data = generateData();
  const sampleRadioGrp = [
    {
      id: 1,
      value: "Environment",
      status: false,
      label: "Environment",
      disabled: false,
    },
    {
      id: 2,
      value: "Social",
      status: false,
      label: "Social",
      disabled: false,
    },
    {
      id: 3,
      value: "Governance",
      status: false,
      label: "Governance",
      disabled: true,
    },
    {
      id: 4,
      value: "All",
      status: false,
      label: "All",
      disabled: false,
    },
  ];

  return (
    <>
      <Grid container>
        <Box sx={{ display: "flex" }}>
          <CustomButton
            msg={"add"}
            icon={{ item: <Add /> }}
            onClick={() => {
              console.log("added");
              setFormVisible(!formVisible);
            }}
          />
          {!formVisible && (
            <div style={{ margin: "10px 20px" }}>
              <CustomRadioGroups
                radioGroup={sampleRadioGrp}
                customStyle={{
                  width: "270px",
                  "& .MuiButtonBase-root": {
                    width: "30px",
                  },
                }}
              />
            </div>
          )}
        </Box>
        {!formVisible ? (
          <CustomDataGrid headers={headers} rows={data} title={"KPIs"} />
        ) : (
          <KPIsForms />
        )}
      </Grid>
    </>
  );
}

export default KPIs;
