import React from "react";
import { MobileDatePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { QuestionBlockComponentProps } from "../Formik/Formik";
import { FastField, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { DateTime } from "luxon";
import CalendarIcon from "@mui/icons-material/Event";

export const DateQuestion = ({ block }: QuestionBlockComponentProps) => {
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
            <FormLabel style={{ marginBottom: "10px" }}>
              {block.title}
            </FormLabel>
            <MobileDatePicker
              inputFormat='MM/dd/yyyy'
              InputProps={{
                "aria-label": block.title,
                startAdornment: (
                  <InputAdornment position='start'>
                    <CalendarIcon />
                  </InputAdornment>
                ),
              }}
              renderInput={(params) => (
                <TextField
                  placeholder='Select a date...'
                  size='small'
                  {...params}
                />
              )}
              {...field}
              clearable
              onChange={(date: DateTime | null) => {
                !date
                  ? form.setFieldValue(block.id, {
                      ...form.values[block.id],
                      value: "",
                    })
                  : form.setFieldValue(block.id, {
                      ...form.values[block.id],
                      value: date?.toFormat("yyyy-MM-dd"),
                    });
              }}
              minDate={
                block.content.range?.min
                  ? DateTime.fromFormat(block.content.range?.min, "yyyy-MM-dd")
                  : undefined
              }
              maxDate={
                block.content.range?.max
                  ? DateTime.fromFormat(block.content.range?.max, "yyyy-MM-dd")
                  : undefined
              }
              value={
                field.value
                  ? DateTime.fromFormat(field.value, "yyyy-MM-dd")
                  : null
              }
            />
          </FormControl>
        )}
      </FastField>
    </Box>
  );
};
