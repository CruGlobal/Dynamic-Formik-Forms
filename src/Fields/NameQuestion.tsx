import React from "react";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const NameQuestion = (props: any) => {
  const renderFieldError = (name: string) =>
    props.error?.value?.[name] ? (
      <strong>{props.error.value[name]}</strong>
    ) : null;
  const fieldHasError = (name: string) =>
    props.error?.value?.[name] !== undefined;

  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl
        fullWidth
        required={props.required}
        error={!!props.error?.value}
      >
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
              helperText={renderFieldError("firstName")}
              error={fieldHasError("firstName")}
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
              helperText={renderFieldError("lastName")}
              error={fieldHasError("lastName")}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
