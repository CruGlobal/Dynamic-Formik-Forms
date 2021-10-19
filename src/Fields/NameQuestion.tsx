import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

export const NameQuestion = (props: any) => {
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
        <Grid container direction='column'>
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
            <Grid container item direction='column' xs={6}>
              <TextField
                type='text'
                fullWidth
                size='small'
                name={props.name}
                placeholder={"First Name"}
                value={props.value.value.firstName}
                onChange={(e) =>
                  props.onSetFieldValue(props.name, {
                    ...props.value,
                    value: { ...props.value.value, firstName: e.target.value },
                  })
                }
                required={props.required}
                error={fieldHasError("firstName")}
              />
              <FormHelperText>{props?.error?.value?.firstName}</FormHelperText>
            </Grid>
            <Grid container item direction='column' xs={6}>
              <TextField
                type='text'
                fullWidth
                size='small'
                name={props.name}
                placeholder={"Last Name"}
                value={props.value.value.lastName}
                onChange={(e) =>
                  props.onSetFieldValue(props.name, {
                    ...props.value,
                    value: { ...props.value.value, lastName: e.target.value },
                  })
                }
                required={props.required}
                error={fieldHasError("lastName")}
              />
              <FormHelperText>{props?.error?.value?.lastName}</FormHelperText>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
