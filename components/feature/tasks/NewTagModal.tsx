import { ChangeEvent, useState, useEffect } from "react";

import { GradientThemes } from "../../../models/Theme";
import { useUiContext } from "../../../context/UiContext";
import { useDataContext } from "../../../context/DataContext";

import { getRandomTagName } from "../../../utils/randomGenerators";
import { getInputTextError } from "../../../utils/inputValidation";

import Modal from "../../common/Modal";
import ModalTitle from "../../common/ModalTitle";
import TextInput from "../../common/TextInput";
import ButtonsWrapper from "../../common/ButtonsWrapper";
import SaveButton from "../../common/SaveButton";
import CancelButton from "../../common/CancelButton";
import ButtonsDivider from "../../common/ButtonsDivider";
import ThemePicker from "./ThemePicker";

const NewTagModal = () => {
  const { dismissAllModals } = useUiContext();
  const { themeSelection, setThemeSelection, clearAllTransactionalData } =
    useDataContext();

  const [textValue, setTextValue] = useState<string>(getRandomTagName());
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleInputNameChange(e: ChangeEvent<HTMLInputElement>) {
    //
    if (typeof e.target.value) {
      setTextValue(e.target.value);
    }
    setErrorMessage(getInputTextError(e.target.value));
  }

  function handleThemeClick(themeId: GradientThemes) {
    setThemeSelection(themeId);
  }

  function handleCancel() {
    dismissAllModals();
    clearAllTransactionalData();
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
      <ThemePicker
        selection={themeSelection}
        onClickHandler={handleThemeClick}
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
