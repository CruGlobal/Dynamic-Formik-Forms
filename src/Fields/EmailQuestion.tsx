import React from "react";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const EmailQuestion = (props: any) => {
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
              fullWidth
              type='email'
              name={props.name}
              value={props.value.value}
              onChange={(e) =>
                props.onSetFieldValue(props.name, {
                  ...props.value,
                  value: e.target.value,
                })
              }
              required={props.required}
              // helperText={renderError}
              //   error={props.error}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
