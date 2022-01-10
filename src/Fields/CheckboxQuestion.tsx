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

export const CheckboxQuestion = ({ block }: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FastField name={`${block.id}.value`}>
        {({ meta, form }: FieldProps) => (
          <FormControl
            fullWidth
            required={block.required}
            error={meta.touched && !!meta.error}
          >
            <FormLabel>{block.title}</FormLabel>
            <FormGroup>
              {block.content.choices &&
                block.content.choices.map((choice, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={form.values[block.id].value[choice.value]}
                        onChange={(e) => {
                          if (block.content.choices) {
                            form.setFieldValue(block.id, {
                              ...form.values[block.id],
                              value: {
                                ...form.values[block.id].value,
                                [block.content.choices[index].value]:
                                  !form.values[block.id].value[choice.value],
                              },
                              amount: block.content?.choices[index].amount ?? 0,
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
