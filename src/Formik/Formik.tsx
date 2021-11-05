import React, { ReactElement } from "react";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { NameQuestion } from "../Fields/NameQuestion";
import { EmailQuestion } from "../Fields/EmailQuestion";
import { NumberQuestion } from "../Fields/NumberQuestion";
import { SelectQuestion } from "../Fields/SelectQuestion";
import { Button, FormHelperText, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { TextQuestion } from "../Fields/TextQuestion";
import { TextAreaQuestion } from "../Fields/TextAreaQuestion";
import { GenderQuestion } from "../Fields/GenderQuestion";
import { PhoneQuestion } from "../Fields/PhoneQuestion";
import { YearInSchoolQuestion } from "../Fields/YearInSchoolQuestion";
import { AddressQuestion } from "../Fields/AddressQuestion";

const blocks = [
  {
    id: "26c09fa0-f62e-4dc4-a568-b061da6fdb09",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Email",
    exportFieldTitle: null,
    type: "emailQuestion",
    required: false,
    position: 0,
    content: "",
    profileType: null,
    registrantTypes: [],
    rules: [],
  },
  {
    id: "122a15bf-0608-4813-834a-0d31a8c44c64",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Name",
    exportFieldTitle: null,
    type: "nameQuestion",
    required: true,
    position: 1,
    content: "",
    profileType: "NAME",
    registrantTypes: [],
    rules: [],
  },
  {
    id: "0556295a-3c4d-45b2-a00e-42b1fe199421",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Number",
    exportFieldTitle: null,
    type: "numberQuestion",
    required: false,
    position: 2,
    content: "",
    profileType: null,
    registrantTypes: [],
    rules: [],
  },
  {
    id: "2764e22b-8623-4c2b-81e5-f625574521f2",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Dropdown Question",
    exportFieldTitle: null,
    type: "selectQuestion",
    required: true,
    position: 3,
    content: {
      // default: "option 1",
      choices: [
        { value: "option 1", desc: "", amount: 5 },
        { value: "option 2", desc: "This is a description for value 2" },
      ],
    },
    profileType: null,
    registrantTypes: [],
    rules: [
      {
        id: "e211fa0b-2b23-41e1-afc4-a9a645d97f59",
        blockId: "2764e22b-8623-4c2b-81e5-f625574521f2",
        parentBlockId: "0556295a-3c4d-45b2-a00e-42b1fe199421",
        operator: ">",
        value: "12",
        position: 0,
      },
    ],
  },
  {
    id: "9a222b0a-ff34-44e8-8916-fdfad7260a25",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    registrantTypes: [],
    required: false,
    rules: [],
    title: "Text Question",
    type: "textQuestion",
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    id: "fb2a2502-31f8-4510-a077-9b7f41dd5c25",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    registrantTypes: [],
    required: true,
    rules: [],
    title: "TextArea",
    type: "textareaQuestion",
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    id: "8889a73f-f658-4682-bfdf-5507e533c5f2",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "GENDER",
    registrantTypes: [],
    required: false,
    rules: [],
    title: "Gender Question",
    type: "genderQuestion",
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    id: "d4186c2b-b5e7-4a28-b188-47b9d3077561",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "PHONE",
    registrantTypes: [],
    required: true,
    rules: [],
    title: "Telephone",
    type: "phoneQuestion",
  },
  {
    id: "8f877b39-2653-484b-beb7-30645a7d79d1",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "YEAR_IN_SCHOOL",
    registrantTypes: [],
    required: false,
    rules: [],
    title: "Year in School",
    type: "yearInSchoolQuestion",
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    id: "c703c972-8cc8-46d1-bafc-b34b6e967012",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "ADDRESS",
    registrantTypes: [],
    required: true,
    rules: [],
    title: "Address Question",
    type: "addressQuestion",
    content: {
      default: "",
      ruleoperand: "AND",
      forceSelections: {},
      forceSelectionRuleOperand: "AND",
    },
  },
];

enum QuestionTypes {
  addressQuestion,
  nameQuestion,
  emailQuestion,
  numberQuestion,
  selectQuestion,
  textQuestion,
  textareaQuestion,
  genderQuestion,
  phoneQuestion,
  yearInSchoolQuestion,
}

// grabbed from https://stackoverflow.com/a/62039270
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
// grabbed from https://stackoverflow.com/a/2577239
const zipCodeRegex = RegExp(/^\d{5}(?:[-\s]\d{4})?$/);

const createYupSchema = (schema: any, config: any = {}) => {
  // console.log(config);
  const requiredMessage = "This field is required";
  const { id, type, required } = config;
  let blockType = () => {
    switch (type) {
      case "addressQuestion":
        return yup.object({
          address1: required ? yup.string().required() : yup.string(),
          address2: yup.string().notRequired(),
          city: required ? yup.string().required() : yup.string(),
          state: required ? yup.string().required() : yup.string(),
          zip: required
            ? yup.string().matches(zipCodeRegex).required()
            : yup.string().matches(zipCodeRegex),
        });
      case "nameQuestion":
        return yup.object({
          firstName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
          lastName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
        });
      case "emailQuestion":
        return required
          ? yup
              .string()
              .email("Please enter a valid email such as: example@domain.com")
              .required(requiredMessage)
          : yup
              .string()
              .email("Please enter a valid email such as: example@domain.com");
      case "numberQuestion":
        return required ? yup.number().required(requiredMessage) : yup.number();
      case "phoneQuestion":
        return required
          ? yup
              .string()
              .matches(phoneRegex, "Invalid phone number")
              .required(requiredMessage)
          : yup.string().matches(phoneRegex, "Invalid phone number");
      case "textQuestion":
      case "textareaQuestion":
      case "selectQuestion":
      case "genderQuestion":
      case "yearInSchoolQuestion":
        return required ? yup.string().required(requiredMessage) : yup.string();
      default:
        return required ? yup.string().required(requiredMessage) : yup.string();
    }
  };

  if (Object.keys(QuestionTypes).indexOf(type) === -1) {
    return schema;
  }

  let validator = yup.object({
    amount: yup.number().default(0),
    blockId: yup.string().required(),
    id: yup.string().required(),
    registrantId: yup.string().required(),
    value: blockType(),
  });
  // rules.forEach((rule: any) => {
  //   if (!validator["min"]) {
  //     return;
  //   }
  //   // validator = validator[rule];
  // });
  schema[id] = validator;
  return schema;
};

export const ConferenceForm: React.FC = () => {
  const onSubmit = (attributes: any) => {
    console.log(attributes);
  };
  const yepSchema = blocks.reduce(createYupSchema, {});

  const validationSchema = yup.object().shape(yepSchema);
  const initialFormValues: any = {};
  blocks.forEach((block: any) => {
    const getBlockValue = () => {
      switch (block.type) {
        case "addressQuestion":
          return {
            amount: 0,
            blockId: "blockId",
            id: block.id,
            registrantId: "registrantId",
            value: {
              address1: "",
              address2: "",
              city: "",
              state: "",
              zip: "",
            },
          };
        case "nameQuestion":
          return {
            amount: 0,
            blockId: "blockId",
            id: block.id,
            registrantId: "registrantId",
            value: {
              firstName: "",
              lastName: "",
            },
          };
        case "emailQuestion":
        case "numberQuestion":
        case "selectQuestion":
        case "textQuestion":
        case "textareaQuestion":
        case "genderQuestion":
        case "phoneQuestion":
        case "yearInSchoolQuestion":
          return {
            amount: 0,
            blockId: "blockId",
            id: block.id,
            registrantId: "registrantId",
            value: block.content?.default ?? "",
          };
      }
    };
    initialFormValues[block.id] = getBlockValue() || "";
  });

  const renderFormElements = (props: FormikProps<any>): any => {
    return blocks.map((block: any, index) => {
      const fieldMap: any = {
        addressQuestion: AddressQuestion,
        nameQuestion: NameQuestion,
        emailQuestion: EmailQuestion,
        numberQuestion: NumberQuestion,
        selectQuestion: SelectQuestion,
        textQuestion: TextQuestion,
        textareaQuestion: TextAreaQuestion,
        genderQuestion: GenderQuestion,
        phoneQuestion: PhoneQuestion,
        yearInSchoolQuestion: YearInSchoolQuestion,
      };

      if (Object.keys(QuestionTypes).indexOf(block.type) === -1) return null;

      const Component = fieldMap[block.type];

      if (block.type) {
        return (
          <Component
            key={index}
            label={block.title}
            name={block.id}
            content={block.content}
            required={block.required}
          />
        );
      }
      return "";
    });
  };
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount={true}
    >
      {(props): ReactElement => (
        <Box display='flex' justifyContent='center'>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "582px",
              padding: "15px",
            }}
          >
            {renderFormElements(props)}
            <Grid container spacing={2} marginY={2}>
              <Grid item xs={3}>
                <Button variant='contained' color='neutral' fullWidth>
                  Go Back
                </Button>
              </Grid>
              <Grid container item xs={9} justifyContent='center'>
                <Button
                  disabled={
                    !props.isValid || props.isValidating || !props.dirty
                  }
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='success'
                  aria-disabled={
                    !props.isValid || props.isValidating || !props.dirty
                  }
                >
                  Submit
                </Button>
                {!props.isValid && (
                  <FormHelperText error={!props.isValid}>
                    Please fill in all required fields
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
