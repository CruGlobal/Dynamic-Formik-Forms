import React from "react";
import { QuestionBlockComponentProps } from "../Formik/Formik";
import { Box } from "@mui/system";
import { FastField, FieldProps } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

export const CheckboxQuestion = (props: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FastField name={`${props.name}.value`}>
        {({ meta, form }: FieldProps) => (
          <FormControl
            fullWidth
            required={props.required}
            error={meta.touched && !!meta.error}
          >
            <FormLabel>{props.label}</FormLabel>
            <FormGroup>
              {props.content.choices &&
                props.content.choices.map((choice, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={form.values[props.name].value[choice.value]}
                        onChange={(e) => {
                          if (props.content.choices) {
                            form.setFieldValue(props.name, {
                              ...form.values[props.name],
                              value: {
                                ...form.values[props.name].value,
                                [props.content.choices[index].value]:
                                  !form.values[props.name].value[choice.value],
                              },
                              amount: props.content?.choices[index].amount ?? 0,
                            });
                          }
                        }}
                      />
                    }
                    label={`${choice.value} ${
                      choice.desc ? `- ${choice.desc}` : ""
                    } ${choice.amount ? `- $${choice.amount}` : ""}`}
                  />
                ))}
            </FormGroup>
          </FormControl>
        )}
      </FastField>
    </Box>
  );
};
