import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const PhoneQuestion = (props: QuestionBlockComponentProps) => {
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
                <TextField
                  fullWidth
                  size='small'
                  type='tel'
                  error={meta.touched && !!meta.error}
                  required={props.required}
                  {...field}
                />
                <FormHelperText>{meta.touched && meta.error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
