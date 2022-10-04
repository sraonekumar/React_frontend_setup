import { Add } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import CustomSelect from "../../Components/CustomSelect";

function KPIsForms() {
  const intialFormState = {
    area: {
      type: "Select",
      value: null,
      manditory: true,
      error: false,
    },
    category: {
      type: "Select",
      value: null,
      manditory: true,
      error: false,
    },
    kpis: {
      type: "textfield",
      value: null,
      manditory: true,
      error: false,
    },
    kpisDescription: {
      type: "textfield",
      value: null,
      manditory: false,
      error: false,
    },
    unitgroup: {
      type: "textfield",
      value: null,
      manditory: true,
      error: false,
    },
    baseUnit: {
      type: "textfield",
      value: null,
      manditory: false,
      error: false,
    },
    addOrRemove: {
      type: "textfield",
      value: null,
      manditory: false,
      error: false,
    },
  };
  const [formState, setFormState] = useState(intialFormState);
  const [forceRender, setForceRender] = useState(new Date().getTime());

  const sampleData = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data = [...data, { id: i, value: i, name: `test ${i}` }];
    }
    return data;
  };
  let test = sampleData();
  const submitFormDetails = () => {
    Object?.entries(formState)?.map((item) => {
      let [key, value] = item;
      formState[key].error = value?.manditory && !value.value ? true : false;
    });
    setForceRender(new Date().getTime());
  };
  return (
    <Grid container component="main">
      {/* <Grid item md={12}>
        <CustomButton
          msg={"Add"}
          icon={{ item: <Add /> }}
          onClick={() => submitFormDetails()}
        />
      </Grid> */}
      <Grid item xs={false} sm={4} md={5} mt={2} mr={2}>
        <CustomSelect
          label={"Area"}
          data={test}
          selectedValue={formState?.area?.value}
          hasError={formState?.area?.error}
          setSelectedValue={(val) =>
            setFormState({
              ...formState,
              area: {
                ...formState?.area,
                value: val,
              },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={2}>
        <CustomSelect
          label={"category"}
          data={test}
          selectedValue={formState?.category?.value}
          hasError={formState?.category?.error}
          setSelectedValue={(val) =>
            setFormState({
              ...formState,
              category: {
                ...formState?.category,
                value: val,
              },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4} mr={2}>
        <TextField
          id="KPI's"
          label="KPI's"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.kpis?.value}
          error={formState?.kpis?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: { ...formState?.kpis, value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4}>
        <TextField
          id="KPI's Description"
          label="KPI's Description"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.kpisDescription?.value}
          error={formState?.kpisDescription?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: {
                ...formState?.kpisDescription,
                value: e.target.value,
              },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4} mr={2}>
        <TextField
          id="Unit Group"
          label="Unit Group"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.unitgroup?.value}
          error={formState?.unitgroup?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: { ...formState?.unitgroup, value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4}>
        <TextField
          id="Base Unit"
          label="Base Unit"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.baseUnit?.value}
          error={formState?.baseUnit?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: { ...formState?.baseUnit, value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4} mr={2}>
        <TextField
          id="AddOrRemove"
          label="+/-(Add/Remove)"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.addOrRemove?.value}
          error={formState?.addOrRemove?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: { ...formState?.addOrRemove, value: e.target.value },
            })
          }
        />
      </Grid>
    </Grid>
  );
}

export default KPIsForms;
