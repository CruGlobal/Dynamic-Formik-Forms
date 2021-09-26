import React from "react";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const NameQuestion = (props: any) => {
  // const renderError = props.error ? <strong>{props.error}</strong> : null;
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl fullWidth>
        <Grid container direction='column'>
          <Grid item>
            <FormLabel required={props.required}>{props.label}</FormLabel>
          </Grid>
          <Grid item>
            <TextField
              type='text'
              name={props.name}
              placeholder={"First Name"}
              value={props.value.value.firstName}
              onChange={(e) =>
                props.onSetFieldValue(props.name, {
                  ...props.value,
                  value: { ...props.value.value, firstName: e.target.value },
                })
              }
              required={props.required}
              // helperText={renderError}
              error={props.error}
            />
            <TextField
              type='text'
              name={props.name}
              placeholder={"Last Name"}
              value={props.value.value.lastName}
              onChange={(e) =>
                props.onSetFieldValue(props.name, {
                  ...props.value,
                  value: { ...props.value.value, lastName: e.target.value },
                })
              }
              required={props.required}
              // helperText={renderError}
              // error={props.error}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
