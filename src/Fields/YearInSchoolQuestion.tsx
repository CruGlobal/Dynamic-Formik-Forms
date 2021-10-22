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

enum SchoolYearsEnum {
  Freshman = "Freshman",
  Sophomore = "Sophomore",
  Junior = "Junior",
  Senior = "Senior",
  GraduateStudent = "Graduate Student",
}

export const YearInSchoolQuestion = (props: any) => {
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
        <Grid container direction='column'>
          <Grid item>
            <FormLabel required={props.required}>{props.label}</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup
              aria-label='gender'
              defaultValue=''
              name='radio-buttons-group'
            >
              {Object.values(SchoolYearsEnum).map((year) => (
                <FormControlLabel
                  value={year}
                  control={<Radio />}
                  label={year}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{props?.error?.value}</FormHelperText>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
