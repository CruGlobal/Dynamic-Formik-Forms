import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { FastField, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const SelectQuestion = ({ block }: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FastField name={`${block.id}.value`}>
        {({ field, meta, form }: FieldProps) => (
          <FormControl
            fullWidth
            required={block.required}
            error={meta.touched && !!meta.error}
          >
            <FormLabel>{block.title}</FormLabel>
            <Select
              fullWidth
              size='small'
              required={block.required}
              error={meta.touched && !!meta.error}
              {...field}
              onChange={(e) => {
                if (block.content.choices) {
                  const choiceIndex = block.content?.choices.findIndex(
                    (choice: {
                      value: string;
                      desc?: string;
                      amount?: number;
                    }) => choice.value === e.target.value
                  );

                  form.setFieldValue(block.id, {
                    ...form.values[block.id],
                    value: e.target.value,
                    amount: block.content?.choices[choiceIndex].amount ?? 0,
                  });
                }
              }}
            >
              <MenuItem disabled value={""}>
                Choose one...
              </MenuItem>
              {block.content.choices &&
                block.content?.choices.map(
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
      </FastField>
    </Box>
  );
};
