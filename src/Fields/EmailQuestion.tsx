import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

export const EmailQuestion = (props: any) => {
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
              error={!!props.error?.value}
            />
            <FormHelperText>{props?.error?.value}</FormHelperText>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
