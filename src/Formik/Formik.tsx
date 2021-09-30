import React, { ReactElement } from "react";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { NameQuestion } from "../Fields/NameQuestion";
import { EmailQuestion } from "../Fields/EmailQuestion";
import { NumberQuestion } from "../Fields/NumberQuestion";
import { SelectQuestion } from "../Fields/SelectQuestion";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

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
];

enum QuestionTypes {
  nameQuestion = "string",
  emailQuestion = "string",
  numberQuestion = "number",
  selectQuestion = "string",
}

const createYupSchema = (schema: any, config: any = {}) => {
  // console.log(config);
  const requiredMessage = "The field is required";
  const { id, type, required } = config;
  let blockType = () => {
    switch (type) {
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
              .email("A valid email address is required")
              .required(requiredMessage)
          : yup.string().email("A valid email address is required");
      case "numberQuestion":
        return required ? yup.number().required(requiredMessage) : yup.number();
      case "selectQuestion":
        return required ? yup.string().required(requiredMessage) : yup.string();
      default:
        return yup.object({
          firstName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
          lastName: required
            ? yup.string().required(requiredMessage)
            : yup.string(),
        });
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
  blocks.forEach((block: { id: string; content: any; type: string }) => {
    const getBlockValue = () => {
      switch (block.type) {
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
        nameQuestion: NameQuestion,
        emailQuestion: EmailQuestion,
        numberQuestion: NumberQuestion,
        selectQuestion: SelectQuestion,
      };

      if (Object.keys(QuestionTypes).indexOf(block.type) === -1) return null;

      const Component = fieldMap[block.type];

      let error =
        props.errors.hasOwnProperty(block.id) && props.errors[block.id];

      if (block.type) {
        return (
          <Component
            key={index}
            label={block.title}
            name={block.id}
            value={props.values[block.id]}
            onChange={props.handleChange}
            onSetFieldValue={props.setFieldValue}
            error={error}
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
    >
      {(props): ReactElement => (
        <Box display='flex' justifyContent='center'>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {renderFormElements(props)}
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
