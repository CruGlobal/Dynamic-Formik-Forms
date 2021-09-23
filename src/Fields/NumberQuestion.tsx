import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { FormControl, FormLabel, Grid } from "@mui/material";

export const NumberQuestion = (props: any) => {
  //   const renderError = props.error ? <strong>{props.error}</strong> : null;
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
              type='number'
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
