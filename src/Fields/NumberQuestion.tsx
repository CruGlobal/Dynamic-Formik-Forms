import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { FormControl, FormHelperText, FormLabel, Grid } from "@mui/material";

export const NumberQuestion = (props: any) => {
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
        error={props.error?.value}
      >
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
              error={!!props.error?.value}
            />
            <FormHelperText>{props?.error?.value}</FormHelperText>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
