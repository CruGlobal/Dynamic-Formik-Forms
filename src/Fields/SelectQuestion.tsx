import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const SelectQuestion = (props: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <Field name={`${props.name}.value`}>
        {({ field, meta, form }: FieldProps) => (
          <FormControl
            fullWidth
            required={props.required}
            error={meta.touched && !!meta.error}
          >
            <FormLabel>{props.label}</FormLabel>
            <Select
              fullWidth
              size='small'
              required={props.required}
              error={meta.touched && !!meta.error}
              {...field}
              onChange={(e) => {
                if (props.content.choices) {
                  const choiceIndex = props.content?.choices.findIndex(
                    (choice: {
                      value: string;
                      desc?: string;
                      amount?: number;
                    }) => choice.value === e.target.value
                  );

                  form.setFieldValue(props.name, {
                    ...form.values[props.name],
                    value: e.target.value,
                    amount: props.content?.choices[choiceIndex].amount ?? 0,
                  });
                }
              }}
            >
              <MenuItem disabled value={""}>
                Choose one...
              </MenuItem>
              {props.content.choices &&
                props.content?.choices.map(
                  (
                    choice: { value: string; desc?: string; amount?: number },
                    index: number
                  ) => (
                    <MenuItem
                      key={index}
                      value={choice.value}
                      aria-label={choice.desc}
                    >
                      {`${choice.value} ${
                        choice.amount ? `- $${choice.amount}` : ""
                      }`}
                    </MenuItem>
                  )
                )}
            </Select>
            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
