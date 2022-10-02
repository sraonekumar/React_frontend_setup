import { Add } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import CustomSelect from "../../Components/CustomSelect";
import UnitTable from "./UnitTable";

function Unit() {
  const intialFormState = {
    name: {
      type: "Select",
      value: null,
      manditory: true,
      error: false,
    },
    description: {
      type: "Select",
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
    group: {
      type: "textfield",
      value: null,
      manditory: true,
      error: false,
    },
  };
  const [formState, setFormState] = useState(intialFormState);
  const [forceRender, setForceRender] = useState(new Date().getTime());

  const [formVisible, setFormVisible] = useState(false);
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
        {" "}
        <CustomButton
          msg={"Add"}
          icon={{ item: <Add /> }}
          onClick={() => {
            setFormVisible(!formVisible);
            //submitFormDetails();
          }}
        />
      </Grid>
      {!formVisible ? (
        <>
          <Grid item xs={false} sm={4} md={5} mt={2} mr={2}>
            <CustomSelect
              label={"Name"}
              data={test}
              selectedValue={formState?.name?.value}
              hasError={formState?.name?.error}
              setSelectedValue={(val) =>
                setFormState({
                  ...formState,
                  name: {
                    ...formState?.name,
                    value: val,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={false} sm={4} md={5} mt={2}>
            <CustomSelect
              label={"Description"}
              data={test}
              selectedValue={formState?.description?.value}
              hasError={formState?.description?.error}
              setSelectedValue={(val) =>
                setFormState({
                  ...formState,
                  description: {
                    ...formState?.description,
                    value: val,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={false} sm={4} md={5} mt={4} mr={2}>
            <TextField
              id="group"
              label="Group"
              variant="filled"
              sx={{ width: "100%" }}
              value={formState?.group?.value}
              error={formState?.group?.error}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  group: {
                    ...formState?.group,
                    value: e.target.value,
                  },
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
              value={formState?.specification?.value}
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
        </>
      ) : (
        <UnitTable />
      )}
    </Grid>
  );
}

export default Unit;
