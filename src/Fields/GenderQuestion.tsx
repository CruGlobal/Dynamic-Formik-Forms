import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";

export const GenderQuestion = (props: any) => {
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
            <RadioGroup
              aria-label='gender'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel value='F' control={<Radio />} label='Female' />
              <FormControlLabel value='M' control={<Radio />} label='Male' />
            </RadioGroup>
            <FormHelperText>{props?.error?.value}</FormHelperText>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
