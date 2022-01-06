import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { FastField, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const NameQuestion = (props: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl fullWidth required={props.required}>
        <Grid container direction='column'>
          <Grid item>
            <FormLabel required={props.required}>{props.label}</FormLabel>
          </Grid>
          <Grid
            container
            item
            direction='row'
            justifyContent='space-between'
            spacing={2}
          >
            <Grid container item direction='column' xs={6}>
              <FastField name={`${props.name}.value.firstName`}>
                {({ field, meta }: FieldProps) => (
                  <>
                    <TextField
                      fullWidth
                      type='text'
                      size='small'
                      placeholder={"First Name"}
                      required={props.required}
                      error={meta.touched && !!meta.error}
                      {...field}
                    />
                    <FormHelperText error={meta.touched && !!meta.error}>
                      {meta.touched && meta.error}
                    </FormHelperText>
                  </>
                )}
              </FastField>
            </Grid>
            <Grid container item direction='column' xs={6}>
              <FastField name={`${props.name}.value.lastName`}>
                {({ field, meta }: FieldProps) => (
                  <>
                    <TextField
                      fullWidth
                      type='text'
                      size='small'
                      placeholder={"Last Name"}
                      required={props.required}
                      error={meta.touched && !!meta.error}
                      {...field}
                    />
                    <FormHelperText error={meta.touched && !!meta.error}>
                      {meta.touched && meta.error}
                    </FormHelperText>
                  </>
                )}
              </FastField>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
