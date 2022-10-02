import { Add } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";

function UnitGroup() {
  const intialFormState = {
    name: {
      type: "textfield",
      value: null,
      manditory: true,
      error: false,
    },
    description: {
      type: "textfield",
      value: null,
      manditory: false,
      error: false,
    },
  };
  const [formState, setFormState] = useState(intialFormState);
  const [forceRender, setForceRender] = useState(new Date().getTime());
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
        {" "}
        <CustomButton
          msg={"Add"}
          icon={{ item: <Add /> }}
          onClick={() => submitFormDetails()}
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4} mr={2}>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          sx={{ width: "100%" }}
          value={formState?.name?.value}
          error={formState?.name?.error}
          onChange={(e) =>
            setFormState({
              ...formState,
              name: { ...formState?.name, value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={false} sm={4} md={5} mt={4}>
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
    </Grid>
  );
}

export default UnitGroup;
