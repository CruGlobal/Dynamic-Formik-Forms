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
import { FastField, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const RadioQuestion = ({ block }: QuestionBlockComponentProps) => {
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
                <RadioGroup {...field}>
                  {block.content.choices &&
                    block.content.choices.map((choice, index) => (
                      <FormControlLabel
                        key={index}
                        value={choice.value}
                        control={<Radio />}
                        label={`${choice.value} ${
                          choice.desc ? `- ${choice.desc}` : ""
                        } ${choice.amount ? `- $${choice.amount}` : ""}`}
                      />
                    ))}
                </RadioGroup>
                <FormHelperText>{meta.touched && meta.error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        )}
      </FastField>
    </Box>
  );
};
