import { ChangeEvent, useState, useEffect } from "react";

import Modal from "../../common/Modal";
import ModalTitle from "../../common/ModalTitle";
import TextInput from "../../common/TextInput";

import { getRandomTagName } from "../../../utils/randomGenerators";
import { getInputTextError } from "../../../utils/inputValidation";
import { useUiContext } from "../../../context/UiContext";

import ButtonsWrapper from "../../common/ButtonsWrapper";
import SaveButton from "../../common/SaveButton";
import CancelButton from "../../common/CancelButton";
import ButtonsDivider from "../../common/ButtonsDivider";

const NewTagModal = () => {
  const { dismissAllModals } = useUiContext();

  const [textValue, setTextValue] = useState<string>(getRandomTagName());
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleInputNameChange(e: ChangeEvent<HTMLInputElement>) {
    //
    if (typeof e.target.value) {
      setTextValue(e.target.value);
    }
    setErrorMessage(getInputTextError(e.target.value));
  }

  function handleCancel() {
    dismissAllModals();
  }

  function handleSubmit() {
    //
  }

  return (
    <Modal>
      <ModalTitle text={"Add a New Tag"} />
      {/* Input for new tag name*/}
      <TextInput
        value={textValue}
        onValueChange={handleInputNameChange}
        messageOnError={errorMessage}
        onSubmit={handleSubmit}
      />
      <ButtonsWrapper>
        <CancelButton onClickHandler={handleCancel} />
        <ButtonsDivider></ButtonsDivider>
        <SaveButton onClickHandler={handleSubmit} />
      </ButtonsWrapper>
    </Modal>
  );
};

export default NewTagModal;
