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

//#region Types
interface AnswerBlock {
  adminOnly?: boolean;
  id: string;
  pageId: string;
  title: string;
  exportField?: string | null;
  expenseType?: string | null;
  endDateBlockId?: string | null;
  startDateBlockId?: string | null;
  exportFieldTitle?: string | null;
  type: AnswerTypesEnum;
  tag?: string | null;
  required: boolean;
  position: number;
  profileType: string | null;
  registrantTypes: RegistrantType[];
  rules: RuleType[];
  content: AnswerBlockContentType;
}

interface AnswerBlockContentType {
  default: string;
  forceSelectionRuleOperand: "AND" | "OR";
  forceSelections: {};
  ruleoperand: "AND" | "OR";
  choices?: AnswerBlockChoiceType[];
}

interface AnswerBlockChoiceType {
  value: string;
  desc: string;
  amount?: number;
}

interface RegistrantType {
  acceptChecks: boolean;
  acceptCreditCards: boolean;
  acceptPayOnSite: boolean;
  acceptScholarships: boolean;
  acceptTransfers: boolean;
  allowGroupRegistration: boolean;
  allowedRegistrantTypeSet: null;
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
  useLimit: boolean;
}

interface RuleType {
  id: string;
  blockId: string;
  parentBlockId: string;
  operator: ">" | "=";
  value: string;
  position: number;
}

export interface QuestionBlockComponentProps {
  label: string;
  name: string;
  content: AnswerBlockContentType;
  required: boolean;
}

enum AnswerTypesEnum {
  AddressQuestion = "addressQuestion",
  // CampusQuestion = "campusQuestion",
  // CheckboxQuestion = "checkboxQuestion",
  // DateQuestion = "dateQuestion",
  EmailQuestion = "emailQuestion",
  GenderQuestion = "genderQuestion",
  NameQuestion = "nameQuestion",
  NumberQuestion = "numberQuestion",
  PhoneQuestion = "phoneQuestion",
  // RadioQuestion = "radioQuestion",
  SelectQuestion = "selectQuestion",
  TextQuestion = "textQuestion",
  TextareaQuestion = "textareaQuestion",
  YearInSchoolQuestion = "yearInSchoolQuestion",
}
//#endregion

//#region JSON Data
const blocks: AnswerBlock[] = [
  {
    id: "26c09fa0-f62e-4dc4-a568-b061da6fdb09",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Email",
    exportFieldTitle: null,
    type: AnswerTypesEnum.EmailQuestion,
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
    id: "122a15bf-0608-4813-834a-0d31a8c44c64",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Name",
    exportFieldTitle: null,
    type: AnswerTypesEnum.NameQuestion,
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
    id: "0556295a-3c4d-45b2-a00e-42b1fe199421",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Number",
    exportFieldTitle: null,
    type: AnswerTypesEnum.NumberQuestion,
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
    id: "2764e22b-8623-4c2b-81e5-f625574521f2",
    pageId: "7b4c19df-7377-4d37-90fb-5b262bb66d1a",
    title: "Dropdown Question",
    exportFieldTitle: null,
    type: AnswerTypesEnum.SelectQuestion,
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
    exportFieldTitle: null,
    registrantTypes: [],
    required: false,
    position: 4,
    rules: [],
    title: "Text Question",
    type: AnswerTypesEnum.TextQuestion,
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
    exportFieldTitle: null,
    registrantTypes: [],
    required: true,
    position: 5,
    rules: [],
    title: "TextArea",
    type: AnswerTypesEnum.TextareaQuestion,
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
    exportFieldTitle: null,
    required: false,
    position: 6,
    rules: [],
    title: "Gender Question",
    type: AnswerTypesEnum.GenderQuestion,
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
    exportFieldTitle: null,
    required: true,
    position: 7,
    rules: [],
    title: "Telephone",
    type: AnswerTypesEnum.PhoneQuestion,
    content: {
      default: "",
      forceSelectionRuleOperand: "AND",
      forceSelections: {},
      ruleoperand: "AND",
    },
  },
  {
    id: "8f877b39-2653-484b-beb7-30645a7d79d1",
    pageId: "845e1657-04c2-4044-b5d0-ee0e4b1abbc7",
    profileType: "YEAR_IN_SCHOOL",
    registrantTypes: [],
    exportFieldTitle: null,
    required: false,
    position: 8,
    rules: [],
    title: "Year in School",
    type: AnswerTypesEnum.YearInSchoolQuestion,
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
    exportFieldTitle: null,
    required: true,
    position: 9,
    rules: [],
    title: "Address Question",
    type: AnswerTypesEnum.AddressQuestion,
    content: {
      default: "",
      ruleoperand: "AND",
      forceSelections: {},
      forceSelectionRuleOperand: "AND",
    },
  },
];
//#endregion

//#region Yup Scehma Creation
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
      case AnswerTypesEnum.AddressQuestion:
        return yup.object({
          address1: required ? yup.string().required() : yup.string(),
          address2: yup.string().notRequired(),
          city: required ? yup.string().required() : yup.string(),
          state: required ? yup.string().required() : yup.string(),
          zip: required
            ? yup.string().matches(zipCodeRegex).required()
            : yup.string().matches(zipCodeRegex),
        });
      case AnswerTypesEnum.NameQuestion:
        return yup.object({
          firstName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
          lastName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
        });
      case AnswerTypesEnum.EmailQuestion:
        return required
          ? yup
              .string()
              .email("Please enter a valid email such as: example@domain.com")
              .required(requiredMessage)
          : yup
              .string()
              .email("Please enter a valid email such as: example@domain.com");
      case AnswerTypesEnum.NumberQuestion:
        return required ? yup.number().required(requiredMessage) : yup.number();
      case AnswerTypesEnum.PhoneQuestion:
        return required
          ? yup
              .string()
              .matches(phoneRegex, "Invalid phone number")
              .required(requiredMessage)
          : yup.string().matches(phoneRegex, "Invalid phone number");
      case AnswerTypesEnum.GenderQuestion:
      case AnswerTypesEnum.TextQuestion:
      case AnswerTypesEnum.TextareaQuestion:
      case AnswerTypesEnum.SelectQuestion:
      case AnswerTypesEnum.YearInSchoolQuestion:
        return required ? yup.string().required(requiredMessage) : yup.string();
      default:
        return required ? yup.string().required(requiredMessage) : yup.string();
    }
  };

  if (Object.values(AnswerTypesEnum).indexOf(type) === -1) {
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

const yepSchema = blocks.reduce(createYupSchema, {});
const validationSchema = yup.object().shape(yepSchema);

interface FormSchemaType extends yup.Asserts<typeof validationSchema> {}

const onSubmit = (attributes: FormSchemaType) => {
  console.log(attributes);
};

const initialFormValues: FormSchemaType = {};

blocks.forEach((block: AnswerBlock) => {
  const getBlockValue = () => {
    switch (block.type) {
      case AnswerTypesEnum.AddressQuestion:
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
      case AnswerTypesEnum.NameQuestion:
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
      case AnswerTypesEnum.EmailQuestion:
      case AnswerTypesEnum.GenderQuestion:
      case AnswerTypesEnum.NumberQuestion:
      case AnswerTypesEnum.PhoneQuestion:
      case AnswerTypesEnum.SelectQuestion:
      case AnswerTypesEnum.TextareaQuestion:
      case AnswerTypesEnum.TextQuestion:
      case AnswerTypesEnum.YearInSchoolQuestion:
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
  const renderFormElements = (props: FormikProps<any>): any => {
    console.log(props.errors);
    return blocks.map((block: AnswerBlock, index) => {
      const fieldMap: any = {
        [AnswerTypesEnum.AddressQuestion]: AddressQuestion,
        [AnswerTypesEnum.NameQuestion]: NameQuestion,
        [AnswerTypesEnum.EmailQuestion]: EmailQuestion,
        [AnswerTypesEnum.NumberQuestion]: NumberQuestion,
        [AnswerTypesEnum.SelectQuestion]: SelectQuestion,
        [AnswerTypesEnum.TextQuestion]: TextQuestion,
        [AnswerTypesEnum.TextareaQuestion]: TextAreaQuestion,
        [AnswerTypesEnum.GenderQuestion]: GenderQuestion,
        [AnswerTypesEnum.PhoneQuestion]: PhoneQuestion,
        [AnswerTypesEnum.YearInSchoolQuestion]: YearInSchoolQuestion,
      };

      if (Object.values(AnswerTypesEnum).indexOf(block.type) === -1)
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
    });
  };
  //#endregion

  //#region JSX
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
    //#endregion
  );
};
