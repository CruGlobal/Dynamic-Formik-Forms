import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";

export const SelectQuestion = (props: any) => {
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
        <FormLabel>{props.label}</FormLabel>
        <Select
          fullWidth
          size='small'
          value={props.value.value}
          required={props.required}
          error={!!props.error?.value}
          onChange={(e) => {
            const choiceIndex = props.content?.choices.findIndex(
              (choice: { value: string; desc?: string; amount?: number }) =>
                choice.value === e.target.value
            );

            props.onSetFieldValue(props.name, {
              ...props.value,
              value: e.target.value,
              amount: props.content?.choices[choiceIndex].amount ?? 0,
            });
          }}
        >
          <MenuItem disabled value={""}>
            Choose one...
          </MenuItem>
          {props.content?.choices.map(
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
        <FormHelperText>{props?.error?.value}</FormHelperText>
      </FormControl>
    </Box>
  );
};
