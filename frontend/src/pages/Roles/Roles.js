import { Add } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import CustomSelect from "../../Components/CustomSelect";

function Roles() {
  const intialFormState = {
    roles: {
      type: "Select",
      value: null,
      manditory: true,
      error: false,
    },
    description: {
      type: "textfield",
      value: null,
      manditory: true,
      error: false,
    },
    specification: {
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
    <Grid container component="main" id={forceRender}>
      <Grid item md={12}>
        <CustomButton
          msg={"Add"}
          icon={{ item: <Add /> }}
          onClick={() => submitFormDetails()}
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={2} mr={2}>
        <CustomSelect
          label={"Roles "}
          data={test}
          selectedValue={formState?.roles?.value}
          hasError={formState?.roles?.error}
          setSelectedValue={(val) =>
            setFormState({
              ...formState,
              roles: {
                ...formState?.roles,
                value: val,
              },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={2}>
        <TextField
          id="description"
          label="Description"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.description?.value}
          error={formState?.description?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: { ...formState?.description, value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4}>
        <TextField
          id="specification"
          label="Specification"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.specification?.value || ""}
          error={formState?.specification?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              specification: {
                ...formState?.specification,
                value: e.target.value,
              },
            })
          }
        />
      </Grid>
    </Grid>
  );
}

export default Roles;
