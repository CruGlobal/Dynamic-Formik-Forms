import {
  AnswerBlock,
  AnswerBlockChoiceType,
  AnswerTypesEnum,
  RegistrantType,
  RuleType,
  RuleTypeConstantsEnum,
} from "../Formik/Formik";

const isBlockVisibleRuleCheck = (
  block: AnswerBlock,
  registrant: RegistrantType,
  ruleType: RuleTypeConstantsEnum
) => {
  let answers = registrant.answers;
  let ruleOperand = "";
  let validRuleCount = 0;
  let blockTypeSpecificRules: RuleType[] = [];

  switch (ruleType) {
    case RuleTypeConstantsEnum.SHOW_QUESTION:
      blockTypeSpecificRules = block.rules.filter(
        (rule) =>
          rule.ruleType ||
          rule.ruleType === null ||
          rule.ruleType === "" ||
          rule.ruleType === RuleTypeConstantsEnum.SHOW_QUESTION
      );
      ruleOperand =
        block.content && block.content.forceSelectionRuleOperand
          ? block.content.forceSelectionRuleOperand
          : "AND";
      break;

    case RuleTypeConstantsEnum.FORCE_SELECTION:
      blockTypeSpecificRules = block.rules.filter(
        (rule) => rule.ruleType === ruleType
      );
      ruleOperand =
        block.content && block.content.forceSelectionRuleOperand
          ? block.content.forceSelectionRuleOperand
          : "AND";
      break;

    default:
      ruleOperand = "AND";
      break;
  }

  blockTypeSpecificRules.forEach((rule, index) => {
    let answer = answers.find((answer) => answer.blockId === rule.blockId);
    if (answer && answer.value !== "") {
      let answerValue;
      let ruleValue;
      if (typeof answer.value === "object") {
        //answer of checkboxquestion will be an object
        answerValue = answer.value[rule.value]
          ? answer.value[rule.value]
          : false;
        ruleValue = true;
      } else {
        //If string is a number, parse it as a float for numerical comparison
        answerValue = !Number.isNaN(Number(answer.value))
          ? parseFloat(answer.value)
          : answer.value;
        ruleValue = !Number.isNaN(Number(answer.value))
          ? parseFloat(rule.value)
          : rule.value;
      }

      if (rule.operator === "=" && answerValue === ruleValue) {
        validRuleCount++;
      } else if (rule.operator === "!=" && answerValue !== ruleValue) {
        validRuleCount++;
      } else if (rule.operator === ">" && answerValue > ruleValue) {
      } else if (rule.operator === "<" && answerValue < ruleValue) {
        validRuleCount++;
      }
    }

    if (
      (ruleOperand === "OR" && validRuleCount > 0) ||
      (ruleOperand === "AND" && validRuleCount <= index)
    ) {
      return false; // Exit foreach as we found a case which determines the whole outcome of this function
    }
  });

  return (
    !blockTypeSpecificRules ||
    blockTypeSpecificRules.length === 0 || // If no rules are set
    (ruleOperand === "OR" && validRuleCount > 0) ||
    (ruleOperand === "AND" && validRuleCount === blockTypeSpecificRules.length)
  );
};

const isChoiceVisibleRuleCheck = (
  block: AnswerBlock,
  choice: AnswerBlockChoiceType,
  registrant: RegistrantType,
  ruleType: string
) => {
  let answers = registrant.answers;
  let ruleOperand = "";
  let validRuleCount = 0;
  let blockTypeSpecificRules: RuleType[] = [];

  switch (ruleType) {
    case RuleTypeConstantsEnum.SHOW_OPTION:
      blockTypeSpecificRules = block.rules.filter(
        (rule) =>
          rule.ruleType === ruleType && rule.blockEntityOption === choice.value
      );
      ruleOperand = choice.operand ? choice.operand : "OR";
      break;
    default:
      ruleOperand = "AND";
      break;
  }

  blockTypeSpecificRules.forEach((rule, index) => {
    let answer = answers.find(
      (answer) => answer.blockId === rule.parentBlockId
    );
    if (answer && answer.value !== "") {
      let answerValue;
      let ruleValue;
      //answer of checkboxquestion will be an object
      if (typeof answer.value === "object") {
        answerValue = answer.value[rule.value]
          ? answer.value[rule.value]
          : false;
        ruleValue = true;
      } else {
        //If string is a number, parse it as a float for numerical comparison
        answerValue = !Number.isNaN(Number(answer.value))
          ? parseFloat(answer.value)
          : answer.value;
        ruleValue = !Number.isNaN(Number(answer.value))
          ? parseFloat(rule.value)
          : rule.value;
      }

      if (rule.operator === "=" && answerValue === ruleValue) {
        validRuleCount++;
      } else if (rule.operator === "!=" && answerValue !== ruleValue) {
        validRuleCount++;
      } else if (rule.operator === ">" && answerValue > ruleValue) {
        validRuleCount++;
      } else if (rule.operator === "<" && answerValue < ruleValue) {
        validRuleCount++;
      }
    }

    if (
      (ruleOperand === "OR" && validRuleCount > 0) ||
      (ruleOperand === "AND" && validRuleCount <= index)
    ) {
      return false; // Exit lodash foreach as we found a case which determines the whole outcome of this function
    }
  });

  return (
    !blockTypeSpecificRules ||
    blockTypeSpecificRules.length === 0 || // If no rules are set
    (ruleOperand === "OR" && validRuleCount > 0) ||
    (ruleOperand === "AND" && validRuleCount === blockTypeSpecificRules.length)
  );
};

const isBlockInRegistrantType = (
  block: AnswerBlock,
  registrant: RegistrantType
) => !block.registrantTypes.includes(registrant.registrantTypeId);

const isAnyChoiceVisible = (block: AnswerBlock, registrant: RegistrantType) => {
  if (
    block.type !== AnswerTypesEnum.CheckboxQuestion &&
    block.type !== AnswerTypesEnum.SelectQuestion &&
    block.type !== AnswerTypesEnum.RadioQuestion
  ) {
    return true;
  }
  // If a block has no content choices because the user forgot to add them, automatically return false.
  if (!block.content.choices) {
    return false;
  }

  for (let i = 0, len = block.content.choices.length; i < len; i++) {
    if (isChoiceVisible(block, block.content.choices[i], registrant)) {
      return true;
    }
  }
  return false;
};

const isBlockVisible = (
  block: AnswerBlock,
  registrant: RegistrantType,
  isAdmin: boolean
) => {
  const visible =
    registrant &&
    isBlockVisibleRuleCheck(
      block,
      registrant,
      RuleTypeConstantsEnum.SHOW_QUESTION
    ) &&
    isBlockInRegistrantType(block, registrant) &&
    isAnyChoiceVisible(block, registrant);

  return block.adminOnly && !isAdmin ? false : visible;
};

const isChoiceVisible = (
  block: AnswerBlock,
  choice: AnswerBlockChoiceType,
  registrant: RegistrantType
) => {
  return (
    registrant &&
    isChoiceVisibleRuleCheck(
      block,
      choice,
      registrant,
      RuleTypeConstantsEnum.SHOW_OPTION
    )
  );
};

const isCheckboxDisabled = (block: AnswerBlock, registrant: RegistrantType) =>
  isBlockVisibleRuleCheck(
    block,
    registrant,
    RuleTypeConstantsEnum.FORCE_SELECTION
  );

export {
  isBlockVisibleRuleCheck,
  isBlockInRegistrantType,
  isBlockVisible,
  isChoiceVisible,
  isCheckboxDisabled,
};
