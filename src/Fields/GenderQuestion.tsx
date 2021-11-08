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
import { Field, FieldProps } from "formik";

export const GenderQuestion = (props: any) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <Field name={`${props.name}.value`}>
        {({ field, meta }: FieldProps) => (
          <FormControl
            fullWidth
            required={props.required}
            error={meta.touched && !!meta.error}
          >
            <Grid container direction='column'>
              <Grid item>
                <FormLabel required={props.required}>{props.label}</FormLabel>
              </Grid>
              <Grid item>
                <RadioGroup aria-label='gender' {...field}>
                  <FormControlLabel
                    value='F'
                    control={<Radio />}
                    label='Female'
                  />
                  <FormControlLabel
                    value='M'
                    control={<Radio />}
                    label='Male'
                  />
                </RadioGroup>
                <FormHelperText>{meta.touched && meta.error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
