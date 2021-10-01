import React from "react";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const TextQuestion = (props: any) => {
  const renderError = props.error?.value ? (
    <strong>{props.error.value}</strong>
  ) : null;

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
              fullWidth
              type='text'
              name={props.name}
              placeholder={""}
              value={props.value.value}
              onChange={(e) =>
                props.onSetFieldValue(props.name, {
                  ...props.value,
                  value: e.target.value,
                })
              }
              required={props.required}
              helperText={renderError}
              error={!!props.error?.value}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
