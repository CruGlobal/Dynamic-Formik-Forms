import React from "react";
import { MobileDatePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { QuestionBlockComponentProps } from "../Formik/Formik";
import { Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { DateTime } from "luxon";
import CalendarIcon from "@mui/icons-material/Event";

export const DateQuestion = (props: QuestionBlockComponentProps) => {
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
            <FormLabel style={{ marginBottom: "10px" }}>
              {props.label}
            </FormLabel>
            <MobileDatePicker
              inputFormat='MM/dd/yyyy'
              InputProps={{
                "aria-label": props.label,
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
                  ? form.setFieldValue(props.name, {
                      ...form.values[props.name],
                      value: "",
                    })
                  : form.setFieldValue(props.name, {
                      ...form.values[props.name],
                      value: `${date.year}-${date.month}-${date.day}`,
                    });
              }}
              minDate={
                props.content.range?.min
                  ? DateTime.fromFormat(props.content.range?.min, "yyyy-MM-dd")
                  : undefined
              }
              maxDate={
                props.content.range?.max
                  ? DateTime.fromFormat(props.content.range?.max, "yyyy-MM-dd")
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
      </Field>
    </Box>
  );
};
