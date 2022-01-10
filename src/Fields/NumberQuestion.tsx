import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { FormControl, FormHelperText, FormLabel, Grid } from "@mui/material";
import { FastField, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const NumberQuestion = ({ block }: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FastField name={`${block.id}.value`}>
        {({ field, meta }: FieldProps) => (
          <FormControl
            fullWidth
            required={block.required}
            error={meta.touched && !!meta.error}
          >
            <Grid container direction='column'>
              <Grid item>
                <FormLabel required={block.required}>{block.title}</FormLabel>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  size='small'
                  type='number'
                  error={meta.touched && !!meta.error}
                  {...field}
                />
                <FormHelperText>{meta.touched && meta.error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        )}
      </FastField>
    </Box>
  );
};
