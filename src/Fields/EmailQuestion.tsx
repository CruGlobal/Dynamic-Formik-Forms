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

export const EmailQuestion = ({ block }: QuestionBlockComponentProps) => {
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
                  type='email'
                  required={block.required}
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
