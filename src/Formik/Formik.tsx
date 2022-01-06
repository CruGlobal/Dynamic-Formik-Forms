import React, { ReactElement, useMemo } from "react";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { NameQuestion } from "../Fields/NameQuestion";
import { EmailQuestion } from "../Fields/EmailQuestion";
import { NumberQuestion } from "../Fields/NumberQuestion";
import { SelectQuestion } from "../Fields/SelectQuestion";
import {
  AppBar,
  Button,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { TextQuestion } from "../Fields/TextQuestion";
import { TextAreaQuestion } from "../Fields/TextAreaQuestion";
import { GenderQuestion } from "../Fields/GenderQuestion";
import { PhoneQuestion } from "../Fields/PhoneQuestion";
import { YearInSchoolQuestion } from "../Fields/YearInSchoolQuestion";
import { AddressQuestion } from "../Fields/AddressQuestion";
import { CheckboxQuestion } from "../Fields/CheckboxQuestion";
import { RadioQuestion } from "../Fields/RadioQuestion";
import { DateQuestion } from "../Fields/DateQuestion";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import theme from "../theme";

//#region Types
export interface QuestionBlock {
  adminOnly: boolean;
  id: string;
  pageId: string;
  title: string;
  exportField?: string | null;
  expenseType?: string | null;
  endDateBlockId?: string | null;
  startDateBlockId?: string | null;
  exportFieldTitle?: string | null;
  type: QuestionTypesEnum;
  tag?: string | null;
  required: boolean;
  position: number;
  profileType: string | null;
  registrantTypes: string[];
  rules: RuleType[];
  content: QuestionBlockContentType;
}

interface QuestionBlockContentType {
  default: string | {};
  forceSelectionRuleOperand: "AND" | "OR";
  forceSelections: {};
  ruleoperand: "AND" | "OR";
  choices?: QuestionBlockChoiceType[];
  otherOption?: Record<string, boolean>;
  range?: { min: string; max: string };
}

export interface QuestionBlockChoiceType {
  value: string;
  desc: string;
  amount?: number;
  operand?: "AND" | "OR";
}

export interface RegistrantType {
  acceptChecks: boolean;
  acceptCreditCards: boolean;
  acceptPayOnSite: boolean;
  acceptScholarships: boolean;
  acceptTransfers: boolean;
  allowGroupRegistration: boolean;
  allowedRegistrantTypeSet: null;
  answers: RegistrantAnswerType[];
  availableSlots: number;
  calculatedCurrentCost: number;
  conferenceId: string;
  cost: number;
  createdTimestamp: string | null;
  customConfirmationEmailText: string | null;
  defaultTypeKey: string | null;
  description: string | null;
  earlyRegistrationDiscounts: [];
  eform: boolean;
  familyStatus: string;
  groupSubRegistrantType: boolean;
  hidden: boolean;
  id: string;
  lastUpdaedTimestamp: string;
  minimumDesposit: number | null;
  name: string;
  numberSlotsLimit: number;
  position: number;
  registrationCompletedRedirect: string | null;
  registrantTypeId: string;
  useLimit: boolean;
}

interface RegistrantAnswerType {
  amount: number;
  blockId: string;
  id: string;
  lastUpdatedTimestamp: string;
  value: string | Record<string, string>;
}

export interface RuleType {
  blockEntityOption: string;
  blockId: string;
  id: string;
  operator: ">" | "=" | "!=" | "<";
  position: number;
  parentBlockId: string;
  ruleType: RuleTypeConstantsEnum | null;
  value: string;
}

export interface QuestionBlockComponentProps {
  label: string;
  name: string;
  content: QuestionBlockContentType;
  required: boolean;
}

export enum QuestionTypesEnum {
  AddressQuestion = "addressQuestion",
  // CampusQuestion = "campusQuestion",
  CheckboxQuestion = "checkboxQuestion",
  DateQuestion = "dateQuestion",
  EmailQuestion = "emailQuestion",
  GenderQuestion = "genderQuestion",
  NameQuestion = "nameQuestion",
  NumberQuestion = "numberQuestion",
  PhoneQuestion = "phoneQuestion",
  RadioQuestion = "radioQuestion",
  SelectQuestion = "selectQuestion",
  TextQuestion = "textQuestion",
  TextareaQuestion = "textareaQuestion",
  YearInSchoolQuestion = "yearInSchoolQuestion",
}

export enum RuleTypeConstantsEnum {
  SHOW_QUESTION = "SHOW_QUESTION",
  FORCE_SELECTION = "FORCE_SELECTION",
  SHOW_OPTION = "SHOW_OPTION",
}
//#endregion

//#region JSON Data
const blocks: QuestionBlock[] = [
  {
    adminOnly: false,
    id: "26c09fa0-f62e-4dc4-a568-b061da6fdb09",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Email",
    exportFieldTitle: null,
    type: QuestionTypesEnum.EmailQuestion,
    required: false,
    position: 0,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
    profileType: null,
    registrantTypes: [],
    rules: [],
  },
  {
    adminOnly: false,
    id: "122a15bf-0608-4813-834a-0d31a8c44c64",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Name",
    exportFieldTitle: null,
    type: QuestionTypesEnum.NameQuestion,
    required: true,
    position: 1,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
    profileType: "NAME",
    registrantTypes: [],
    rules: [],
  },
  {
    adminOnly: false,
    id: "0556295a-3c4d-45b2-a00e-42b1fe199421",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Number",
    exportFieldTitle: null,
    type: QuestionTypesEnum.NumberQuestion,
    required: false,
    position: 2,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
    profileType: null,
    registrantTypes: [],
    rules: [],
  },
  {
    adminOnly: false,
    id: "2764e22b-8623-4c2b-81e5-f625574521f2",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Dropdown Question",
    exportFieldTitle: null,
    type: QuestionTypesEnum.SelectQuestion,
    required: true,
    position: 3,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
      choices: [
        { value: "option 1", desc: "", amount: 5 },
        { value: "option 2", desc: "This is a description for value 2" },
      ],
    },
    profileType: null,
    registrantTypes: [],
    rules: [
      {
        blockEntityOption: "",
        id: "e211fa0b-2b23-41e1-afc4-a9a645d97f59",
        blockId: "2764e22b-8623-4c2b-81e5-f625574521f2",
        parentBlockId: "0556295a-3c4d-45b2-a00e-42b1fe199421",
        operator: ">",
        value: "12",
        position: 0,
        ruleType: RuleTypeConstantsEnum.SHOW_QUESTION,
      },
    ],
  },
  {
    adminOnly: false,
    id: "9a222b0a-ff34-44e8-8916-fdfad7260a25",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    exportFieldTitle: null,
    registrantTypes: [],
    required: false,
    position: 4,
    rules: [],
    title: "Text Question",
    type: QuestionTypesEnum.TextQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "fb2a2502-31f8-4510-a077-9b7f41dd5c25",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    exportFieldTitle: null,
    registrantTypes: [],
    required: true,
    position: 5,
    rules: [],
    title: "TextArea",
    type: QuestionTypesEnum.TextareaQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "8889a73f-f658-4682-bfdf-5507e533c5f2",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "GENDER",
    registrantTypes: [],
    exportFieldTitle: null,
    required: false,
    position: 6,
    rules: [],
    title: "Gender Question",
    type: QuestionTypesEnum.GenderQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "d4186c2b-b5e7-4a28-b188-47b9d3077561",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "PHONE",
    registrantTypes: [],
    exportFieldTitle: null,
    required: true,
    position: 7,
    rules: [],
    title: "Telephone",
    type: QuestionTypesEnum.PhoneQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "8f877b39-2653-484b-beb7-30645a7d79d1",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "YEAR_IN_SCHOOL",
    registrantTypes: [],
    exportFieldTitle: null,
    required: false,
    position: 8,
    rules: [],
    title: "Year in School",
    type: QuestionTypesEnum.YearInSchoolQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "c703c972-8cc8-46d1-bafc-b34b6e967012",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "ADDRESS",
    registrantTypes: [],
    exportFieldTitle: null,
    required: true,
    position: 9,
    rules: [],
    title: "Address Question",
    type: QuestionTypesEnum.AddressQuestion,
    content: {
      default: "",
      ruleoperand: "AND",
      forceSelections: {},
      forceSelectionRuleOperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "cc0850e7-6c0f-42ab-841b-09696229f360",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    registrantTypes: [],
    required: false,
    position: 10,
    rules: [],
    title: "Checkbox Question",
    type: QuestionTypesEnum.CheckboxQuestion,
    content: {
      choices: [
        {
          value: "check1",
          desc: "",
          operand: "OR",
          // ammount: 5
        },
        { value: "check2", desc: "", operand: "OR" },
        { value: "check3", desc: "", operand: "OR" },
      ],
      default: {},
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    id: "6fecd777-47b4-4579-afbc-5e337ec844ea",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: null,
    registrantTypes: [],
    required: false,
    position: 11,
    rules: [],
    title: "Multiple Choice Question",
    type: QuestionTypesEnum.RadioQuestion,
    content: {
      choices: [
        {
          value: "blue",
          desc: "",
          operand: "OR",
        },
        {
          value: "red",
          desc: "",
          operand: "OR",
        },
      ],
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      otherOption: { enabled: false },
      ruleoperand: "AND",
    },
  },
  {
    adminOnly: false,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      range: { min: "2021-12-13", max: "2021-12-30" },
      ruleoperand: "AND",
    },
    endDateBlockId: null,
    expenseType: null,
    exportFieldTitle: null,
    id: "58ed8507-9a43-4b0c-8920-c7975a41f82b",
    pageId: "f28e7c56-afea-4b59-82eb-925f23c7716e",
    position: 12,
    profileType: null,
    registrantTypes: [],
    required: false,
    rules: [],
    startDateBlockId: null,
    tag: null,
    title: "Cool Date",
    type: QuestionTypesEnum.DateQuestion,
  },
];
//#endregion

//#region Yup Scehma Creation
// grabbed from https://stackoverflow.com/a/62039270
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
// grabbed from https://stackoverflow.com/a/2577239
const zipCodeRegex = RegExp(/^\d{5}(?:[-\s]\d{4})?$/);

const createYupSchema = (schema: any, config: QuestionBlock) => {
  // console.log(config);
  const requiredMessage = "This field is required";
  const { id, type, required, content } = config;

  let blockType = () => {
    switch (type) {
      case QuestionTypesEnum.AddressQuestion:
        return yup.object({
          address1: required ? yup.string().required() : yup.string(),
          address2: yup.string().notRequired(),
          city: required ? yup.string().required() : yup.string(),
          state: required ? yup.string().required() : yup.string(),
          zip: required
            ? yup.string().matches(zipCodeRegex).required()
            : yup.string().matches(zipCodeRegex),
        });
      case QuestionTypesEnum.NameQuestion:
        return yup.object({
          firstName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
          lastName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
        });
      case QuestionTypesEnum.EmailQuestion:
        return required
          ? yup
              .string()
              .email("Please enter a valid email such as: example@domain.com")
              .required(requiredMessage)
          : yup
              .string()
              .email("Please enter a valid email such as: example@domain.com");
      case QuestionTypesEnum.NumberQuestion:
        return required ? yup.number().required(requiredMessage) : yup.number();
      case QuestionTypesEnum.PhoneQuestion:
        return required
          ? yup
              .string()
              .matches(phoneRegex, "Invalid phone number")
              .required(requiredMessage)
          : yup.string().matches(phoneRegex, "Invalid phone number");
      case QuestionTypesEnum.CheckboxQuestion:
        const checkboxValues =
          content.choices &&
          content.choices.reduce((acc, choice) => {
            return { ...acc, [choice.value]: yup.boolean() };
          }, {});
        return required
          ? yup.object(checkboxValues).required()
          : yup.object(checkboxValues);
      case QuestionTypesEnum.DateQuestion:
      case QuestionTypesEnum.RadioQuestion:
      case QuestionTypesEnum.GenderQuestion:
      case QuestionTypesEnum.TextQuestion:
      case QuestionTypesEnum.TextareaQuestion:
      case QuestionTypesEnum.SelectQuestion:
      case QuestionTypesEnum.YearInSchoolQuestion:
        return required ? yup.string().required(requiredMessage) : yup.string();
      default:
        return required ? yup.string().required(requiredMessage) : yup.string();
    }
  };

  if (Object.values(QuestionTypesEnum).indexOf(type) === -1) {
    return schema;
  }

  let validator = yup.object({
    amount: yup.number().default(0),
    blockId: yup.string().required(),
    id: yup.string().required(),
    registrantId: yup.string().required(),
    value: blockType(),
  });

  schema[id] = validator;
  return schema;
};

const yepSchema = blocks.reduce(createYupSchema, {});
const validationSchema = yup.object().shape(yepSchema);

interface FormSchemaType extends yup.Asserts<typeof validationSchema> {}

const onSubmit = (attributes: FormSchemaType) => {
  console.log(attributes);
};

const initialFormValues: FormSchemaType = {};

blocks.forEach((block: QuestionBlock) => {
  const getBlockValue = () => {
    switch (block.type) {
      case QuestionTypesEnum.AddressQuestion:
        return {
          amount: 0,
          blockId: block.id,
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
      case QuestionTypesEnum.NameQuestion:
        return {
          amount: 0,
          blockId: block.id,
          id: block.id,
          registrantId: "registrantId",
          value: {
            firstName: "",
            lastName: "",
          },
        };
      case QuestionTypesEnum.CheckboxQuestion:
        return {
          amount: 0,
          blockId: block.id,
          id: block.id,
          registrantId: "registrantId",
          value:
            (block.content.choices &&
              block.content.choices.reduce((acc, choice) => {
                return { ...acc, [choice.value]: false };
              }, {})) ??
            {},
        };
      case QuestionTypesEnum.DateQuestion:
      case QuestionTypesEnum.EmailQuestion:
      case QuestionTypesEnum.GenderQuestion:
      case QuestionTypesEnum.NumberQuestion:
      case QuestionTypesEnum.PhoneQuestion:
      case QuestionTypesEnum.RadioQuestion:
      case QuestionTypesEnum.SelectQuestion:
      case QuestionTypesEnum.TextareaQuestion:
      case QuestionTypesEnum.TextQuestion:
      case QuestionTypesEnum.YearInSchoolQuestion:
        return {
          amount: 0,
          blockId: block.id,
          id: block.id,
          registrantId: "registrantId",
          value: block.content?.default ?? "",
        };
    }
  };
  initialFormValues[block.id] = getBlockValue() || "";
});
//#endregion

export const ConferenceForm: React.FC = () => {
  //#region Form Elements Creation
  const renderFormElements = useMemo(
    () =>
      blocks.map((block: QuestionBlock, index) => {
        const fieldMap = {
          [QuestionTypesEnum.AddressQuestion]: AddressQuestion,
          [QuestionTypesEnum.DateQuestion]: DateQuestion,
          [QuestionTypesEnum.NameQuestion]: NameQuestion,
          [QuestionTypesEnum.EmailQuestion]: EmailQuestion,
          [QuestionTypesEnum.NumberQuestion]: NumberQuestion,
          [QuestionTypesEnum.SelectQuestion]: SelectQuestion,
          [QuestionTypesEnum.TextQuestion]: TextQuestion,
          [QuestionTypesEnum.TextareaQuestion]: TextAreaQuestion,
          [QuestionTypesEnum.GenderQuestion]: GenderQuestion,
          [QuestionTypesEnum.PhoneQuestion]: PhoneQuestion,
          [QuestionTypesEnum.YearInSchoolQuestion]: YearInSchoolQuestion,
          [QuestionTypesEnum.CheckboxQuestion]: CheckboxQuestion,
          [QuestionTypesEnum.RadioQuestion]: RadioQuestion,
        };

        if (Object.values(QuestionTypesEnum).indexOf(block.type) === -1)
          return null;

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
      }),
    []
  );

  //#endregion

  //#region JSX
  return (
    <>
      <Box>
        <Box
          paddingTop={2}
          sx={{
            backgroundColor: theme.palette.primary.light,
            borderBottom: `4px solid ${theme.palette.primary.main}`,
          }}
        ></Box>
        <AppBar
          position='static'
          style={{ backgroundColor: theme.palette.primary.dark }}
        >
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            maxWidth='612px'
            marginX='auto'
            marginTop='1.5rem'
            paddingX='15px'
          >
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              <Typography variant='h1' fontSize='24px' fontWeight='600'>
                test
              </Typography>
              <Button
                type='submit'
                variant='contained'
                size='small'
                color='info'
              >
                <Typography fontWeight='600' fontSize='14px'>
                  Sign out
                </Typography>
              </Button>
            </Box>
            <Box
              display='flex'
              marginTop='21px'
              marginBottom='10px'
              alignItems='center'
            >
              <CalendarIcon sx={{ fontSize: "14px", marginRight: "5px" }} />
              <Typography fontSize='14px'>
                Mon, Dec 27, 2021 2:21pm - Wed, Jun 19, 2024 2:21pm
              </Typography>
            </Box>
          </Box>
        </AppBar>
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
                  width: "612px",
                  padding: "15px",
                  backgroundColor: "white",
                  margin: "15px 0",
                }}
              >
                {renderFormElements}
                <Grid container spacing={2} marginY={2}>
                  <Grid item xs={5} md={3}>
                    <Button variant='contained' color='neutral' fullWidth>
                      Go Back
                    </Button>
                  </Grid>
                  <Grid container item xs={7} md={9} justifyContent='center'>
                    <Button
                      disabled={!props.isValid || props.isValidating}
                      type='submit'
                      fullWidth
                      variant='contained'
                      color='success'
                      aria-disabled={!props.isValid || props.isValidating}
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
      </Box>
      <Typography marginX={2} paddingBottom={3} fontSize='14px' align='center'>
        {`© ${new Date().getFullYear()} | Created with Event Registration Tool, powered by `}
        <a href='https://www.cru.org/' target='_blank' rel='noreferrer'>
          Cru
        </a>
      </Typography>
    </>
    //#endregion
  );
};
