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

export const AddressQuestion = (props: any) => {
  const fieldHasError = (name: string) =>
    props.error?.value?.[name] !== undefined;

  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl
        fullWidth
        required={props.required}
        error={!!props.error?.value}
      >
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
              <TextField
                type='text'
                fullWidth
                size='small'
                name={props.name}
                label={"Address Line 1"}
                value={props.value.value.address1}
                onChange={(e) =>
                  props.onSetFieldValue(props.name, {
                    ...props.value,
                    value: { ...props.value.value, address1: e.target.value },
                  })
                }
                error={fieldHasError("address1")}
              />
            </Grid>
            <Grid container item direction='column' xs={12}>
              <TextField
                type='text'
                fullWidth
                size='small'
                name={props.name}
                label={"Address Line 2"}
                value={props.value.value.address2}
                onChange={(e) =>
                  props.onSetFieldValue(props.name, {
                    ...props.value,
                    value: { ...props.value.value, address2: e.target.value },
                  })
                }
                error={fieldHasError("address2")}
              />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={4}>
                <TextField
                  type='text'
                  fullWidth
                  size='small'
                  name={props.name}
                  label={"City"}
                  value={props.value.value.city}
                  onChange={(e) =>
                    props.onSetFieldValue(props.name, {
                      ...props.value,
                      value: { ...props.value.value, city: e.target.value },
                    })
                  }
                  error={fieldHasError("city")}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth size='small'>
                  <InputLabel id='state-label'>State</InputLabel>
                  <Select
                    fullWidth
                    size='small'
                    labelId='state-label'
                    value={props.value.value.state}
                    label='State'
                    error={fieldHasError("state")}
                    onChange={(e) =>
                      props.onSetFieldValue(props.name, {
                        ...props.value,
                        value: { ...props.value.value, state: e.target.value },
                      })
                    }
                  >
                    <MenuItem value=''>State</MenuItem>
                    {Object.entries(states).map(([key, value]) => (
                      <MenuItem key={key} value={key} aria-label={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type='text'
                  fullWidth
                  size='small'
                  name={props.name}
                  label={"Postal Code"}
                  value={props.value.value.zip}
                  onChange={(e) =>
                    props.onSetFieldValue(props.name, {
                      ...props.value,
                      value: { ...props.value.value, zip: e.target.value },
                    })
                  }
                  error={fieldHasError("zip")}
                />
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
