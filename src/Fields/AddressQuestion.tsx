import React from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { FastField, FieldProps } from "formik";
import { QuestionBlockComponentProps } from "../Formik/Formik";

export const AddressQuestion = (props: QuestionBlockComponentProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl fullWidth required={props.required}>
        <Grid container direction='column' spacing={1}>
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
            <Grid container item direction='column' xs={12}>
              <FastField name={`${props.name}.value.address1`}>
                {({ field, meta }: FieldProps) => (
                  <TextField
                    fullWidth
                    type='text'
                    size='small'
                    label={"Address Line 1"}
                    error={meta.touched && !!meta.error}
                    {...field}
                  />
                )}
              </FastField>
            </Grid>
            <Grid container item direction='column' xs={12}>
              <FastField name={`${props.name}.value.address2`}>
                {({ field, meta }: FieldProps) => (
                  <TextField
                    fullWidth
                    type='text'
                    size='small'
                    label={"Address Line 2"}
                    error={meta.touched && !!meta.error}
                    {...field}
                  />
                )}
              </FastField>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={4}>
                <FastField name={`${props.name}.value.city`}>
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      fullWidth
                      type='text'
                      size='small'
                      label={"City"}
                      error={meta.touched && !!meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>
              <Grid item xs={4}>
                <FastField name={`${props.name}.value.state`}>
                  {({ field, meta }: FieldProps) => (
                    <FormControl fullWidth size='small'>
                      <InputLabel id='state-label'>State</InputLabel>
                      <Select
                        fullWidth
                        size='small'
                        labelId='state-label'
                        label='State'
                        error={meta.touched && !!meta.error}
                        {...field}
                      >
                        <MenuItem value=''>State</MenuItem>
                        {Object.entries(states).map(([key, value]) => (
                          <MenuItem key={key} value={key} aria-label={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </FastField>
              </Grid>
              <Grid item xs={4}>
                <FastField name={`${props.name}.value.zip`}>
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      fullWidth
                      type='text'
                      size='small'
                      label={"Postal Code"}
                      error={meta.touched && !!meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

const states = {
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};
